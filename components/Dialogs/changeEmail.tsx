import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Pencil } from "lucide-react";

interface ChangeEmailOTPDialogProps {
  open: boolean;
  onClose: () => void;
  email: string;
  onEdit: () => void;
}

const ChangeEmailOTPDialog = ({
  open,
  onClose,
  email,
  onEdit,
}: ChangeEmailOTPDialogProps) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      inputRefs.current[0]?.focus();
    }
  }, [open]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

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
          <div className="space-y-6 flex-grow">
            <div className="flex items-center justify-between">
              <p className="text-[14px] text-black">
                Verification OTP sent to -{" "}
                <span className="text-[#FF6B00]">{email}</span>
              </p>
              <button
                onClick={onEdit}
                className="text-gray-400 hover:text-gray-600"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>
            <div>
              <label
                htmlFor="otp-input"
                className="block text-[14px] font-medium text-black mb-2"
              >
                OTP
              </label>
              <div className="flex justify-between">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-[16px] border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                ))}
              </div>
            </div>
          </div>
          <button
            className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-[16px] font-medium py-3 px-4 rounded-[12px] transition duration-150 ease-in-out mt-6"
            onClick={() => {
              // Handle OTP verification
            }}
          >
            Verify OTP
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeEmailOTPDialog;
