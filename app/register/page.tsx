// @ts-nocheck
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import frameImage from "@/public/frame.png";
import smallFrameImage from "@/public/small_frame.png";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/\d/, "Password must contain at least one digit"),
});

type FormInputs = z.infer<typeof formSchema>;

export default function Register() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    // Extract email and password from form data
    const { email, password } = data;

    console.log("Form data", { email, password });

    try {
      const response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      // Check if response status is 200 (successful registration)
      if (response.status === 200) {
        setError("");
        // Redirect to verification page after successful registration
        router.push("/verify");
      } else if (response.status === 400) {
        // Check the specific error message to handle specific cases
        const errorData = await response.json();
        if (errorData.message === "Email is already registered") {
          setError("This email is already registered");
        } else if (errorData.message === "Email is required") {
          setError("Email is required");
        } else if (errorData.message === "Password is required") {
          setError("Password is required");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      } else {
        // Handle other unexpected errors
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      // Handle network or unexpected errors
      setError("Error occurred, try again");
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
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
        <Card className="w-full max-w-[490px] bg-white rounded-lg shadow-lg border-none">
          <CardHeader className="space-y-1 pb-0 pt-8 px-8">
            <CardTitle className="text-[32px] font-bold leading-tight text-black">
              Welcome to <span className="text-[#FF6B00]">SkillSnap</span>
            </CardTitle>
            <p className="text-base text-[#667085] font-normal">
              New way of showcasing your skills
            </p>
          </CardHeader>
          <CardContent className="space-y-6 pt-6 px-8 pb-8">
            <Button
              variant="outline"
              className="w-full bg-white text-[#344054] text-base font-semibold border-[#D0D5DD] rounded-[8px] lg:rounded-[8px] py-2.5 h-11"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                />
                <path
                  fill="#34A853"
                  d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                />
                <path
                  fill="#4A90E2"
                  d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1818182,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="flex items-center">
              <div className="flex-grow h-px bg-[#EAECF0]"></div>
              <span className="px-4 text-sm text-[#667085]">or</span>
              <div className="flex-grow h-px bg-[#EAECF0]"></div>
            </div>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[#344054]"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    className="w-full bg-white border border-[#D0D5DD] rounded-[8px] lg:rounded-[8px] py-2.5 px-3.5 text-base h-11 text-gray-700"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 relative">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#344054]"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full bg-white border border-[#D0D5DD] rounded-[8px] lg:rounded-[8px] py-2.5 px-3.5 text-base h-11 text-gray-700"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white rounded-[8px] lg:rounded-[8px] py-2.5 mt-6 h-11 text-base font-semibold"
              >
                Validate Email <span className="ml-2">→</span>
              </Button>
            </form>

            <div className="text-sm text-[#344054] text-left ml-1 font-semibold">
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
