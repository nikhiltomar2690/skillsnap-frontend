"use client";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import About from "@/components/ui/About";
import ContactLinks from "@/components/ContactComponents";
import Certification from "@/components/CertificateComponent";
import EducationComponent from "@/components/EducationComponent";
import React from "react";
import WelcomeDialog from "@/components/WelcomeDialog";
import ActionBar from "@/components/Dialogue/ActionBar";
import Projects from "../projectcard/page";
import SkillsComponent from "@/components/Skills";
import ProjectsComponent from "@/components/Projects";

// test array of objects for contact component
const selectedLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    name: "Github",
    url: "https://github.com/username",
    icon: "https://api.iconify.design/mdi:github.svg",
  },
  {
    name: "Resume",
    url: "https://mywebsite.com/resume.pdf",
    icon: "https://api.iconify.design/mdi:file-document-outline.svg",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/yourprofile",
    icon: "https://cdn-icons-png.flaticon.com/512/3536/3536685.png",
  },
  {
    name: "Youtube",
    url: "https://youtube.com/yourchannel",
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  },
];

// test array of object for certification component
const testCertifications = [
  {
    name: "Google UX Design Certification",
    issuer: "Coursera",
    issuedDate: "June 2022",
    icon: "https://static.vecteezy.com/system/resources/previews/029/483/346/non_2x/black-and-white-random-pattern-free-vector.jpg",
    href: "/certification/google-ux-design",
  },
  {
    name: "AWS Solutions Architect Certification",
    issuer: "Amazon",
    issuedDate: "March 2023",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968743.png",
    href: "/certification/aws-solutions-architect",
  },
  {
    name: "React Developer Certification",
    issuer: "Udemy",
    issuedDate: "January 2023",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    href: "/certification/react-developer",
  },
  {
    name: "Full Stack Web Development",
    issuer: "Coursera",
    issuedDate: "April 2021",
    icon: "https://cdn-icons-png.flaticon.com/512/888/888839.png",
    href: "/certification/fullstack-web-dev",
  },
  {
    name: "Data Science Certification",
    issuer: "edX",
    issuedDate: "August 2023",
    icon: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
    href: "/certification/data-science",
  },
];

const testEducationEntries = [
  {
    period: "2016 - 2020",
    title: "Electronics Engineering",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare iaculis hac diam congue et enim molestie urna risus...",
  },
  {
    period: "2014 - 2016",
    title: "Higher Secondary Certificate (HSC)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare iaculis hac diam congue et enim molestie urna risus...",
  },
  {
    period: "2012 - 2014",
    title: "Secondary School Certificate (SSC)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare iaculis hac diam congue et enim molestie urna risus...",
  },
];

