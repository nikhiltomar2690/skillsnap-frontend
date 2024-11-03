import React from "react";
import DisplayPicture from "./DisplayPicture";
import Description from "./Description";
import Image from "next/image";
import EmojiIcon from "@/public/ic_emoji.svg";

const imgURL = "https://media.tenor.com/C7opO0cRofAAAAAj/neirn-ml64.gif";

const userData = {
  name: "Prathmesh Mhatre",
  role: "Frontend Developer",
  experience: "2 Years",
  location: "Mumbai",
  about:
    "Hi, I am a very good frontend developer. I love building futuristic websites and exploring new technologies. In the heart of the bustling city, an old bookstore stood quietly, filled with forgotten tales and whispers of the past. Shelves lined with dust-covered volumes invited curious minds, offering adventures waiting to be discovered in every corner.",
};

interface AboutProps {
  readOnly: boolean;
}

const About: React.FC<AboutProps> = ({ readOnly = false }) => {
  return (
    <div className="sm:min-h-[24.625rem] grid sm:grid-cols-12 gap-6 p-4">
      <DisplayPicture imageUrl={imgURL} readOnly={readOnly} />
      <div className="right sm:col-span-9 flex flex-col gap-6">
        <div className="top grid sm:grid-cols-9 gap-4">
          <div className="bg-primary card-shadow card-padding rounded sm:col-span-3 text-white flex flex-col justify-center gap-2 border-none editable position-relative">
            <input
              defaultValue={userData.name}
              className="bg-transparent font-playball text-3xl p-0 placeholder-white focus-visible:outline-none placeholder-opacity-75 w-full"
              placeholder="Your Name"
              maxLength={16}
              readOnly={readOnly}
            />
            <input
              className="bg-transparent border-none p-0 text-base placeholder-white focus-visible:outline-none placeholder-opacity-75 w-full"
              placeholder="Role"
              maxLength={28}
              defaultValue={userData.role}
              readOnly={readOnly}
            />
          </div>
          <div className="experience bg-white card-shadow card-padding rounded sm:col-span-2 flex flex-col justify-center items-center cursor-pointer gap-2">
            <input
              defaultValue={userData.experience}
              className="bg-transparent text-xl font-medium text-slate-900 w-full text-center p-0 placeholder-black focus-visible:outline-none placeholder:text-3xl placeholder:text-black placeholder:font-medium"
              placeholder="..."
              maxLength={8}
              readOnly={readOnly}
            />
            <div className="font-medium text-slate-500">Experience</div>
          </div>
          <div className="experience bg-white card-shadow card-padding rounded sm:col-span-2 flex flex-col justify-center items-center cursor-pointer gap-2">
            <input
              defaultValue={userData.location}
              className="bg-transparent text-xl font-medium text-slate-900 w-full text-center p-0 placeholder-black focus-visible:outline-none placeholder:text-3xl placeholder:text-black placeholder:font-medium"
              placeholder="..."
              maxLength={8}
              readOnly={readOnly}
            />
            <div className="font-medium text-slate-500">Location</div>
          </div>
          <div className="experience bg-white card-shadow card-padding rounded sm:col-span-2 flex flex-col justify-center items-center">
            <Image
              src={EmojiIcon}
              alt="emoji"
              className="w-full h-full max-w-[80px] max-h-[80px] object-contain"
            />
          </div>
        </div>
        <Description description={userData.about} readOnly={readOnly} />
      </div>
    </div>
  );
};

export default About;
