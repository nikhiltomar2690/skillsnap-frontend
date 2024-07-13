"use client";
import React, { useState } from "react";

interface Props {
  imageUrl?: string;
}

const DisplayPicture = ({ imageUrl }: Props) => {
  const [state, setstate] = useState("");
  var loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setstate(window.URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        name="image"
        id="file"
        onChange={loadFile}
        style={{ display: "none" }}
      />
      <label  htmlFor="file" className="left card-shadow rounded sm:col-span-3 flex justify-center items-center h-full cursor-pointer overflow-hidden">
        {state ? (
          <img
          src={state}
          // className={classes.image}
          id="output"
          width="100%"
          height="100%"
          alt="test"
          className="h-full object-cover"
        />
        ) : (
          <div className="text-slate-500 text-base font-medium">Your Photo</div>
        )}
      </label>
    </>
  );
};

export default DisplayPicture;
