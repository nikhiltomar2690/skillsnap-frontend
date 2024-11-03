import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
}

const getRandomColor = () => {
  const lightColors = [
    "bg-red-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-indigo-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-orange-100",
    "bg-teal-100",
    "bg-cyan-100",
    "bg-lime-100",
    "bg-rose-100",
    "bg-amber-100",
    "bg-emerald-100",
    "bg-sky-100",
    "bg-violet-100",
    "bg-fuchsia-100",
    "bg-stone-100",

    "bg-lightBlue-100",
    "bg-coolPurple-100",
    "bg-mint-100",
    "bg-lavender-100",
    "bg-lightYellow-100",
  ];
  return lightColors[Math.floor(Math.random() * lightColors.length)];
};

const SkillCard = ({ skill }: SkillCardProps) => {
  const bgColor = getRandomColor();

  return (
    <Card
      className={`flex items-center p-[18px] rounded-xl border-none cursor-pointer ${bgColor} flex-grow basis-0 max-w-[160px]`}
    >
      <div className="w-8 h-8 mr-3">
        <Image src={skill.icon} alt={skill.name} width={32} height={32} />
      </div>
      <span className="text-lg font-semibold text-black">{skill.name}</span>
    </Card>
  );
};

interface SkillsComponentProps {
  skills: Skill[];
}

const SkillsComponent = ({ skills }: SkillsComponentProps) => {
  const rowCapacity = 6;

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-black-900 mb-8">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
