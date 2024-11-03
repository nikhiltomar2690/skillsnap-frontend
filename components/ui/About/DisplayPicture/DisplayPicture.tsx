"use client";
import React, { useState } from "react";

interface Props {
  imageUrl?: string; // Optional image URL prop
  readOnly?: boolean; // Optional readOnly prop, default is false
}

const DisplayPicture = ({ imageUrl, readOnly = false }: Props) => {
  const [state, setState] = useState(imageUrl || ""); // Initialize with imageUrl if provided

  const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a valid image file (png, jpg, jpeg).");
        return;
      }
      setState(window.URL.createObjectURL(file));
    }
  };

  return (
    <>
      {!readOnly && (
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          name="image"
          id="file"
          onChange={loadFile}
          style={{ display: "none" }}
        />
      )}
      <label
        htmlFor="file"
        className={`left card-shadow rounded sm:col-span-3 flex justify-center items-center ${
          !readOnly ? "cursor-pointer" : ""
        } overflow-hidden w-32 h-48 sm:w-full sm:h-full`}
      >
        {state ? (
          <img
            src={state}
            id="output"
            width="100%"
            height="100%"
            alt="Uploaded"
            className="w-32 h-48 sm:w-full sm:h-full object-cover"
          />
        ) : (
          <div className="text-slate-500 text-base font-medium">Your Photo</div>
        )}
      </label>
    </>
  );
};

export default DisplayPicture;
