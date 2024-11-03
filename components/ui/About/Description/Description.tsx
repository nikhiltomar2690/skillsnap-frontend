"use client";

import React, { useState } from "react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import WriteAboutYourselfDialog from "@/components/Dialogs/WriteAboutYourself";

interface Props {
  description?: string;
  readOnly?: boolean;
  onSave?: (newDescription: string) => void;
}

const Description = ({ description = "", readOnly = false, onSave }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [localDescription, setLocalDescription] = useState(description);

  // Open dialog when pencil button is clicked
  const handleEditClick = () => {
    setIsDialogOpen(true);
  };

  // Close dialog and reset state when the dialog is closed
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  // Save the content from the dialog box and update local state
  const handleDialogSave = (newContent: string) => {
    setLocalDescription(newContent);
    if (onSave) {
      onSave(newContent); // Trigger onSave callback if passed as a prop
    }
    handleDialogClose(); // Close the dialog after saving
  };

  return (
    <div className="about card-shadow bg-white card-padding rounded basis-4/6 relative flex flex-col justify-between">
      {!readOnly && (
        <button
          className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center"
          onClick={handleEditClick} // Trigger the dialog to open
        >
          <Pencil className="text-white w-4 h-4" />
        </button>
      )}
      <Image src={"/ic_about.png"} alt="palm waving" width={40} height={40} />
      <div>
        <div className="text-slate-500 text-2xl font-medium">
          Little about me
        </div>
        <textarea
          value={localDescription}
          className="bg-transparent text-base sm:text-lg md:text-xl font-medium text-slate-900 w-full text-left p-0 placeholder-black focus-visible:outline-none placeholder:text-xl placeholder:text-black placeholder:font-medium min-h-24 max-h-36 overflow-y-auto resize-none"
          placeholder="..."
          rows={2}
          readOnly={readOnly}
        />
      </div>

      <WriteAboutYourselfDialog
        isOpen={isDialogOpen} // Pass dialog open state
        onClose={handleDialogClose} // Handle dialog close
        onSave={handleDialogSave} // Handle save and close
        initialContent={localDescription} // Provide initial content for editing
      />
    </div>
  );
};

export default Description;
