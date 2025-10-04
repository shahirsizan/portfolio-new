import React from "react";
import { education } from "../constants";

const Education = () => {
	return (
		<section
			id="education"
			className="pt-8 md:pt-12 pb-8 md:pb-8 px-[5vw] md:px-[8vw] lg:px-[12vw]"
		>
			{/* TITLE */}
			<div className="text-center mb-16">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					EDUCATION
				</h2>
				<div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
			</div>

			<div className="flex flex-col items-center">
				{education.map((edu) => (
					// OUTER CONTAINER
					<div
						key={edu.id}
						className={`w-full lg:w-3/5 flex justify-center mb-3`}
					>
						{/* CARD CONTAINER*/}
						<div
							className={`w-full p-3 border border-gray-700 bg-gray-900/70 rounded-2xl shadow-xl hover:shadow-purple-500/30`}
						>
							<div className="flex items-center space-x-6">
								{/* LOGO */}
								<div className="flex-shrink-0 w-14 lg:w-20">
									<img
										src={edu.img}
										className="w-full h-full object-contain"
									/>
								</div>

								{/* TEXT DATA */}
								<div className="flex flex-col justify-between">
									<div>
										<h3 className="text-lg lg:text-lg font-semibold text-gray-100">
											{edu.degree}
										</h3>
										<h4 className="text-xs lg:text-md text-gray-100">
											{edu.school}
										</h4>
									</div>

									<p className="text-xs lg:text-sm text-gray-100 mt-2">
										{edu.date}
									</p>
								</div>
							</div>

							{/* MORE TEXT DATA */}
							<p className="mt-4 text-sm xl:text-md text-gray-400 ">
								<span className="font-semibold">Grade: </span>
								<span className="text-gray-100">
									{edu.grade}
								</span>
							</p>

							<p className="mt-4 text-sm xl:text-md text-gray-400 ">
								<span className="font-semibold">
									Discipline:{" "}
								</span>
								<span className="text-gray-100">
									{edu.discipline}
								</span>
							</p>

							{edu["Capstone Project"] && (
								<p className="mt-4 text-sm xl:text-md text-gray-400">
									Capstone Project:{" "}
									<span className="text-gray-100">
										{edu["Capstone Project"]}
									</span>
								</p>
							)}

							{edu["Project Info"] && (
								<p className="mt-4 text-sm xl:text-md text-gray-400">
									Project Info:{" "}
									<span className="text-gray-100">
										{edu["Project Info"]}{" "}
									</span>
								</p>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
