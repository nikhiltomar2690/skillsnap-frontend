"use client";
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import frameImage from "@/public/frame.png";
import smallFrameImage from "@/public/small_frame.png";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Define zod schema for OTP validation
const otpSchema = z.string().length(6, "OTP must be 6 digits.");

export default function Component() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill("")); // State to hold OTP digits
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]); // Refs for input fields
  const [error, setError] = useState<string | null>(null); // Error state
  const router = useRouter(); // Router for navigation

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      if (value !== "" && index === otp.findIndex((digit) => digit === "")) {
        newOtp[index] = value;
        setOtp(newOtp);
      }
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const currentEmptyIndex = otp.findIndex((digit) => digit === "");
    if (index === currentEmptyIndex || otp[index] !== "") {
      inputRefs.current[index]?.focus();
    }
  };

  const validateOtp = async () => {
    const otpValue = otp.join("");
    const result = otpSchema.safeParse(otpValue);

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: otpValue }),
        credentials: "include", // Include cookies for unverifiedEmail
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message); // Display error message from backend
      } else {
        setError(null);
        router.push("/profile/edit"); // Redirect on success
      }
    } catch (error) {
      setError("An error occurred while verifying OTP. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5EE] flex items-center justify-center p-4 relative">
      <Image
        src={frameImage}
        alt="SkillSnap Logo"
        className="absolute bottom-0 left-0 z-0 object-cover w-auto h-auto max-w-[678px] max-h-[646px] hidden lg:block"
      />
      <Image
        src={smallFrameImage}
        alt="frameicon"
        className="absolute z-20 hidden lg:block max-w-[104.55px] max-h-[100px] bottom-90 left-1/3 translate-x-[-50%]"
      />

      <div className="relative z-10 flex flex-1 justify-center lg:justify-end items-center lg:pr-40 lg:mr-24">
        <Card className="w-full max-w-[90%] sm:max-w-[490px] bg-white rounded-lg shadow-lg border-none px-4 lg:px-12">
          <CardHeader className="pt-10">
            <CardTitle className="text-[28px] sm:text-[32px] font-bold mb-2 text-black">
              Welcome to <span className="text-[#FF6B00]">SkillSnap</span>
            </CardTitle>
            <p className="text-base text-[#667085]">
              New way of showcasing your skills
            </p>
          </CardHeader>

          <CardContent className="pb-10 pt-6 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-base text-[#344054]">
                OTP sent to -{" "}
                <span className="text-[#FF6B00]">example@email.com</span>
              </p>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 p-0 hover:bg-transparent focus:outline-none"
                onClick={() => (window.location.href = "/register")}
              >
                <Pencil className="h-5 w-5 text-[#FF6B00]" />
              </Button>
            </div>

            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-[#344054] mb-1.5"
              >
                OTP
              </label>
              <div className="flex gap-1 ">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onMouseDown={(e) => handleMouseDown(e, index)}
                    className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-medium text-black border border-[#D0D5DD] rounded-[8px] focus:border-[#FF6B00] focus:ring-[#FF6B00]"
                  />
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <Button
              className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white border border-[#D0D5DD] rounded-[8px] py-2.5 px-4 text-base font-semibold h-11"
              onClick={validateOtp}
            >
              Verify OTP <span className="ml-2">→</span>
            </Button>

            <div className="text-sm text-[#344054] font-medium">
              <span>Already have an account?</span>
              <Link
                href="/loginuser"
                className="text-[#FF6B00] hover:underline ml-1 underline"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
