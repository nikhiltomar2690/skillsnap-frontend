"use client";

import { forwardRef, useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";
import { useForwardedRef } from "@/lib/use-forwarded-ref";
import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const ColorPicker = forwardRef<
  HTMLInputElement,
  Omit<ButtonProps, "value" | "onChange" | "onBlur"> & ColorPickerProps
>(
  (
    { disabled, value, onChange, onBlur, name, className, ...props },
    forwardedRef
  ) => {
    const ref = useForwardedRef(forwardedRef);
    const [open, setOpen] = useState(false);

    const parsedValue = useMemo(() => {
      return value || "#FFFFFF";
    }, [value]);

    return (
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild disabled={disabled} onBlur={onBlur}>
          <Button
            {...props}
            className={cn("block", className)}
            name={name}
            onClick={() => {
              setOpen(true);
            }}
            size="icon"
            style={{
              backgroundColor: parsedValue,
            }}
            variant="outline"
          >
            <div />
          </Button>
        </PopoverTrigger>

        {/* <PopoverContent className="w-full">
          <HexColorPicker color={parsedValue} onChange={onChange} />
          <Input
            maxLength={7}
            onChange={(e) => {
              onChange(e?.currentTarget?.value);
            }}
            ref={ref}
            value={parsedValue}
          />
        </PopoverContent> */}
        <PopoverContent
          className="w-full p-1 z-50 rounded-[8px]"
          style={{ maxWidth: "150px" }}
        >
          <div className="w-full h-[80px]">
            {" "}
            {/* Fixed height for color picker */}
            <HexColorPicker
              color={parsedValue}
              onChange={onChange}
              style={{ width: "100%", height: "100%" }} // Ensure full size within the container
            />
          </div>
          <Input
            maxLength={7}
            onChange={(e) => {
              onChange(e?.currentTarget?.value);
            }}
            ref={ref}
            value={parsedValue}
            className="mt-1 h-8 text-sm border border-gray-300 rounded-lg" // Adjust height and margin, add border and rounded corners
            style={{ fontSize: "0.75rem" }} // Smaller font size
          />
        </PopoverContent>
      </Popover>
    );
  }
);
ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
