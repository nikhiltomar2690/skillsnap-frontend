"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, EllipsisVertical, Check, Link2 } from "lucide-react";
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
            {/* company name */}
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
            {/* Title */}
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
            {/* From and To */}
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
            {/* Description */}
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

const FilledProfessionalState = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-6">
      <div className="max-w-[556px] w-full h-[270px] rounded-3xl experience-shadow bg-white flex flex-col justify-between py-6 px-[18px]">
        <div>
          <h2 className="text-[22px] text-neutral-900 font-medium">Dribbble</h2>
          <p className="text-base text-neutral-500 font-medium">2015 - 2019</p>
        </div>
        <div>
          <h2 className="text-[22px] text-neutral-900 font-medium">
            Product Designer
          </h2>
          <p className="text-sm text-neutral-900 font-medium">See More</p>
        </div>
      </div>
      <div className="w-[267px] h-[270px] rounded-3xl experience-shadow bg-white flex flex-col justify-between py-6 px-[18px]">
        <div>
          <h2 className="text-[22px] text-neutral-900 font-medium">Dribbble</h2>
          <p className="text-base text-neutral-500 font-medium">2015 - 2019</p>
        </div>
        <div>
          <h2 className="text-[22px] text-neutral-900 font-medium">
            Product Designer
          </h2>
          <p className="text-sm text-neutral-900 font-medium">See More</p>
        </div>
      </div>
      <div className="w-[267px] h-[270px] rounded-3xl experience-shadow bg-white flex flex-col justify-between py-6 px-[18px]">
        <div>
          <h2 className="text-[22px] text-neutral-900 font-medium">Dribbble</h2>
          <p className="text-base text-neutral-500 font-medium">2015 - 2019</p>
        </div>
        <div>
          <h2 className="text-[22px] text-neutral-900 font-medium">
            Product Designer
          </h2>
          <p className="text-sm text-neutral-900 font-medium">See More</p>
        </div>
      </div>
    </div>
  );
};

const ProfessionalExperience = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-2">
        <h2 className="font-semibold text-[22px]">Professional Experience</h2>
        <div className="flex items-center gap-3">
          <ProfessionalCard />
          <Button className="rounded-full text-white">
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between gap-6">
        <div className="max-w-[360px] w-full h-[271px] border-dashed border border-neutral-400 rounded-3xl"></div>
        <div className="max-w-[360px] w-full h-[271px] border-dashed border border-neutral-400 rounded-3xl"></div>
        <div className="max-w-[360px] w-full h-[271px] border-dashed border border-neutral-400 rounded-3xl"></div>
      </div>
      <FilledProfessionalState />
    </>
  );
};

export default ProfessionalExperience;
