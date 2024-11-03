"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import frameImage from "@/public/frame.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormInputs = z.infer<typeof formSchema>;

export default function ForgotPasswordPage() {
  const [mounted, setMounted] = useState(false);

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
      const response = await fetch("api call for reset password", {
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
              Forgot Password?
            </CardTitle>
            <p className="text-base text-[#667085]">
              No worries, we'll send you reset instructions.
            </p>
          </CardHeader>
          <CardContent className="px-[52px] pb-10 space-y-6">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="space-y-2 text-black">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-[#344054]"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="w-full bg-white border border-[#D0D5DD] rounded-[8px] lg:rounded-[8px] py-2.5 px-3.5 text-base h-11"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white border border-[#D0D5DD] rounded-[8px] lg:rounded-[8px] py-2.5 px-4 text-base font-semibold h-11"
              >
                Reset Password
              </Button>
            </form>
            <p className="text-sm text-[#344054] text-left ml-1 font-semibold">
              Remembered your password?{" "}
              <Link
                href="/loginuser"
                className="text-[#FF6B00] hover:underline underline"
              >
                Log in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
