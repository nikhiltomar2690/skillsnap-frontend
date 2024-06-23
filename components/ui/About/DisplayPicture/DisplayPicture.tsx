"use-client";
import React, { useState } from "react";

interface Props {
  imageUrl?: string;
}

const DisplayPicture = ({ imageUrl }: Props) => {
  return (
    <div className="left card-shadow rounded sm:col-span-3 flex justify-center items-center h-full">
      <div className="text-slate-500 text-base font-medium">
        Your Photo
      </div>
    </div>
  );
};

export default DisplayPicture;