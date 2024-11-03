"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, LinkIcon } from "lucide-react";
import { useState } from "react";
import { UrlForm } from "@/components/forms/UrlForm";
import { DatePicker } from "@/lib/DatePicker";
import { format } from "date-fns";

const schema = z.object({
  award: z.string().min(1, { message: "Award is required" }),
  issuedBy: z.string().optional(),
  date: z.string().optional(),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface CourseFormProps {
  onClose: () => void;
}

export default function AwardForm({ onClose }: CourseFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isUrlFormOpen, setIsUrlFormOpen] = useState(false);
  const [enteredUrl, setEnteredUrl] = useState<string | null>(null);
  const [selectedStartDate, setSelectedStartDate] = useState<
    Date | undefined
  >();

  const handleDateChange = (field: "date", date: Date) => {
    const formattedDate = format(date, "MM-yyyy");
    setValue(field, formattedDate);
    setSelectedStartDate(date);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    onClose();
  };

  const handleUrlSubmit = (url: string) => {
    setEnteredUrl(url);
    setIsUrlFormOpen(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-1 bg-white rounded-lg"
      >
        {/* Award Input */}
        <div className="space-y-2">
          <Label htmlFor="award" className="text-sm font-semibold text-black">
            Award Name<span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-1">
            <Input
              id="award"
              {...register("award")}
              className="flex-grow border-gray-300 rounded-[4px]"
              placeholder="Enter award title"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsUrlFormOpen(true)}
              className="px-3 py-2 h-10 border-orange-300 text-orange-500 hover:bg-orange-500 rounded-[4px]"
            >
              <LinkIcon className="h-4 w-4" />
              <span className="ml-2">Add Link</span>
            </Button>
          </div>
          {errors.award && (
            <p className="text-red-500 text-sm">{errors.award.message}</p>
          )}
        </div>

        {/* Issued By Input */}
        <div className="space-y-2">
          <Label
            htmlFor="issuedBy"
            className="text-sm font-semibold text-black"
          >
            Issued By
          </Label>
          <Input
            id="issuedBy"
            {...register("issuedBy")}
            className="border-gray-300 rounded-[4px]"
            placeholder="Enter Institution"
          />
        </div>

        {/* Date Input */}
        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm font-semibold text-black">
            Date
          </Label>
          <div className="relative">
            <Input
              id="date"
              {...register("date")}
              value={
                selectedStartDate ? format(selectedStartDate, "MM-yyyy") : ""
              }
              className="border-gray-300 rounded-[4px]"
              placeholder="MM/YYYY"
              onChange={(e) => setSelectedStartDate(new Date(e.target.value))}
            />
            <DatePicker
              selectedDate={selectedStartDate}
              onDateChange={(date) => handleDateChange("date", date)}
            />
          </div>
        </div>

        {/* Description Textarea */}
        <div className="space-y-2">
          <Label
            htmlFor="description"
            className="text-sm font-semibold text-black"
          >
            Description
          </Label>
          <Textarea
            id="description"
            {...register("description")}
            className="border-gray-300 rounded-[4px] h-20"
            placeholder="Type Here..."
          />
        </div>

        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-[4px] px-2 py-1"
          >
            <Check className="mr-2  " size={18} />
            Save
          </Button>
        </div>
      </form>

      <UrlForm
        isOpen={isUrlFormOpen}
        onClose={() => setIsUrlFormOpen(false)}
        onSave={handleUrlSubmit}
      />
    </>
  );
}
