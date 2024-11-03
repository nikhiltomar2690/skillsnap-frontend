"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function WelcomeDialog() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 overflow-hidden rounded-lg w-[490px] max-w-[90vw] max-h-[90vh]">
        <div className="px-[52px] py-10 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-[32px] font-bold text-black text-center leading-[38px]">
              Welcome Aboard!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-center">
            <p className="text-base text-[#667085]">
              No tutorial is needed; you can take it from here. It's that
              simple.
            </p>
            <p className="text-lg font-semibold text-[#FF6B00]">
              Keep Learning. Keep Growing.
            </p>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white border border-[#D0D5DD] rounded-[8px] py-3 px-4 text-lg font-semibold h-[52px] mt-6 border-none"
          >
            Start Building
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
