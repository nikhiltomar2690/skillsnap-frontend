import ProfessionalExperience from "@/components/ProfessionalExperience";
import React from "react";

const Snap = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8 bg-white text-black">
        <div className="">
          <div className="left card-shadow rounded">Display Picture</div>
          <div className="right">
            <div className="top space-y-10">
              <div className="name card-shadow rounded">name</div>
              <ProfessionalExperience />
              <div className="location card-shadow rounded">location</div>
              <div className="avatar card-shadow rounded">avatar</div>
            </div>
            <div className="about card-shadow rounded">about</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snap;
