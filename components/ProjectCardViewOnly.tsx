"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { X, ArrowUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";

const caseStudySchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().min(1, "Description is required").max(250),
  role: z.string().min(1, "Role is required").max(50),
  password: z.string().optional(),
  blocks: z
    .array(
      z.object({
        blockHeading: z.string().min(1, "Block Heading is required").max(100),
        mainText: z.string().min(1, "Main Text is required").max(500),
      })
    )
    .optional(),
});

interface Project {
  coverImage: string;
  title: string;
  description: string;
  role: string;
  date: Date;
  blocks: {
    blockHeading: string;
    blockImg: string;
    blockText: string;
  }[];
  urls: {
    urlTitle: string;
    link: string;
  }[];
}

const Project = ({
  width,
  height,
  project,
}: {
  width: any;
  height: any;
  project: Project;
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    console.log(project);
  }, []);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Card
        className={`rounded-[24px] overflow-hidden relative cursor-pointer group`}
        style={{ width, height }}
        onClick={handleButtonClick}
      >
        <Image
          src="https://static.vecteezy.com/system/resources/previews/029/483/346/non_2x/black-and-white-random-pattern-free-vector.jpg"
          alt="Project"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 z-0 w-10 h-10 bg-black group-hover:bg-[#FF6B00] rounded-[8px] flex items-center justify-center transition-colors duration-300">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-xl font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-white text-sm opacity-80">{project.description}</p>
        </div>
      </Card>
      <div className="flex flex-col justify-center items-center bg-gray-100 z-50">
        <AnimatePresence>
          {showPopup && (
            <motion.div
              className="fixed inset-x-1 bottom-0 bg-white shadow-lg rounded-t-xl overflow-hidden flex flex-col"
              style={{ zIndex: 10, margin: "0 auto", maxHeight: "80vh" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col w-full text-black px-6 pt-6 flex-grow overflow-hidden">
                <div className="flex flex-col">
                  <div className="flex flex-row px-4 md:px-8 justify-between items-center mb-4">
                    <Input
                      placeholder="Add case study"
                      className="bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-black text-2xl font-bold placeholder:justify-start"
                    />
                    <X onClick={handleClosePopup} className="cursor-pointer" />
                  </div>
                  <Separator className="bg-[#E2E8F0]" />
                </div>
                <ScrollArea className="flex-grow mt-4 h-screen pr-4">
                  <div className="flex flex-col lg:flex-row gap-6 justify-center">
                    <div className="flex-1 h-[318px] rounded-3xl border border-[#E2E8F0] p-[24px] items-center justify-center flex">
                      <div className="px-6 py-4 border-2 border-dashed rounded-lg items-center justify-center flex flex-col gap-3 w-full h-full">
                        <Image
                          src="https://static.vecteezy.com/system/resources/previews/029/483/346/non_2x/black-and-white-random-pattern-free-vector.jpg"
                          width={600}
                          height={800}
                          alt="Project"
                          layout="cover"
                          objectFit="fill"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 h-[318px]">
                      <div className="h-[198px] rounded-3xl border border-[#E2E8F0] flex justify-center items-center flex-col p-4">
                        <div className="w-full text-3xl text-center text-black font-semibold bg-transparent">
                          {project.title}
                        </div>
                        {errors.title && (
                          <p className="text-red-500 text-sm">{errors.title}</p>
                        )}
                        <div className="w-full text-center text-black pt-2 bg-transparent border-none ">
                          {project.description}
                        </div>
                        {errors.description && (
                          <p className="text-red-500 text-sm">
                            {errors.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-6 self-stretch w-full mt-6 font-medium">
                        <div className="flex h-24 bg-[#F56A01] w-full p-4.5 border rounded-3xl text-[#fff] justify-center items-center flex-col gap-2">
                          <div className="bg-transparent border-none text-center text-white">
                            {project.role}
                          </div>
                          {errors.role && (
                            <p className="text-red-500 text-sm">
                              {errors.role}
                            </p>
                          )}
                          <div className="text-sm">My Role</div>
                        </div>
                        <div className="flex h-24 bg-[#ffffff] w-full p-4.5 border rounded-3xl text-[#9e9e9e] justify-center items-center flex-col gap-1">
                          <div className="text-[#9E9E9E]">
                            {project.date.toDateString()}
                          </div>
                          {date && (
                            <div className="text-sm text-black">
                              Selected Date: {format(date, "PPP")}
                            </div>
                          )}
                          <div className="text-sm text-[#757575]">
                            Project Date
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row w-full gap-6 mt-8 h-auto items-center">
                    {project.urls.map(
                      (link, index) =>
                        link.link && (
                          <div
                            key={index}
                            className="grow shrink w-full basis-0 h-16 px-2.5 py-[18px] bg-white rounded-xl border border-slate-200 justify-center items-center gap-[18px] flex flex-col cursor-pointer"
                            onClick={() => handleLinkClick(link.link)}
                          >
                            <div className="text-black justify-center w-full text-lg font-medium leading-7 flex flex-row gap-4 items-center">
                              {link.urlTitle}
                              <ArrowUpRight className="h-5 w-5" />
                            </div>
                          </div>
                        )
                    )}
                  </div>
                  {project.blocks.map((block, index) => (
                    <div
                      key={index}
                      className="p-6 flex flex-col rounded-3xl border my-8"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="bg-transparent border-none text-black text-xl font-medium">
                          {block.blockHeading}
                        </div>
                        <div className="bg-transparent border-none text-black text-xl">
                          {block.blockText}
                        </div>
                        <div className="px-6 py-4 border-2 border-dashed rounded-lg items-center justify-center flex flex-col gap-3">
                          <Image
                            src={block.blockImg}
                            width={500}
                            height={300}
                            style={{ width: "100%", height: "100%" }}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
              <div className="p-4 bg-white">
                <Separator className="bg-[#E2E8F0] mb-4" />
                <div className="flex flex-row items-center justify-end px-2">
                  <div className="flex-row items-center hidden">
                    <div className="gap-[10px] flex flex-row items-center">
                      <Checkbox
                        className="data-[state=checked]:bg-white data-[state=checked]:text-[#F56A01]"
                        checked={isLocked}
                        onCheckedChange={(checked) => setIsLocked(!!checked)}
                      />
                      <h3 className="text-gray-800 font-semibold">
                        Lock Case Study
                      </h3>
                    </div>
                    <div className="w-px h-6 bg-gray-300 mx-4"></div>
                    <div className="text-black justify-between">
                      <div className="text-neutral-900 text-sm flex flex-row justify-center items-center gap-1.5 h-[26px]">
                        <h2>Password</h2>
                        <Input
                          placeholder="set password"
                          className="px-3 w-[144px]"
                          value={password}
                          maxLength={50}
                          onChange={(e) => setPassword(e.target.value)}
                          disabled={!isLocked}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;
