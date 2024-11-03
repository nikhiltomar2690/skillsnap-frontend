"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, EllipsisVertical, Check, Link2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input from "@/components/custom/InputField";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TextareaField from "./custom/TextareaField";

interface Experience {
  companyName: string;
  startDate: string;
  endDate: string;
  title: string;
  skills: string[];
  description: string;
  link: string;
}

const ExperienceCard = ({
  experience,
  isFirstInRow,
  onClick,
}: {
  experience: Experience;
  isFirstInRow: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`${
        isFirstInRow
          ? "w-full lg:w-[calc(50%-12px)]"
          : "w-full lg:w-[calc(25%-12px)]"
      } h-[270px] rounded-3xl experience-shadow bg-white flex flex-col justify-between py-6 px-[18px] mb-6 cursor-pointer`}
      onClick={onClick}
    >
      <div>
        <h2 className="text-[22px] text-neutral-900 font-medium">
          {experience.companyName}
        </h2>
        <p className="text-base text-neutral-500 font-medium">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
      <div>
        <h2 className="text-[22px] text-neutral-900 font-medium">
          {experience.title}
        </h2>
        <p className="text-sm text-neutral-900 font-medium">See More</p>
      </div>
    </div>
  );
};

const ExperienceDialog = ({
  experience,
  isOpen,
  onClose,
}: {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] sm:max-w-[681px] p-0 overflow-hidden rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[24px]">
        <div className="p-4 sm:p-6 flex flex-col h-full">
          <DialogHeader className="flex flex-row items-center justify-between mb-4">
            <div className="flex-1">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-black">
                {experience.companyName}
              </DialogTitle>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <p className="text-[#FF6B00] font-semibold">
                {experience.startDate} - {experience.endDate}
              </p>
              <Button variant="link" onClick={onClose} className="p-0 h-auto">
                <X className="h-6 w-6 text-black" />
              </Button>
            </div>
            <div className="flex sm:hidden items-center gap-4">
              <Button variant="link" onClick={onClose} className="p-0 h-auto">
                <X className="h-6 w-6 text-black" />
              </Button>
            </div>
          </DialogHeader>
          <hr className="border-gray-200 mb-4" />

          {/* Content that adjusts to the available space */}
          <div className="space-y-4 flex-grow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                <span className="text-gray-700">Title:</span> {experience.title}
              </h3>
              <Button
                variant="ghost"
                className="text-black p-0 h-auto hover:bg-white hover:text-black"
                onClick={() => window.open(experience.link, "_blank")}
              >
                View <span className="ml-1">↗</span>
              </Button>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Skills:
              </h4>
              <div className="flex flex-wrap gap-2 rounded-[4px]">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white border border-gray-200 text-gray-800 px-3 py-1 rounded-[4px] text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Description:
              </h4>
              {/* Dynamic height for description with scroll */}
              <div className="text-gray-600 max-h-[150px] overflow-y-auto pr-2">
                {experience.description}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface ProfessionalExperienceProps {
  experiences: Experience[];
  showCardActions?: boolean;
}

const ProfessionalExperience = ({
  experiences,
  showCardActions = true,
}: ProfessionalExperienceProps) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <div className="space-y-1">
      <div className="flex flex-wrap justify-between gap-2">
        <h2 className="font-semibold text-[22px]">Professional Experience</h2>
        {showCardActions && (
          <div className="flex items-center gap-3">
            <ProfessionalCard />
            <Button className="rounded-full text-white">
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-3 pt-6">
        {visibleExperiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            isFirstInRow={index % 3 === 0}
            onClick={() => setSelectedExperience(experience)}
          />
        ))}
      </div>
      {experiences.length > 3 && (
        <Button
          variant="outline"
          className="w-full mt-0 text-center border-[1px] border-gray-300 rounded-[10px]"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View More"}
        </Button>
      )}
      {selectedExperience && (
        <ExperienceDialog
          experience={selectedExperience}
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
};

const ProfessionalCard = () => {
  return (
    <div className="rounded-3xl">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"} className="rounded-full">
            <Plus width={20} height={20} className="mr-2" />
            Add Experience
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[680px] w-full max-h-[690px] text-black">
          <DialogHeader className="border-b border-neutral-200">
            <DialogTitle className="text-[22px]">Experience</DialogTitle>
          </DialogHeader>
          <form className="space-y-3 max-h-[500px] overflow-auto">
            <div className="space-y-2.5">
              <Label className="text-lg text-neutral-900">Company Name</Label>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Enter company name"
                  className="placeholder:text-neutral-700 text-base max-w-[527px] w-full"
                />
                <div className="border border-primary cursor-pointer py-3 px-[18px] flex items-center gap-2 text-primary rounded-[6px]">
                  <Link2 /> Link
                </div>
              </div>
            </div>
            <div className="space-y-2.5">
              <Label className="text-lg text-neutral-900">Title</Label>
              <div className="flex sm:flex-row flex-col items-center gap-2">
                <Input
                  placeholder="Type Here..."
                  className="placeholder:text-neutral-700 text-base sm:max-w-[467px] w-full"
                />
                <Select>
                  <SelectTrigger className="rounded-[6px] py-6 sm:w-[180px]">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-[6px] bg-white text-black">
                    <SelectItem value="1">Internship</SelectItem>
                    <SelectItem value="2">Full Time</SelectItem>
                    <SelectItem value="3">Part Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-2">
              <div className="flex flex-col gap-2.5 w-full">
                <Label className="text-lg text-neutral-900">From</Label>
                <Input
                  placeholder="Type Here..."
                  className="placeholder:text-neutral-700 text-base sm:max-w-[304px] w-full"
                />
              </div>
              <div className="flex flex-col gap-2.5 w-full">
                <Label className="text-lg text-neutral-900">To</Label>
                <Input
                  placeholder="Type Here..."
                  className="placeholder:text-neutral-700 text-base sm:max-w-[304px] w-full"
                />
                <div className="flex items-center gap-1.5">
                  <Checkbox className="rounded-[2px]" id="terms1" />
                  <Label
                    htmlFor="terms1"
                    className="text-xs cursor-pointer text-neutral-900"
                  >
                    Currently Working Here
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <Label className="text-lg text-neutral-900">Description</Label>
              <TextareaField
                placeholder="Enter Your Text Here"
                className="text-black resize-none"
                rows={4}
              />
            </div>
          </form>
          <DialogFooter className="w-full bg-white border-t border-neutral-200">
            <Button className="text-white text-base mt-2 rounded-[6px]">
              <Check width={20} height={20} className="mr-2" /> Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfessionalExperience;
