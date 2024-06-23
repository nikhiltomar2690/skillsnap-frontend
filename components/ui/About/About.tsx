import React from "react";
import DisplayPicture from "./DisplayPicture";
import Description from "./Description";

const userData = {
    name: "Prathmesh Mhatre",
    role: "Frontend Developer",
    experience: "2",
    location: "Mumbai",
    about: "Hi, I am very good frontend developers",
  };

const About = () => {
  return (
    <div className="sm:min-h-[24.625rem] grid sm:grid-cols-12 gap-6">
      <DisplayPicture />
      <div className="right sm:col-span-9 flex flex-col gap-6">
        <div className="top grid sm:grid-cols-9 gap-6 basis-2/6">
          <div className="bg-primary card-shadow card-padding rounded sm:col-span-3 text-white flex flex-col justify-center gap-2 border-none editable position-relative">
            <input
              defaultValue={userData.name}
              className="bg-transparent font-playball text-3xl p-0 placeholder-white focus-visible:outline-none placeholder-opacity-75"
              placeholder="Your Name"
              maxLength={16}
            />
            {/* <div className="font-playball text-3xl">Your Name</div> */}
            <input
              className="bg-transparent border-none  p-0 text-base placeholder-white focus-visible:outline-none placeholder-opacity-75"
              placeholder="Role"
              maxLength={28}
              defaultValue={userData.role}
            />
            {/* <div className="text-base">Role</div> */}
          </div>
          <div className="experiance card-shadow card-padding rounded sm:col-span-2 flex flex-col justify-center items-center cursor-pointer gap-2">
            <div className="text-black text-3xl font-medium">...</div>
            <div className="font-medium text-slate-500">Experience</div>
          </div>
          <div className="experiance card-shadow card-padding rounded sm:col-span-2 flex flex-col justify-center items-center cursor-pointer gap-2">
            <div className="text-black text-3xl font-medium">...</div>
            <div className="font-medium text-slate-500">Location </div>
          </div>
          <div className="experiance card-shadow card-padding rounded sm:col-span-2 flex flex-col justify-center items-center cursor-pointer">
            <div className="text-black text-3xl font-medium">...</div>
            <div className="font-medium text-slate-500">Status</div>
          </div>
        </div>
        <Description description={userData.about}/>
      </div>
    </div>
  );
};

export default About;
