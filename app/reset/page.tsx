"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import frameImage from "@/public/frame.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

const formSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/\d/, "Password must contain at least one digit"),
});

type FormInputs = z.infer<typeof formSchema>;

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    console.log("Form data", data);
    try {
      const response = await fetch("api call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("API response", result);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Image
        src={frameImage}
        alt="SkillSnap Logo"
        className="absolute bottom-0 left-0 z-0 object-cover w-auto h-auto max-w-[678px] max-h-[646px] hidden lg:block"
      />
      <div className="relative z-10 flex flex-1 justify-center lg:justify-end items-center lg:pr-40 lg:mr-24">
        <Card
          className="w-full max-w-[490px] bg-white rounded-lg shadow-[0px_4px_20px_0px_#40404040]"
          style={{ border: "none" }}
        >
          <CardHeader className="pt-10 px-[52px]">
            <CardTitle className="text-[32px] font-bold mb-1 text-black">
              Set New Password
            </CardTitle>
            <p className="text-base text-[#667085]">Choose a strong password</p>
          </CardHeader>
          <CardContent className="px-[52px] pb-10 pt-1 space-y-6">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#344054]"
                >
                  New Password
                </label>
                <div className="relative text-gray-700">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                    {...register("password")}
                    className="w-full bg-white border border-[#D0D5DD] rounded-[8px] lg:rounded-[8px] py-2.5 px-3.5 text-base h-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-600" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF6B00] text-white text-base font-semibold rounded-[8px] py-2.5 h-11"
              >
                Reset Password
              </Button>
            </form>
            <div className="text-sm text-[#344054] text-center underline">
              <Link
                href="/loginuser"
                className="text-[#FF6B00] hover:underline"
              >
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
