import { cn } from "@/lib/utils";
import React, { ReactNode, TextareaHTMLAttributes, forwardRef } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode;
}

const TextareaField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, rows, cols, children, ...props }) => {
    return (
      <textarea
        {...props}
        rows={rows}
        cols={cols}
        className={cn(
          "rounded-[8px] border border-neutral-100 px-[18px] py-3 outline-none placeholder:text-neutral-700 placeholder:text-base",
          className
        )}
        disabled={disabled}
      >
        {children}
      </textarea>
    );
  }
);

TextareaField.displayName = "TextareaField";

export default TextareaField;
