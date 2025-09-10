import React from "react";
import { experiences } from "../constants";

const Experience = () => {
	return (
		<section
			id="experience"
			className="py-24 px-[5vw] md:px-[8vw] lg:px-[12vw]"
		>
			{/* TITLE */}
			<div className="text-center mb-16">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					WORK EXPERIENCE
				</h2>
				<div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
			</div>

			{/* Container */}
			<div
				id="container"
				className="flex flex-wrap justify-between gap-3 "
			>
				{experiences.map((experience) => (
					// Content box
					<div
						id="content box"
						className={`w-full lg:max-w-[30%] p-2 lg:p-4 rounded-2xl shadow-2xl border border-gray-700 bg-gray-900 backdrop-blur-md `}
					>
						{/* Company Logo, name, role & date */}
						<div className="flex items-center space-x-5">
							<div className="w-16 h-16 rounded-md overflow-hidden">
								<img
									src={experience.img}
									className="w-full h-full object-contain"
								/>
							</div>

							<div className="flex flex-col justify-between">
								<div>
									<h3 className="text-xl sm:text-2xl font-semibold text-white">
										{experience.role}
									</h3>
									<h4 className="text-sm sm:text-md text-gray-400">
										{experience.company}
									</h4>
								</div>
								<p className="text-sm text-gray-500 mt-3">
									{experience.date}
								</p>
							</div>
						</div>

						{/* Description */}
						<p className="mt-4 text-gray-400">{experience.desc}</p>

						{/* Skills gained */}
						<div className="mt-4">
							<h5 className="font-medium text-white">
								Skills Gained:
							</h5>
							<ul className="flex flex-wrap mt-2">
								{experience.skills.map((skill, index) => (
									<li
										key={index}
										className="bg-[#8245ec] text-gray-200 px-2 sm:px-4 py-1 text-xs lg:text-md rounded-lg mr-2 mb-2 border border-gray-400"
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experience;
