import { Button } from "@/components/ui/button";
import Image from "next/image";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface ContactComponentProps {
  selectedLinks: SocialLink[];
}

export default function ContactComponent({
  selectedLinks,
}: ContactComponentProps) {
  const isOdd = selectedLinks.length % 2 !== 0; // Check if the number of buttons is odd

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold text-black-600 mb-8">Contact</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {selectedLinks.map((link, index) => {
          // Determine if the current button is the last one
          const isLastButton = index === selectedLinks.length - 1;

          // Determine button classes
          const buttonClasses = `
            h-[66px] rounded-[12px] flex items-center shadow-md bg-white hover:bg-white hover:text-black
            ${
              isOdd && isLastButton
                ? "justify-center col-span-2 sm:col-span-3 lg:col-span-1"
                : "justify-start"
            }
            px-5 w-full
          `;

          return (
            <Button
              key={index}
              variant="ghost"
              className={buttonClasses}
              onClick={() => window.open(link.url, "_blank")}
            >
              <Image
                src={link.icon}
                alt={`${link.name} icon`}
                width={28}
                height={28}
              />
              <span className="font-semibold ml-4">{link.name}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
