"use client";
import React from "react";
import { object, string, number, date, InferType } from "yup";
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
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

type formSchema = InferType<typeof schema>;

const ProfessionalCard = () => {
  const onSubmit = (data: formSchema) => console.log(data);

  return (
    <div className="rounded-3xl">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"} className="rounded-full">
            <Plus width={20} height={20} className="mr-2" />
            Add Experience
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[680px] w-full h-[690px] text-black">
          <DialogHeader className="border-b border-neutral-200">
            <DialogTitle className="text-[22px]">Experience</DialogTitle>
          </DialogHeader>
          <form onSubmit={() => onSubmit} className="space-y-2">
            <div>
              <Label className="text-lg text-neutral-900">Company Name</Label>
              <div className="flex items-center gap-2">
                <Input />
                <div className="border border-primary py-2 px-[18px] flex items-center gap-2 text-primary rounded-[6px]">
                  <Link2 /> Link
                </div>
              </div>
            </div>
            <div>
              <Label className="text-lg text-neutral-900">Title</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  className="rounded-[6px]"
                  placeholder="Type Here..."
                />
                <Select>
                  <SelectTrigger className="rounded-[6px] w-[180px]">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-[6px]">
                    <SelectItem value="light">Internship</SelectItem>
                    <SelectItem value="dark">Full Time</SelectItem>
                    <SelectItem value="system">Part Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
          <DialogFooter className="w-full bg-white">
            <Button className="text-white text-base rounded-[6px]">
              <Check width={20} height={20} className="mr-2" /> Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ProfessionalExperience = () => {
  return (
    <>
      <div className="flex justify-between gap-2">
        <h2 className="font-semibold text-[22px]">Professional Experience</h2>
        <div className="flex items-center gap-3">
          <ProfessionalCard />
          <Button className="rounded-full text-white">
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="max-w-[360px] w-full h-[271px] border-dashed border border-neutral-400 rounded-3xl"></div>
        <div className="max-w-[360px] w-full h-[271px] border-dashed border border-neutral-400 rounded-3xl"></div>
        <div className="max-w-[360px] w-full h-[271px] border-dashed border border-neutral-400 rounded-3xl"></div>
      </div>
    </>
  );
};

export default ProfessionalExperience;
