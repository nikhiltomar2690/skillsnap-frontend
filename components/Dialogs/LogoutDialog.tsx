import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutDialog = ({ open, onClose, onConfirm }: LogoutDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] p-6 bg-white rounded-[24px] shadow-lg overflow-hidden font-sans">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] font-semibold text-black">
            Logout Confirmation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-6">
          <p className="text-[16px] text-gray-600 font-medium">
            Are you sure you want to logout?
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="py-2 px-4 text-[14px] font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-[8px] transition duration-150 ease-in-out"
            >
              No
            </button>
            <button
              onClick={onConfirm}
              className="py-2 px-4 text-[14px] font-medium text-white bg-[#FF6B00] hover:bg-[#FF5700] rounded-[8px] transition duration-150 ease-in-out"
            >
              Yes, Logout
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutDialog;
