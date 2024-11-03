import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLink = () => {
  return (
    <Button
    // rel="noopener noreferrer"
    // className="w-full sm:w-[300px] h-[80px] px-[16px] py-[20px] rounded-[12px] border border-[#E5E7EB] bg-white flex items-center justify-center space-x-2 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {/* <span className="text-[18px] font-medium text-[#111827] leading-[28px]">
        {name}
      </span> */}
      <ArrowUpRight className="w-[24px] h-[24px] text-[#111827]" />
    </Button>
  );
};

export default SocialLink;
