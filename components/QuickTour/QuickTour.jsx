"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
	riddles,
	frontendSkills,
	backendSkills,
	toolsDesignSkills,
} from "@/data/skillsAndRiddles";
import {
	FaReact,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaNodeJs,
	FaSass,
	FaGithub,
	FaFigma,
} from "react-icons/fa";
import {
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiExpress,
	SiMongodb,
	SiFirebase,
	SiMui,
	SiJquery,
	SiFramer,
	SiPostman,
	SiVercel,
	SiPrisma,
	SiShadcnui,
	SiAxios,
} from "react-icons/si";

const projects = [
	{
		id: 1,
		src: "/projects/project1.png",
		title: "Experience",
		mainTitle: "My Experience",
		subTitle: "A quick look into where I've been and what I’ve done.",
		peep: "/imgs/peep-happy.png",
		color: "bg-blue-200",
	},
	{
		id: 2,
		src: "/projects/project2.png",
		title: "Skills",
		mainTitle: "My Skills",
		subTitle: "Technologies and tools I use every day.",
		peep: "/imgs/peep-upset.png",
		color: "bg-red-200",
	},
	{
		id: 3,
		src: "/projects/project3.png",
		title: "Strengths",
		mainTitle: "My Strengths",
		subTitle: "Qualities that make me a great addition to any team.",
		peep: "/imgs/peep-smirking.png",
		color: "bg-green-100",
	},
	{
		id: 4,
		src: "/projects/project4.png",
		title: "About Me",
		mainTitle: "About Me",
		subTitle: "Who I am beyond the code.",
		peep: "/imgs/peep-happy.png",
		color: "bg-purple-200",
	},
];

