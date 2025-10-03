import React from "react";
import { SkillsInfo } from "../constants";

const Skills = () => {
	return (
		<section
			id="skills"
			className="md:pt-16 py-8 lg:pb-16 px-[5vw] md:px-[8vw] lg:px-[12vw]"
		>
			{/*  TITLE */}
			<div className="text-center">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					SKILLS
				</h2>
				<div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
			</div>

			{/* SKILLS OUTER BOXES */}
			<div className="flex flex-wrap items-start gap-1 lg:gap-5 pt-10 justify-around">
				{/* <div className="flex flex-wrap items-start gap-1 lg:gap-5 pt-10 justify-around"> */}

				{SkillsInfo.map((category) => (
					<div
						key={category.title}
						className="CONTAINER bg-gray-900 px-2 md:px-4 py-3 md:py-5 mb-5 w-full rounded-2xl border border-gray-700 shadow-2xl hover:shadow-purple-500/30"
					>
						{/* CONTAINER TITLE */}
						<h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-400 mb-4 text-center">
							{category.title}
						</h3>

						{/* INNER-CONTAINER */}
						<div className="INNER-CONTAINER grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2 xl:gap-3 w-full">
							{category.skills.map((skill) => (
								// EACH OF THE SKILLS
								<div
									key={skill.name}
									className="SKILL flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center shadow-md hover:shadow-purple-500/30 transition-all duration-300"
								>
									<img
										src={skill.logo}
										className="w-4 h-4 lg:w-5 lg:h-5"
									/>
									<span className="max-[400px]:text-sm text-md md:text-[16px] xl:text-[20px] text-gray-300">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
