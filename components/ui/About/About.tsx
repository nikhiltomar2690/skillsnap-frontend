"use-client";
import Pencil from "@/components/icons/Pencil";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  description?: string;
}

const About = ({ description }: Props) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <div
      className="about card-shadow card-padding rounded basis-4/6 relative flex flex-col  justify-between"
      onMouseEnter={() => setIsImageHovered(true)}
      onMouseLeave={() => setIsImageHovered(false)}
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
        <div>...</div>
      </div>
    </div>
  );
};

export default About;