export default function QuickTour() {
	const [selectedProject, setSelectedProject] = useState(null);
	const clickSoundRef = useRef(null);

	useEffect(() => {
		clickSoundRef.current = new Audio("/sounds/click.wav");
	}, []);

	const playClick = () => {
		if (clickSoundRef.current) {
			clickSoundRef.current.currentTime = 0;
			clickSoundRef.current.play();
		}
	};

	const makeSentence = (arr) =>
		arr.length > 1
			? arr.slice(0, -1).join(", ") + ", and " + arr[arr.length - 1]
			: arr[0];



	const renderProjectContent = (id) => {
		switch (id) {
			case 1:
				return (
					<motion.div
						key="experience"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4 }}
						className="text-center px-[2vw]"
					>
						<h3 className="font-semibold text-[3vh] handlee">Experience</h3>
						<p className="mt-3 text-[2.25vh] handlee text-neutral-700">
							Completed <span className="font-extrabold">B.Com graduation</span> and gained strong knowledge of modern web development technologies including <span className="font-extrabold">React, JavaScript, Tailwind CSS, and React Native</span>.
						</p>
						<p className="mt-[3vh] text-[2.25vh] handlee text-neutral-700">
							Experienced in creating clone projects inspired by real-world platforms such as <span className="font-extrabold">Swiggy, YouTube, and Netflix</span>. Eager to start a career as a frontend developer and contribute to innovative projects.
						</p>
					</motion.div>
				);
			case 2:
				return (
					<motion.div
						key="skills"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4 }}
						className="flex flex-col items-center px-[2vw] mb-[3vh]"
					>
						<h3 className="font-semibold text-[3vh] handlee mb-[2vh] mt-[2vh]">
							Skills
						</h3>
						<p className="mb-[2vh] handlee text-left leading-[3vh] text-[2vh]">
							On the frontend, I’ve learned {makeSentence(frontendSkills)}.
						</p>
						<p className="mb-[2vh] handlee text-left leading-[3vh] text-[2vh]">
							On the backend, I’ve worked with {makeSentence(backendSkills)}.
						</p>
						<p className="mb-[2vh] handlee text-left leading-[3vh] text-[2vh]">
							For tools & design, I use {makeSentence(toolsDesignSkills)}.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-[4vh] mt-[3vh]">
							<FaHtml5 className="text-orange-500" />
							<FaCss3Alt className="text-blue-600" />
							<FaJs className="text-yellow-500" />
							<SiTypescript className="text-blue-500" />
							<FaReact className="text-cyan-500" />
							<SiNextdotjs className="text-black" />
							<FaNodeJs className="text-green-600" />
							<SiExpress className="text-gray-700" />
							<SiTailwindcss className="text-cyan-500" />
							<FaSass className="text-pink-400" />
							<SiShadcnui className="text-violet-500" />
							<SiMui className="text-blue-500" />
							<SiFramer className="text-pink-500" />
							<SiJquery className="text-blue-400" />
							<SiAxios className="text-purple-500" />
							<SiMongodb className="text-green-700" />
							<SiPrisma className="text-black" />
							<SiFirebase className="text-yellow-500" />
							<FaFigma className="text-pink-600" />
							<FaGitAlt className="text-red-500" />
							<FaGithub className="text-black" />
							<SiVercel className="text-black" />
							<SiPostman className="text-orange-500" />
						</div>
					</motion.div>
				);
			case 3:
				return (
					<motion.div
						key="strengths"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4 }}
						className="flex flex-col items-center"
					>
						<h3 className="font-semibold text-[3vh] handlee">Strengths</h3>

						<p className="mt-3 text-[2.5vh] handlee text-neutral-800 font-regular">
							Quick Learner & Problem Solving
						</p>
						<p className="mt-3 text-[2.5vh] handlee text-neutral-800 font-regular">
							Team Collaboration
						</p>
						<p className="mt-3 text-[2.5vh] handlee text-neutral-800 font-regular">
							Strong Interest in Frontend Development
						</p>
						<p className="mt-3 text-[2.5vh] handlee text-neutral-800 font-regular">
							Passion for Learning New Technologies
						</p>
					</motion.div>
				);
			case 4:
				return (
					<motion.div
						key="aboutme"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4 }}
						className="flex flex-col items-center px-[1.5vw]"
					>
						<h3 className="font-semibold text-[3vh] handlee mt-[1vh]">
							About Me
						</h3>
						<p className="mt-[1.75vh] leading-[2.75vh] text-left text-[2.25vh] handlee text-neutral-700 indent-[2.5vw]">
							<span className="font-extrabold">Frontend Developer</span> and recent <span className="font-extrabold">B.Com graduate</span> with strong knowledge of modern web development technologies including <span className="font-extrabold">React, JavaScript, Tailwind CSS, and React Native</span>. Passionate about building responsive and user-friendly web applications.
						</p>
						<p className="mt-[1.75vh] leading-[2.75vh] text-left text-[2.25vh] handlee text-neutral-700 indent-[2.5vw] pb-[2vh]">
							Experienced in creating clone projects inspired by real-world platforms such as <span className="font-extrabold">Swiggy, YouTube, and Netflix</span>. Eager to start a career as a frontend developer and contribute to innovative projects.
						</p>
					</motion.div>
				);
			default:
				return null;
		}
	};

	const activeProject = projects.find((p) => p.id === selectedProject);
	const leftMainTitle = activeProject
		? activeProject.mainTitle
		: "Quick View of Me";
	const leftSubTitle = activeProject
		? activeProject.subTitle
		: "I am a passionate developer who loves building engaging websites and socializing with other developers.";
	const peepImage = activeProject ? activeProject.peep : "/imgs/peep.png";

	return (
		<div className="flex gap-[5vw] items-center justify-center min-h-[90vh] w-[85vw] mx-auto relative">
			{/* Left Section */}
			<div className="flex flex-col w-[30vw] max-w-[30vw]">
				<motion.h2
					key={leftMainTitle}
					className="text-[4vh] handlee font-extrabold"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					{leftMainTitle}
				</motion.h2>
				<motion.p
					key={leftSubTitle}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					className="mb-[7.5vh] handlee font-medium mt-[1.5vh] text-[3vh]"
				>
					{leftSubTitle}
				</motion.p>
				<motion.div
					key={peepImage}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.4 }}
					className="relative w-fit mx-auto"
				>
					<img src={peepImage} className="w-[20vw]" alt="Character" />
				</motion.div>
			</div>

			{/* Right Section */}
			<div className="w-[45vw] pb-[3vh]">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="text-[3vh] text-center w-[70%] mx-auto handlee"
				>
					Explore More About Me
				</motion.h2>

				<AnimatePresence mode="wait">
					{!selectedProject ? (
						/* Gallery view */
						<>
							<motion.div
								key="gallery"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4 }}
								className="grid grid-cols-2 gap-x-[1.5vw] gap-y-[1.75vh] mx-auto w-full mt-[2vh]"
							>
								{projects.map((project) => (
									<motion.div
										key={project.id}
										whileTap={{ scale: 0.95 }}
										transition={{ type: "spring", stiffness: 400, damping: 6 }}
										onClick={() => {
											setSelectedProject(project.id);
											playClick();
										}}
										className="border-2 rounded-[2vh] py-[1.5vh] px-[1vw] cursor-pointer transition border-neutral-300 hover:border-neutral-400"
									>
										<div
											className={`w-full aspect-[6/3] border-neutral-400 border-2 flex items-center justify-center mb-[1vh] rounded-[2.5vh] ${"bg-neutral-800"}`}
										>
											<h2 className="closer text-[7vh] text-white tracking-[-1px]">
												{project.title}
											</h2>
										</div>

										<h3 className="text-[2vh] handlee font-semibold text-center">
											{project.title}
										</h3>
									</motion.div>
								))}
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4, delay: 0.4 }}
								className="flex gap-[1vw] mt-[1.5vh]"
							>
								<motion.div
									whileTap={{ scale: 0.95 }}
									transition={{ type: "spring", stiffness: 400, damping: 6 }}
									onClick={() => {
										playClick();
									}}
									className="rounded-[1.75vh] cursor-pointer w-full border-2 border-neutral-900 bg-neutral-800 text-white flex items-center justify-center handlee text-[2vh] font-semibold  hover:border-neutral-400 transition"
								>
									<Link
										href={"https://www.linkedin.com/in/suchitra-j-a74706411/"}
										className="py-[1vh] px-[1vw]"
										target="_blank"
									>
										Linkedin
									</Link>
								</motion.div>
								<motion.div
									whileTap={{ scale: 0.95 }}
									transition={{ type: "spring", stiffness: 400, damping: 6 }}
									onClick={() => {
										playClick();
									}}
									className="rounded-[1.75vh] cursor-pointer w-full border-2 border-neutral-900 flex items-center bg-neutral-800 text-white justify-center handlee text-[2vh] font-semibold  hover:border-neutral-400 transition"
								>
									<Link
										href={"https://github.com/iamsuchi05"}
										className="py-[1vh] px-[1vw]"
										target="_blank"
									>
										Github
									</Link>
								</motion.div>
								<motion.div
									whileTap={{ scale: 0.95 }}
									transition={{ type: "spring", stiffness: 400, damping: 6 }}
									onClick={() => {
										playClick();
									}}
									className="rounded-[1.75vh] cursor-pointer w-full border-2 border-neutral-900 flex items-center bg-neutral-800 text-white justify-center handlee text-[2vh] font-semibold  hover:border-neutral-400 transition"
								>
									<a href="/resume.pdf" className="py-[1vh] px-[1vw]" target="_blank" rel="noopener noreferrer">
										Resume
									</a>
								</motion.div>
							</motion.div>
						</>
					) : (
						/* Individual project view */
						<motion.div
							key={`project-${selectedProject}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.4 }}
							className="mt-[2vh] py-[2vh] px-[1vw] text-center border-2 border-neutral-500 rounded-[2vh] relative"
						>
							{/* Back Button */}
							<div className="absolute top-[2vh] left-[1.25vw]">
								<button
									onClick={() => {
										setSelectedProject(null);
										playClick();
									}}
									className="relative cursor-pointer hover:scale-95 transition w-fit h-fit flex items-center justify-center"
								>
									<span className="z-10 text-[2vh] h-[3.25vh] w-[3.25vh] rounded-full border-2 border-black flex items-center justify-center handlee font-semibold">
										{"<"}
									</span>
								</button>
							</div>

							{/* Custom content */}
							{renderProjectContent(selectedProject)}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
