import { useState } from "react";
import { projects } from "../constants";

const Project = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	const handleOpenModal = (project) => {
		setSelectedProject(project);
	};

	const handleCloseModal = () => {
		setSelectedProject(null);
	};

	return (
		<section
			id="work"
			className="pt-16 md:pt-24 pb-24 px-[5vw] md:px-[8vw] lg:px-[12vw] relative"
		>
			{/* TITLE */}
			<div className="text-center mb-16">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					PROJECTS
				</h2>
				<div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
				<p className="text-gray-400 mt-4 text-lg font-semibold">
					Some of the hobby projects I have worked on.
				</p>
			</div>

			{/* CARDS CONTAINER */}
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
				{projects.map((project) => (
					// CARD
					<div
						key={project.id}
						onClick={() => handleOpenModal(project)}
						className="border border-gray-700 bg-gray-900/70 rounded-2xl shadow-2xl cursor-pointer hover:shadow-purple-500/30"
					>
						{/* IMAGE */}
						<div className="p-4 rounded-xl">
							<img
								src={project.image}
								className="w-full h-48 object-cover rounded-xl overflow-hidden"
							/>
						</div>

						{/* TEXTUAL DATA */}
						<div className="p-6">
							<h3 className="text-2xl font-bold text-white mb-2">
								{project.title}
							</h3>

							<p className="text-gray-500 mb-4 pt-4">
								{project.description}
							</p>

							<div className="mb-4">
								{project.tags.map((tag, index) => (
									<span
										key={index}
										className="inline-block bg-[#251f38]/80 text-xs font-semibold text-purple-500 rounded-full p-2 mr-2 mb-2"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="flex gap-4">
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
								>
									View Code
								</a>

								<a
									href={project.liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
								>
									View Live
								</a>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* MODAL CONTAINER */}
			{selectedProject && (
				<div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black/80 p-4">
					{/* CARD CONTAINER */}
					<div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
						{/* CLOSE BUTTON */}
						<div className="flex justify-end p-4">
							<button
								onClick={() => {
									handleCloseModal();
								}}
								className="text-white text-4xl font-bold hover:text-purple-500 cursor-pointer"
							>
								&times;
							</button>
						</div>

						<div className="flex flex-col">
							<div className="w-full flex justify-center bg-gray-900 px-4">
								<img
									src={selectedProject.image}
									className="w-[95%] object-contain rounded-xl shadow-2xl"
								/>
							</div>

							<div className="lg:p-8 p-6">
								<h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
									{selectedProject.title}
								</h3>

								<p className="text-gray-400 mb-6 lg:text-base text-xs">
									{selectedProject.description}
								</p>

								<div className="mb-6">
									{selectedProject.tags.map((tag, index) => (
										<span
											key={index}
											className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full p-1.5 mr-1.5 mb-2"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<a
										href={selectedProject.github}
										target="_blank"
										rel="noopener noreferrer"
										className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
									>
										View Code
									</a>

									<a
										href={selectedProject.webapp}
										target="_blank"
										rel="noopener noreferrer"
										className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
									>
										View Live
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Project;