// test object for professional experience component
const testExperience = [
  {
    companyName: "Tech Innovators Inc.",
    title: "Frontend Developer",
    startDate: "2032",
    endDate: "Present",
    link: "https://www.techinnovators.com",
    skills: [
      "React",
      "JavaScript",
      "CSS",
      "TypeScript",
      "Next.js",
      "React",
      "JavaScript",
      "CSS",
      "TypeScript",
      "Next.js",
    ],
    description:
      "sher cheetah fjknef fnjsnf nejkfn  fjenfesfj  f efjefjekjf e fje ejf nej efn ejfnenfenjfn e e fe fnjenfj nejfn lorem ipsum dolor lkgfnjkgnfdjksngkl njklgsnjg ngksrng kgkwngklrssit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    companyName: "Creative Solutions Ltd.",
    title: "UI/UX Designer",
    startDate: "2020",
    endDate: "2021",
    link: "https://www.creativesolutions.com",
    skills: ["Figma", "Sketch", "Adobe XD", "Wireframing", "Prototyping"],
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    companyName: "CodeCraft Studios",
    title: "Full Stack Developer",
    startDate: "2018",
    endDate: "2020",
    link: "https://www.codecraft.com",
    skills: ["Node.js", "Express", "MongoDB", "React", "GraphQL"],
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    companyName: "DataSphere Analytics",
    title: "Data Analyst",
    startDate: "2016",
    endDate: "2018",
    link: "https://www.datasphere.com",
    skills: [
      "Python",
      "Pandas",
      "SQL",
      "Data Visualization",
      "Machine Learning",
    ],
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    companyName: "CodeCraft Studios",
    title: "Full Stack Developer",
    startDate: "2018",
    endDate: "2020",
    link: "https://www.codecraft.com",
    skills: ["Node.js", "Express", "MongoDB", "React", "GraphQL"],
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    companyName: "CodeCraft Studios",
    title: "Full Stack Developer",
    startDate: "2018",
    endDate: "2020",
    link: "https://www.codecraft.com",
    skills: ["Node.js", "Express", "MongoDB", "React", "GraphQL"],
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

// test object for skills component
const testSkills = [
  {
    name: "JavaScript",
    icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    name: "React",
    icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    name: "Node.js",
    icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
  {
    name: "TypeScript",
    icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    name: "MongoDB",
    icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "Git",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "PHP",
    icon: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
  },
  {
    name: "Ruby",
    icon: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
  },
  {
    name: "Java",
    icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
  {
    name: "Swift",
    icon: "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
  },
  {
    name: "Go",
    icon: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg",
  },
];

//test object for projects
const testProjects = [
  {
    coverImage: "https://example.com/cover-image.jpg",
    title: "My Awesome Project",
    description: "This project showcases my skills in web development.",
    role: "Lead Developer",
    date: new Date("2023-10-01"),
    blocks: [
      {
        blockHeading: "Introduction",
        blockImg: "https://example.com/introduction-image.jpg",
        blockText: "This section introduces the project and its goals.",
      },
      {
        blockHeading: "Technologies Used",
        blockImg: "https://example.com/technologies-image.jpg",
        blockText: "This project was built using React, Node.js, and MongoDB.",
      },
    ],
    urls: [
      {
        urlTitle: "GitHub Repository",
        link: "https://github.com/username/my-awesome-project",
      },
      {
        urlTitle: "Live Demo",
        link: "https://example.com/live-demo",
      },
    ],
  },
  {
    coverImage: "https://example.com/project1-cover.jpg",
    title: "E-Commerce Website",
    description: "A full-featured e-commerce platform built from scratch.",
    role: "Full Stack Developer",
    date: new Date("2023-09-15"),
    blocks: [
      {
        blockHeading: "Features",
        blockImg: "https://example.com/project1-features.jpg",
        blockText:
          "Includes user authentication, shopping cart, and payment integration.",
      },
      {
        blockHeading: "User Interface",
        blockImg: "https://example.com/project1-ui.jpg",
        blockText: "Designed a responsive UI using Bootstrap.",
      },
    ],
    urls: [
      {
        urlTitle: "GitHub Repository",
        link: "https://github.com/username/e-commerce-website",
      },
      {
        urlTitle: "Live Demo",
        link: "https://example.com/e-commerce-demo",
      },
    ],
  },
  {
    coverImage: "https://www.flickr.com/photos/mtsofan/24916368442/",
    title: "Personal Blog",
    description: "A blogging platform to share my thoughts and experiences.",
    role: "Frontend Developer",
    date: new Date("2023-08-20"),
    blocks: [
      {
        blockHeading: "Content Management",
        blockImg:
          "https://tmssl.akamaized.net//images/foto/galerie/messi-lionel-argentina-2024-1729079011-151532.jpg?lm=1729079058",
        blockText:
          "Implemented a simple CMS for easy post creation and editing.",
      },
      {
        blockHeading: "SEO Optimization",
        blockImg: "https://visualhunt.co/a7/0d8cf67e",
        blockText: "Optimized for search engines to increase visibility.",
      },
    ],
    urls: [
      {
        urlTitle: "GitHub Repository",
        link: "https://github.com/username/personal-blog",
      },
      {
        urlTitle: "Live Blog",
        link: "https://example.com/my-blog",
      },
    ],
  },
  {
    coverImage: "https://example.com/project3-cover.jpg",
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my work and skills.",
    role: "Web Designer",
    date: new Date("2023-07-10"),
    blocks: [
      {
        blockHeading: "Design Process",
        blockImg: "https://example.com/project3-design.jpg",
        blockText: "Focused on a minimalist design for better user experience.",
      },
      {
        blockHeading: "Technology Stack",
        blockImg: "https://example.com/project3-stack.jpg",
        blockText: "Built with HTML, CSS, and JavaScript.",
      },
    ],
    urls: [
      {
        urlTitle: "GitHub Repository",
        link: "https://github.com/username/portfolio-website",
      },
      {
        urlTitle: "Live Portfolio",
        link: "https://example.com/my-portfolio",
      },
    ],
  },
  {
    coverImage: "https://example.com/project4-cover.jpg",
    title: "Chat Application",
    description: "A real-time chat application using WebSocket.",
    role: "Backend Developer",
    date: new Date("2023-06-05"),
    blocks: [
      {
        blockHeading: "Real-time Communication",
        blockImg: "https://example.com/project4-communication.jpg",
        blockText: "Utilized WebSocket for instant messaging.",
      },
      {
        blockHeading: "User Authentication",
        blockImg: "https://example.com/project4-auth.jpg",
        blockText: "Implemented JWT for secure user authentication.",
      },
    ],
    urls: [
      {
        urlTitle: "GitHub Repository",
        link: "https://github.com/username/chat-application",
      },
      {
        urlTitle: "Live Demo",
        link: "https://example.com/chat-demo",
      },
    ],
  },
];

const Snap = () => {
  return (
    <section className="bg-[#F0F2F5]">
      <div className="bg-[#F0F2F5] max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8 text-black">
        <div className="">
          <div className="right">
            <div className="top space-y-10">
              <About readOnly={true} />
              <ProfessionalExperience
                experiences={testExperience}
                showCardActions={false}
              />
              <EducationComponent educationEntries={testEducationEntries} />
              <ProjectsComponent projects={testProjects} isEditable={false} />
              <SkillsComponent skills={testSkills} />
              <Certification certifications={testCertifications} />
              <ContactLinks selectedLinks={selectedLinks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snap;
