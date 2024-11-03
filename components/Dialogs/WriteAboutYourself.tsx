"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Check } from "lucide-react";

interface WriteAboutYourselfDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (content: string) => void;
  initialContent?: string;
}

export default function WriteAboutYourselfDialog({
  isOpen,
  onClose,
  onSave,
  initialContent = "",
}: WriteAboutYourselfDialogProps) {
  const [content, setContent] = useState(initialContent);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setContent(initialContent); // Reset content when the dialog opens
  }, [initialContent]);

  if (!isMounted) {
    return null;
  }

  const handleSave = () => {
    onSave(content);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-6 overflow-hidden rounded-[24px] w-[550px] max-w-[90vw] max-h-[90vh] bg-white shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-semibold text-black">
            Write something about yourself
          </DialogTitle>
        </DialogHeader>
        <Textarea
          placeholder="Type Here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 text-base text-gray-900 border border-gray-200 rounded-[16px] focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-4 p-3"
        />
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-6 py-2 rounded-full flex items-center text-sm font-medium"
          >
            <Check className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
      </DialogContent>
    </Dialog>
  );
}
