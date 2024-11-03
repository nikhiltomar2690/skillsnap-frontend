import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Copy } from "lucide-react";

interface InviteFriendDialogProps {
  open: boolean;
  onClose: () => void;
  snapPoints: number;
}

const InviteDialog = ({
  open,
  onClose,
  snapPoints,
}: InviteFriendDialogProps) => {
  const [copied, setCopied] = useState(false);
  const inviteLink = "Skillsnap.me/gerwgvsrver";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] p-6 bg-white rounded-[24px] shadow-lg overflow-hidden font-sans">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[22px] font-semibold text-black">
            Invite Friend
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-[12px] p-3">
            <p className="text-[14px] font-medium text-gray-500 mb-1">
              Snap Points
            </p>
            <p className="text-[32px] font-bold text-[#FF6B00]">{snapPoints}</p>
          </div>
          <div>
            <p className="text-[14px] font-medium text-gray-500 mb-2">
              Your Unique Invite Link
            </p>
            <div className="flex space-x-2">
              <input
                type="text"
                readOnly
                value={inviteLink}
                className="flex-grow px-3 py-2 text-[16px] text-black bg-white border border-gray-200 rounded-[8px] focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className="bg-white hover:bg-gray-50 text-[#FF6B00] text-[14px] font-medium py-2 px-4 border border-[#FF6B00] rounded-[8px] transition duration-150 ease-in-out flex items-center"
              >
                <Copy className="w-4 h-4 mr-2" />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteDialog;
