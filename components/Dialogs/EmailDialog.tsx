import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ChangeEmailDialogProps {
  open: boolean;
  onClose: () => void;
}

const EmailDialog = ({ open, onClose }: ChangeEmailDialogProps) => {
  const [email, setEmail] = useState("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] p-6 bg-white rounded-[24px] shadow-lg overflow-hidden font-sans">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-semibold text-black">
              Change Email
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4 flex-grow">
            <label
              htmlFor="new-email"
              className="block text-[14px] font-medium text-black"
            >
              Enter new email
            </label>
            <input
              id="new-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Example@mail.com"
              className="w-full px-3 py-2 text-[16px] text-black border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
          <button
            className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-[16px] font-medium py-3 px-4 rounded-[12px] transition duration-150 ease-in-out mt-6"
            onClick={() => {
              // Handle email verification
            }}
          >
            Verify Email
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailDialog;
