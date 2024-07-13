'use client'
import React, { useState } from "react";
import Image from "next/image";
import Pencil from "@/components/icons/Pencil";

interface Props {
  description?: string;
}

const Description = ({ description }: Props) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <div
      className="about card-shadow card-padding rounded basis-4/6 relative flex flex-col  justify-between"
      // onMouseEnter={() => setIsImageHovered(true)}
      // onMouseLeave={() => setIsImageHovered(false)}
    >
      {(isImageHovered || isButtonHovered) && (
        <button
          className="w-11 h-11 rounded-full absolute -top-4 -right-4 flex justify-center items-center bg-neutral-900"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <Pencil />
        </button>
      )}
      <Image src={"/ic_about.png"} alt="palm waving" width={40} height={40}/>
      <div>
        <div className="text-slate-500 text-2xl font-medium">
          Little about me
        </div>
        <textarea
              defaultValue={description}
              className="bg-transparent text-xl font-medium text-slate-900 w-full text-left p-0 placeholder-black focus-visible:outline-none placeholder:text-3xl placeholder:text-black placeholder:font-medium min-h-24 overflow-hidden resize-none"
              placeholder="..."
              rows={2}
            />
      </div>
    </div>
  );
};

export default Description;