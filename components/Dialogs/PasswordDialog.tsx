import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const PasswordDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [password, setPassword] = useState("****");
  const [confirmPassword, setConfirmPassword] = useState("****");

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "****") {
      e.target.value = "";
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      e.target.value = "****";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-0 bg-white rounded-[24px] shadow-lg overflow-hidden font-sans w-[550px]">
        <div className="p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-semibold text-black">
              Reset Password
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4 flex-grow">
            <div>
              <label
                htmlFor="new-password"
                className="block text-[14px] font-medium text-black mb-1"
              >
                Enter new password
              </label>
              <input
                id="new-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="w-full px-3 py-2 text-[16px] text-black border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-[14px] font-medium text-black mb-1"
              >
                Re - Enter new password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="w-full px-3 py-2 text-[16px] text-black border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-[16px] font-medium py-3 px-4 rounded-[12px] transition duration-150 ease-in-out mt-6"
            onClick={() => {
              // Handle password reset
            }}
          >
            Reset Password
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordDialog;
