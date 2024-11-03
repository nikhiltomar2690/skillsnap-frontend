"use client";

// import { useState, useEffect } from "react";
import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { ArrowUpRight, X } from "lucide-react";

// import ImageContainer from "./ProjectImageContainer";
// import DescriptionContainer from "./ProjectDescriptionContainer";
// import SocialLink from "./ProjectLink";

// const socialLinks = [
//   { name: "LinkedIn", url: "https://www.linkedin.com" },
//   { name: "Youtube", url: "https://www.youtube.com" },
//   { name: "Dribbble", url: "https://dribbble.com" },
//   { name: "Github", url: "https://github.com" },
// ];

// export default function ProjectCard() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setIsAnimating(true);
//       const timer = setTimeout(() => setIsAnimating(false), 300);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   return (
//     <>
//       <Card
//         className="w-[266px] h-[461px] rounded-[24px] overflow-hidden relative cursor-pointer group"
//         onClick={() => setIsOpen(true)}
//       >
//         <Image
//           src="https://static.vecteezy.com/system/resources/previews/029/483/346/non_2x/black-and-white-random-pattern-free-vector.jpg"
//           alt="Project"
//           layout="fill"
//           objectFit="cover"
//           className="transition-transform duration-300 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
//         <div className="absolute top-4 right-4 z-10 w-10 h-10 bg-black group-hover:bg-[#FF6B00] rounded-[8px] flex items-center justify-center transition-colors duration-300">
//           <ArrowUpRight className="w-6 h-6 text-white" />
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <h3 className="text-white text-xl font-semibold mb-2">Title</h3>
//           <p className="text-white text-sm opacity-80">
//             Lorem ipsum dolor Lorem ipsum dolor Lorem ips dolor Lo ipsum dolor
//             Lorem ipsum dolor...
//           </p>
//         </div>
//       </Card>

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent
//           className={`max-w-none w-full h-[calc(100vh-102.93px)] max-h-[797.07px] p-0 rounded-t-[24px] fixed bottom-0  ${
//             isAnimating ? "animate-slide-up" : ""
//           }`}
//         >
//           <div className="h-full overflow-y-auto bg-white">
//             <DialogHeader className="p-6 flex flex-row justify-between items-center sticky top-0 bg-white z-10 border-b border-gray-200">
//               <DialogTitle className="text-2xl font-bold text-black">
//                 BuyCycle
//               </DialogTitle>
//               <Button
//                 variant={"link"}
//                 size="icon"
//                 onClick={() => setIsOpen(false)}
//                 className="h-6 w-6 p-0"
//               >
//                 <X className="h-4 w-4 text-black" />
//               </Button>
//             </DialogHeader>
//             <div className="p-6 space-y-6">
//               <div className="flex flex-col lg:flex-row gap-6 justify-between">
//                 <div className="flex-1">
//                   <ImageContainer />
//                 </div>

//                 <div className="flex-1 flex items-center justify-center flex-col gap-4">
//                   <div className="flex-1">
//                     <DescriptionContainer />
//                   </div>

