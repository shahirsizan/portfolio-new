import { useState } from "react";
import { projects } from "../constants";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import khabar1 from "../assets/work_logo/khabarbari/1.png";
import khabar2 from "../assets/work_logo/khabarbari/2.png";
import khabar3 from "../assets/work_logo/khabarbari/3.png";
import khabar4 from "../assets/work_logo/khabarbari/4.png";
import khabar5 from "../assets/work_logo/khabarbari/5.png";
import khabar6 from "../assets/work_logo/khabarbari/6.png";
import khabar7 from "../assets/work_logo/khabarbari/7.png";
import khabar8 from "../assets/work_logo/khabarbari/8.png";

import bg1 from "../assets/work_logo/bgremover/1.png";
import bg2 from "../assets/work_logo/bgremover/2.png";
import bg3 from "../assets/work_logo/bgremover/3.png";
import bg4 from "../assets/work_logo/bgremover/4.png";
import bg5 from "../assets/work_logo/bgremover/5.png";
import bg6 from "../assets/work_logo/bgremover/6.png";

import w1 from "../assets/work_logo/weatherapp/1.png";
import w2 from "../assets/work_logo/weatherapp/2.png";
import w3 from "../assets/work_logo/weatherapp/3.png";
import { DialogOverlay } from "@radix-ui/react-dialog";

const imagesArray = [
	{
		name: "khabarbari",
		imagesList: [
			khabar1,
			khabar2,
			khabar3,
			khabar4,
			khabar5,
			khabar6,
			khabar7,
			khabar8,
		],
	},
	{
		name: "bgremover",
		imagesList: [bg1, bg2, bg3, bg4, bg5, bg6],
	},
	{
		name: "weatherapp",
		imagesList: [w1, w2, w3],
	},
];

const Project = () => {
	// const [selectedProject, setSelectedProject] = useState(null);
	// const handleOpenModal = (project) => {
	// 	setSelectedProject(project);
	// };
	// const handleCloseModal = () => {
	// 	setSelectedProject(null);
	// };

	return (
		<section
			id="work"
			className="SECTION pt-16 md:pt-24 pb-24 px-[5vw] md:px-[8vw] lg:px-[12vw] relative"
		>
			{/* TITLE */}
			<div className="TITLE text-center mb-16">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					PROJECTS
				</h2>
				<div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
				<p className="text-gray-400 mt-4 text-lg font-semibold">
					Some of the hobby projects I have worked on.
				</p>
			</div>

			{/* ALL CARDS CONTAINER */}
			<div className="ALL-CARDS-CONTAINER grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
				{projects.map((project) => (
					// EACH CARD
					<div
						key={project.id}
						// onClick={() => handleOpenModal(project)}
						className="EACH-CARD flex flex-col border border-gray-700 bg-gray-900/70 rounded-xl shadow-2xl hover:shadow-purple-500/20 p-2"
					>
						{/* IMAGE */}
						<Dialog>
							<DialogTrigger asChild>
								{/* IMAGE */}
								<div className="p-2 md:p-4 rounded-xl">
									<img
										src={project.image}
										className="w-full h-48 object-cover rounded-xl overflow-hidden"
									/>
								</div>
							</DialogTrigger>

							<DialogContent
								className="w-[90vw] md:w-[65vw] p-0 rounded-xl"
								customClassName="bg-black/80"
								showCloseButton={false}
							>
								<Carousel opts={{ loop: true }}>
									<CarouselContent className="">
										{imagesArray
											.find((item) => {
												return item.name === project.id;
											})
											.imagesList.map(
												(imagePath, idx) => (
													<CarouselItem
														key={idx}
														className=""
													>
														<div className="w-full rounded-xl">
															<img
																className="w-full h-auto object-contain rounded-xl overflow-hidden"
																src={imagePath}
															/>
														</div>
													</CarouselItem>
												)
											)}
									</CarouselContent>
									<CarouselPrevious />
									<CarouselNext />
								</Carousel>
							</DialogContent>
						</Dialog>

						{/* TEXTUAL DATA */}
						<div className="TEXT-DATA p-2 md:p-6">
							{/* TITLE */}
							<h3 className="text-lg md:text-2xl font-bold text-white md:mb-2">
								{project.title}
							</h3>

							{/* DESC */}
							<p className="text-sm text-gray-500 mb-2 md:mb-4 pt-2 md:pt-4">
								{project.description}
							</p>

							{/* TECHS LIST */}
							<div className="mb-2 md:mb-4">
								{project.tags.map((tag, index) => (
									<span
										key={index}
										className="inline-block bg-[#251f38]/80 text-xs font-semibold text-purple-500 rounded-full p-2 mr-2 mb-2"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="flex flex-1"></div>
						</div>

						<div className="flex flex-1"></div>

						{/* GITHUB & LIVE BUTTON */}
						<div className="flex gap-4 px-4 pb-4">
							<a
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-md text-sm lg:text-lg font-semibold text-center"
							>
								Github
							</a>

							<a
								href={project.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-md text-sm lg:text-lg font-semibold text-center"
							>
								Live
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Project;
