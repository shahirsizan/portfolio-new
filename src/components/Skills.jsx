import React from "react";
import { SkillsInfo } from "../constants";

const Skills = () => {
	return (
		<section
			id="skills"
			className="pt-16 md:pt-24 px-[5vw] md:px-[8vw] lg:px-[12vw]"
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
						className="bg-gray-900 px-3 md:px-5 py-6 md:py-10 mb-10 w-full xl:w-[30%] rounded-2xl border border-gray-700 shadow-gray-800 shadow-md"
					>
						<h3 className="text-2xl lg:text-3xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
							{category.title}
						</h3>

						{/* SKILLS INNER BOXES */}
						<div className="grid md:grid-cols-3 xl:grid-cols-1 gap-2 xl:gap-3 w-full">
							{category.skills.map((skill) => (
								<div
									key={skill.name}
									className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
								>
									<img
										src={skill.logo}
										className="w-6 h-6 sm:w-8 sm:h-8"
									/>
									<span className="text-xs xl:text-[16px] text-gray-300">
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