//                   <div className="flex-1">
//                     <div className="w-full h-full bg-white rounded-[18px]">
//                       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-[684px]">
//                         <Card className="w-full sm:w-[330px] h-[96px] p-[18px] rounded-[24px] bg-[#FF6B00] text-white border-none">
//                           <CardContent className="p-0 flex flex-col items-center justify-center h-full">
//                             <p className="text-lg font-semibold">UX Designer</p>
//                             <p className="text-sm">My Role</p>
//                           </CardContent>
//                         </Card>
//                         <Card className="w-full sm:w-[330px] h-[96px] p-[18px] rounded-[24px] bg-white border border-gray-200">
//                           <CardContent className="p-0 flex flex-col items-center justify-center h-full">
//                             <p className="text-lg font-semibold text-gray-900">
//                               12th Jan 2023
//                             </p>
//                             <p className="text-sm text-gray-600">
//                               Project Date
//                             </p>
//                           </CardContent>
//                         </Card>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex flex-wrap justify-between gap-6">
//                 {socialLinks.map((link) => (
//                   <SocialLink key={link.name} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { X, Check, Plus, ArrowUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  const [showUrlDialog, setShowUrlDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [blocks, setBlocks] = useState<
    { blockHeading: string; mainText: string }[]
  >([]);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [urlLinks, setUrlLinks] = useState([{ title: "", link: "" }]);
  const [showLinkInputDialog, setShowLinkInputDialog] = useState(false);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(null);
  const [newLink, setNewLink] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file.name);
    }
  };

  useEffect(() => {
    console.log(project);
  }, []);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleBlockClick = () => {
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      { blockHeading: "", mainText: "" },
    ]);
  };

  const handleUrlClick = () => {
    setShowUrlDialog(true);
  };

  const handleCloseUrlDialog = () => {
    setShowUrlDialog(false);
  };

  const handleAddLink = (index: any) => {
    setCurrentLinkIndex(index);
    setShowLinkInputDialog(true);
  };

  const handleLinkInputChange = (e: any) => {
    setNewLink(e.target.value);
  };

  const handleSaveLink = () => {
    if (currentLinkIndex !== null) {
      const updatedLinks = [...urlLinks];
      updatedLinks[currentLinkIndex].link = newLink;
      setUrlLinks(updatedLinks);
      setNewLink("");
      setShowLinkInputDialog(false);
    }
  };

  const handleTitleChange = (index: any, value: any) => {
    const updatedLinks = [...urlLinks];
    updatedLinks[index].title = value;
    setUrlLinks(updatedLinks);
  };

  const handleAddNewLink = () => {
    setUrlLinks([...urlLinks, { title: "", link: "" }]);
  };

  const handleSave = () => {
    console.log(urlLinks);
    setShowUrlDialog(false);
  };

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleBlockChange = (
    index: number,
    field: "blockHeading" | "mainText",
    value: string
  ) => {
    const updatedBlocks = blocks.map((block, i) =>
      i === index ? { ...block, [field]: value } : block
    );
    setBlocks(updatedBlocks);
  };

  const handleSubmit = () => {
    try {
      caseStudySchema.parse({
        title,
        description,
        role,
        password: isLocked ? password : undefined,
        blocks: blocks.length > 0 ? blocks : undefined,
      });
      setErrors({});
      console.log("Submitted data:", {
        title,
        description,
        role,
        password,
        isLocked,
        blocks,
      });
    } catch (e) {
      if (e instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        e.errors.forEach((err) => {
          if (err.path.length > 0) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const UploadIcon = () => {
    return (
      <svg
        width="46"
        height="47"
        viewBox="0 0 46 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3.5" width="40" height="40" rx="20" fill="#F2F4F7" />
        <rect
          x="3"
          y="3.5"
          width="40"
          height="40"
          rx="20"
          stroke="#F9FAFB"
          stroke-width="6"
        />
        <g clip-path="url(#clip0_1_170)">
          <path
            d="M16.3334 29.3333H29.6667V23.5H31.3334V30.1667C31.3334 30.3877 31.2456 30.5996 31.0893 30.7559C30.933 30.9122 30.721 31 30.5 31H15.5C15.279 31 15.067 30.9122 14.9108 30.7559C14.7545 30.5996 14.6667 30.3877 14.6667 30.1667V23.5H16.3334V29.3333ZM23.8334 21V26.8333H22.1667V21H18L23 16L28 21H23.8334Z"
            fill="#475467"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_170">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(13 13.5)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const LinkIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M14.7142 13.3285L13.5358 12.1501L14.7142 10.9718C15.0237 10.6623 15.2693 10.2948 15.4368 9.89036C15.6043 9.48593 15.6905 9.05247 15.6905 8.61472C15.6905 8.17697 15.6043 7.7435 15.4368 7.33907C15.2693 6.93464 15.0237 6.56717 14.7142 6.25763C14.4046 5.9481 14.0372 5.70256 13.6327 5.53504C13.2283 5.36752 12.7948 5.2813 12.3571 5.2813C11.9193 5.2813 11.4859 5.36752 11.0815 5.53504C10.677 5.70256 10.3095 5.9481 10 6.25763L8.82168 7.43597L7.64334 6.25763L8.82168 5.0793C9.76194 4.15423 11.0296 3.63818 12.3487 3.64355C13.6677 3.64892 14.9311 4.17528 15.8638 5.10798C16.7965 6.04067 17.3229 7.30413 17.3283 8.62315C17.3336 9.94217 16.8176 11.2099 15.8925 12.1501L14.7142 13.3285ZM12.3567 15.686L11.1783 16.8643C10.7154 17.3348 10.164 17.709 9.55573 17.9653C8.94749 18.2216 8.29453 18.3549 7.6345 18.3576C6.97446 18.3603 6.32043 18.2323 5.71013 17.981C5.09982 17.7296 4.54532 17.3599 4.0786 16.8932C3.61189 16.4265 3.24219 15.872 2.99085 15.2617C2.73951 14.6514 2.61149 13.9973 2.61418 13.3373C2.61686 12.6773 2.75021 12.0243 3.00651 11.4161C3.26282 10.8078 3.63701 10.2564 4.10751 9.79347L5.28584 8.61513L6.46418 9.79347L5.28584 10.9718C4.97631 11.2813 4.73077 11.6488 4.56325 12.0532C4.39573 12.4577 4.30951 12.8911 4.30951 13.3289C4.30951 13.7666 4.39573 14.2001 4.56325 14.6045C4.73077 15.009 4.97631 15.3764 5.28584 15.686C5.59538 15.9955 5.96285 16.241 6.36728 16.4086C6.77171 16.5761 7.20518 16.6623 7.64293 16.6623C8.08068 16.6623 8.51414 16.5761 8.91857 16.4086C9.323 16.241 9.69047 15.9955 10 15.686L11.1783 14.5076L12.3567 15.686ZM12.3567 7.43597L13.5358 8.61513L7.64334 14.5068L6.46418 13.3285L12.3567 7.4368V7.43597Z"
          fill="#F56B01"
        />
      </svg>
    );
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
          <h3 className="text-white text-xl font-semibold mb-2">Title</h3>
          <p className="text-white text-sm opacity-80">
            Lorem ipsum dolor Lorem ipsum dolor Lorem ips dolor Lo ipsum dolor
            Lorem ipsum dolor...
          </p>
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
                  <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <div className="flex-1 h-[318px] rounded-3xl border border-[#E2E8F0] p-[24px] items-center justify-center flex">
                      <div
                        onClick={() =>
                          document.getElementById("file-input-sample")?.click()
                        }
                        className="cursor-pointer"
                      >
                        <div className="w-full flex justify-center">
                          <UploadIcon />
                        </div>
                        <div className="flex flex-col md:flex-row gap-1 items-center">
                          <h2 className="text-[#F56B01] font-semibold text-sm">
                            Click to upload
                          </h2>
                          <h2 className="text-sm">or drag and drop</h2>
                        </div>
                      </div>
                      <input
                        type="file"
                        id="file-input-sample"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                      {selectedFile && (
                        <p>Selected file: {selectedFile.name}</p>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 h-[318px]">
                      <div className="h-[198px] rounded-3xl border border-[#E2E8F0] flex justify-center items-center flex-col p-4">
                        <Textarea
                          placeholder="Title"
                          className="w-full text-3xl text-center text-black font-semibold bg-transparent border-none resize-none focus:outline-none focus:ring-0 placeholder:text-[#9E9E9E]"
                          rows={1}
                          maxLength={100}
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        {errors.title && (
                          <p className="text-red-500 text-sm">{errors.title}</p>
                        )}
                        <Textarea
                          placeholder="Short Description"
                          className="w-full text-center text-black placeholder:text-[#616161] pt-2 bg-transparent border-none resize-none focus:outline-none focus:ring-0"
                          rows={2}
                          maxLength={250}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        {errors.description && (
                          <p className="text-red-500 text-sm">
                            {errors.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-6 self-stretch w-full mt-6 font-medium">
                        <div className="flex h-24 bg-[#F56A01] w-full p-4.5 border rounded-3xl text-[#fff] justify-center items-center flex-col gap-2">
                          <Input
                            type="text"
                            placeholder="Enter role"
                            className="bg-transparent border-none text-center text-white focus:outline-none focus:ring-0 placeholder:text-white"
                            value={role}
                            maxLength={50}
                            onChange={(e) => setRole(e.target.value)}
                          />
                          {errors.role && (
                            <p className="text-red-500 text-sm">
                              {errors.role}
                            </p>
                          )}
                          <div className="text-sm">My Role</div>
                        </div>
                        <div className="flex h-24 bg-[#ffffff] w-full p-4.5 border rounded-3xl text-[#9e9e9e] justify-center items-center flex-col gap-1">
                          <div className="text-[#9E9E9E]">
                            <Popover>
                              <PopoverTrigger>
                                <Button className="bg-transparent text-[#9e9e9e] hover:bg-inherit">
                                  Select date
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="z-50">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={(selectedDate) => {
                                    setDate(selectedDate);
                                  }}
                                  className="rounded-md border"
                                />
                              </PopoverContent>
                            </Popover>
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
                  {showUrlDialog && (
                    <div className="flex flex-col">
                      <Dialog
                        open={showUrlDialog}
                        onOpenChange={setShowUrlDialog}
                      >
                        <DialogContent
                          style={{
                            width: "800px",
                            height: "auto",
                            borderRadius: "24px",
                          }}
                          className="flex bg-white"
                        >
                          <div className="w-full flex flex-col">
                            <div className="flex flex-col w-full">
                              <h1 className="text-3xl text-neutral-900 font-medium py-3 mb-3">
                                Add URLs
                              </h1>
                              <Separator className="w-full mb-3" />
                            </div>
                            <div className="w-full flex flex-col">
                              {urlLinks.map((link, index) => (
                                <div
                                  key={index}
                                  className="w-full h-12 flex flex-row gap-3 mb-2"
                                >
                                  <Input
                                    placeholder="Enter URL title here"
                                    className="pl-4.5 py-3 rounded-lg text-neutral-900"
                                    value={link.title}
                                    onChange={(e) =>
                                      handleTitleChange(index, e.target.value)
                                    }
                                  />
                                  <Button
                                    className="gap-2 px-4 text-[#F56B01] flex flex-row bg-transparent hover:bg-inherit border border-[#F56B01] rounded-md"
                                    onClick={() => handleAddLink(index)}
                                  >
                                    <LinkIcon />
                                    Add Link
                                  </Button>
                                </div>
                              ))}
                              <div
                                className="flex flex-row gap-2 items-center justify-center px-4.5 py-2 h-10 self-stretch mt-3 cursor-pointer"
                                onClick={handleAddNewLink}
                              >
                                <Plus className="text-[#F56B01] h-5 w-5" />
                                <h1 className="text-[#F56B01]">Add More</h1>
                              </div>
                              <Separator className="w-full mb-3 mt-3" />
                              <div className="flex flex-row justify-end">
                                <Button
                                  className="bg-[#F56A01] gap-2"
                                  onClick={handleSave}
                                >
                                  <Check className="h-5 w-5" />
                                  <h1>Save</h1>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      {showLinkInputDialog && (
                        <Dialog
                          open={showLinkInputDialog}
                          onOpenChange={setShowLinkInputDialog}
                        >
                          <DialogContent
                            style={{
                              width: "400px",
                              height: "auto",
                              borderRadius: "24px",
                            }}
                            className="flex bg-white"
                          >
                            <div className="w-full flex flex-col">
                              <h1 className="text-2xl text-neutral-900 font-medium py-3 mb-3">
                                Enter Link for{" "}
                                {currentLinkIndex !== null
                                  ? urlLinks[currentLinkIndex]?.title
                                  : ""}
                              </h1>
                              <Input
                                placeholder="Enter link here"
                                className="pl-4.5 py-3 rounded-lg text-neutral-900 mb-3"
                                value={newLink}
                                onChange={handleLinkInputChange}
                              />
                              <div className="flex flex-row justify-end">
                                <Button
                                  className="bg-[#F56A01] gap-2"
                                  onClick={handleSaveLink}
                                >
                                  <Check className="h-5 w-5" />
                                  <h1>Save Link</h1>
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row w-full gap-6 mt-8 h-auto items-center">
                    {urlLinks.map(
                      (link, index) =>
                        link.link && (
                          <div
                            key={index}
                            className="grow shrink w-full basis-0 h-16 px-2.5 py-[18px] bg-white rounded-xl border border-slate-200 justify-center items-center gap-[18px] flex flex-col cursor-pointer"
                            onClick={() => handleLinkClick(link.link)}
                          >
                            <div className="text-black justify-center w-full text-lg font-medium leading-7 flex flex-row gap-4 items-center">
                              {link.title}
                              <ArrowUpRight className="h-5 w-5" />
                            </div>
                          </div>
                        )
                    )}
                  </div>
                  {blocks.map((block, index) => (
                    <div
                      key={index}
                      className="p-6 flex flex-col rounded-3xl border my-8"
                    >
                      <div className="flex flex-col gap-3">
                        <Input
                          placeholder="Block Heading"
                          className="bg-transparent border-none text-black focus:outline-none focus:ring-0 placeholder:text-neutral-500 text-xl font-medium"
                          value={block.blockHeading}
                          onChange={(e) =>
                            handleBlockChange(
                              index,
                              "blockHeading",
                              e.target.value
                            )
                          }
                        />
                        <Input
                          placeholder="Enter Main Text"
                          className="bg-transparent border-none text-black focus:outline-none focus:ring-0 placeholder:text-neutral-500 text-xl"
                          value={block.mainText}
                          onChange={(e) =>
                            handleBlockChange(index, "mainText", e.target.value)
                          }
                        />
                        <div className="px-6 py-4 border-2 border-dashed rounded-lg items-center justify-center flex flex-col gap-3">
                          <div
                            onClick={() =>
                              document
                                .getElementById(`file-input-${index}`)
                                ?.click()
                            }
                            className="cursor-pointer"
                          >
                            <UploadIcon />
                          </div>
                          <div className="flex flex-col md:flex-row gap-1 items-center">
                            <h2 className="text-[#F56B01] font-semibold text-sm">
                              Click to upload
                            </h2>
                            <h2 className="text-sm">or drag and drop</h2>
                          </div>
                          <input
                            type="file"
                            id={`file-input-${index}`}
                            className="hidden"
                            onChange={handleFileUpload}
                          />
                          {selectedFile && (
                            <p>Selected file: {selectedFile.name}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-8 mb-8">
                    <div className="w-full h-[125px] flex justify-center items-center px-[18px] py-[12px] border-2 border-dashed border-[#E2E8F0] rounded-[8px] gap-3">
                      <h2 className="text-[#616161]">Add :</h2>
                      <Button variant="outline" onClick={handleBlockClick}>
                        Block
                      </Button>
                      <Button variant="outline" onClick={handleUrlClick}>
                        URL
                      </Button>
                    </div>
                  </div>
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
                  <Button className="bg-[#F56A01] gap-2" onClick={handleSubmit}>
                    <Check className="h-5 w-5" />
                    <h1>Save</h1>
                  </Button>
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
