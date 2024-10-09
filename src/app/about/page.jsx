"use client";
import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";

const skills = [
  "JavaScript",
  "Java",
  "C",
  "C++",
  "C#",
  "Spring Boot",
  "Spring Data JPA",
  "Node.js",
  "Express",
  "Mongoose",
  "RESTful API",
  "Socket.io",
  "MsSQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "React",
  "Next.js",
  "Redux",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Spring Security",
  "JWT",
  "OAuth",
  "Git",
  "GitHub",
  "GitLab",
  "Razorpay",
  "Stripe",
  "AWS EC2",
  "Nginx",
  "Docker",
  "Postman",
  "Jira",
  "VS Code",
];

// Add new Experieces at the top of this list
const experiences = [
  {
    title: "Trainee Engineer",
    company: "Xplor Technologies",
    description:
      "I specialize in the Payment domain at Xplor Technology,focusing on new development projects and managing support tickets to ensure optimal performance of our payment systems.",
    techStack: "Stack : .NET Core",
    date: "Apr 2024 - present",
    location: "Pune, India",
  },

  {
    title: "Backend Developer",
    company: "Dey Technologies (TaxEve)",
    description:
      "Developed a product called TaxEve, where users can e-file 1099 forms. I was handling the backend of the TaxEve app, which contains the Authentication, the Service, Payment system (Stripe), Admin panel and Deployment (AWS).",
    techStack: "Stack : Node.js, Express, MongoDB, Mongoose, Stripe, AWS",
    date: "May 2023 - Aug 2023",
    location: "Kolkata, India",
  },

  {
    title: "Software Developer Trainee",
    company: "Gamut Infosystems Ltd. (Farvision)",
    description:
      "Farvision is a cloud-based ERP software for real estate in India, and I was working in Farvision 4.5 developement team.",
    techStack: "Stack : Angular, C#, .NET, MsSQL",
    date: "Jan 2023 - Mar 2023",
    location: "Kolkata, India",
  },
];

export default function AboutPage() {
  const jobDescriptionVariant = {
    initial: { x: "2vw", y: "0vh", opacity: 0 },
    animate: { x: "0vw", y: "0vh", opacity: 1 },
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className=" ">
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl md:text-3xl">Biography</h1>
            <p className="text-lg">
              I’m a Full-Stack Developer with a passion for building scalable,
              efficient web applications. Skilled in both frontend and backend
              technologies, I specialize in the MERN stack and Java (Spring
              Boot). I enjoy solving complex problems, optimizing performance,
              and creating seamless user experiences. With experience in cloud
              services, databases, and payment integrations, I’m always looking
              to learn and take on new challenges. Outside of coding, I enjoy
              badminton and football.
            </p>
            {/* Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
              <path
                d="M12 6V14"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Contailer */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl md:text-3xl">Skills</h1>
            <div className="flex flex-wrap gap-5">
              {skills.map((skill) => {
                return (
                  <motion.button
                    className="z-10 p-2 border bg-black text-white rounded-md hover:cursor-default"
                    whileHover={{
                      backgroundColor: "rgb(194,65,12)",
                    }}
                    key={skill}
                  >
                    {skill}
                  </motion.button>
                );
              })}
            </div>

            {/* Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
              <path
                d="M12 6V14"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
            </motion.svg>
          </div>
          {/* Experience Container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl md:text-3xl">Experience</h1>
            {/* Experience List */}
            <div className="">
              {/* Experience List Item */}
              <div className=" hidden lg:flex flex-row gap-5">
                {/* Left */}
                <div className="flex flex-col gap-10">
                  {experiences.map((item, index) => {
                    if (index % 2 == 0) {
                      return (
                        <div
                          key={index}
                          className="flex flex-col gap-2 xl:h-[250px] lg:h-[300px] border bg-white rounded p-2 justify-center"
                        >
                          <div className="">{item.title}</div>
                          <div>{item.company}</div>
                          <div>{item.location}</div>
                          <motion.div
                            className="cursor-pointer"
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                          >
                            {item.description.length > 100
                              ? item.description.substring(
                                  0,
                                  item.description.lastIndexOf(" ", 100)
                                ) + " ..."
                              : item.description}
                            <motion.div
                              className="z-10 absolute p-2 font-mono ml-5 font-light italic  w-[400px] bg-gradient-to-b from-blue-50 to-orange-50 shadow-2xl"
                              variants={jobDescriptionVariant}
                            >
                              {item.description}
                            </motion.div>
                          </motion.div>
                          <div>{item.techStack}</div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="flex justify-end xl:h-[250px] lg:h-[300px] italic">
                          {item.date}
                        </div>
                      );
                    }
                  })}
                </div>
                {/* Center */}
                <div className="flex flex-col gap-2">
                  {experiences.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="w-4 h-4 rounded-full bg-white ring-4 ring-red-700"></div>
                        <div className="xl:h-[260px] lg:h-[310px] w-1 bg-orange-500"></div>
                      </div>
                    );
                  })}
                </div>
                {/* Right */}
                <div className="flex flex-col gap-10">
                  {experiences.map((item, index) => {
                    if (index % 2 == 1) {
                      return (
                        <div
                          key={index}
                          className="flex flex-col gap-2 lg:h-[300px] xl:h-[250px] border bg-white rounded p-2 justify-center"
                        >
                          <div className="">{item.title}</div>
                          <div>{item.company}</div>
                          <div>{item.location}</div>
                          <motion.div
                            className="cursor-pointer"
                            initial="initial"
                            animate="initial"
                            whileHover="animate"
                          >
                            {item.description.length > 100
                              ? item.description.substring(
                                  0,
                                  item.description.lastIndexOf(" ", 100)
                                ) + " ..."
                              : item.description}
                            <motion.div
                              className="z-10 absolute p-2 font-mono ml-5 font-light italic  w-[400px] bg-gradient-to-b from-blue-50 to-orange-50 shadow-2xl"
                              variants={jobDescriptionVariant}
                            >
                              {item.description}
                            </motion.div>
                          </motion.div>
                          <div>{item.techStack}</div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="flex justify-start lg:h-[300px] xl:h-[250px] italic">
                          {item.date}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            {/* Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
              <path
                d="M12 6V14"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
            </motion.svg>
          </div>
          {/* Education Container */}
          <div className="flex flex-col gap-12 justify-center ">
            <h1 className="font-bold text-2xl md:text-3xl">Education</h1>

            {/* Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
              <path
                d="M12 6V14"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
                className="stroke-orange-700"
              ></path>
            </motion.svg>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden">{/* SVG */}</div>
      </div>
    </motion.div>
  );
}
