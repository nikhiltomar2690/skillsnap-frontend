import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: never;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, children, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type={type}
        className={cn(
          "rounded-[8px] border border-neutral-100 px-[18px] py-3 outline-none placeholder:text-neutral-700 placeholder:text-base",
          className
        )}
        disabled={disabled}
      >
        {children}
      </input>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
