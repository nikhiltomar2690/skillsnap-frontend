"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import loginbackground from "@/public/loginbackground.png";
import mobilebackground from "@/public/mobilebackground.png";

export default function Component() {
  const [inputValue, setInputValue] = useState("skillsnap.me/");
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
    const newValue = e.target.value;
    if (newValue.startsWith("skillsnap.me/")) {
      setInputValue(newValue);
    } else {
      setInputValue("skillsnap.me/" + newValue.slice("skillsnap.me/".length));
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Desktop background */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={loginbackground}
          alt="SkillSnap desktop background"
          layout="fill"
          objectFit="cover"
          objectPosition="left top"
          quality={100}
          priority
        />
      </div>

      {/* Mobile background */}
      <div className="md:hidden absolute inset-0">
        <Image
          src={mobilebackground}
          alt="SkillSnap mobile background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center md:justify-end p-4 mt-32 md:mt-0">
        <Card className="w-full max-w-[400px] rounded-[32px] shadow-lg border border-gray-200 md:mr-[180px]">
          <CardHeader className="space-y-1 pb-0 pt-8 px-8">
            <CardTitle className="text-[32px] font-bold leading-[40px] text-black">
              Something for <span className="text-[#FF6B00]">You</span>
            </CardTitle>
            <p className="text-[16px] text-[#667085] font-normal mt-2">
              New way of showcasing your skills
            </p>
          </CardHeader>
          <CardContent className="space-y-6 pt-8 px-8 pb-8">
            <div className="space-y-2">
              <label
                htmlFor="personal-link"
                className="text-[16px] font-semibold text-[#101828]"
              >
                Get Your Personal Link (Fancy...)
              </label>
              <div className="relative">
                <Input
                  id="personal-link"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  ref={inputRef}
                  className="text-gray-700 w-full bg-white border border-[#D0D5DD] rounded-[8px] py-2 px-3 text-[16px] h-[48px]"
                />
              </div>
            </div>
            <Link href="/register" className="block w-full">
              <Button className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white border border-[#D0D5DD] rounded-[8px] py-2 px-3 text-[16px] font-semibold h-[48px]">
                Get Your Link{" "}
                <span className="ml-2 inline-block text-2xl">∞</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
