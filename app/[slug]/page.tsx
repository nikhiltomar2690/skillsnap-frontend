import ProfessionalExperience from "@/components/ProfessionalExperience";
import About from "@/components/ui/About";
import React from "react";

const Snap = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8 bg-white text-black">
        <div className="">
          <div className="right">
            <div className="top space-y-10">
              <About />
              <ProfessionalExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snap;
