import { useState, useRef, useEffect } from "react";
import { X, Link2 } from "lucide-react";

const UsernameDialog = ({ onClose }: { onClose: () => void }) => {
  const [username, setUsername] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith("skillsnap.me/")) {
      setUsername(value.slice(13));
    }
  };

  return (
    <div className="fixed top-[86.69vh] left-[12.98vw] w-[38.19vw] h-[34.67vh] bg-white rounded-[24px] shadow-lg overflow-hidden font-sans">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[22px] font-semibold text-black">
            Change Username
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-3 flex-grow">
          <label
            htmlFor="username"
            className="block text-[14px] font-medium text-black"
          >
            Enter new username
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              id="username"
              type="text"
              value={`skillsnap.me/${username}`}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-[16px] text-black border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
        <button
          className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white text-[16px] font-medium py-3 px-4 rounded-[12px] transition duration-150 ease-in-out flex items-center justify-center mt-3"
          onClick={() => {
            // Handle getting new link
          }}
        >
          <span>Get Your New Link</span>
          <Link2 className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default UsernameDialog;
