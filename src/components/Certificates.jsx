import React from "react";
import { certificates } from "../constants";

const Certificates = () => {
	return (
		<section
			id="certificates"
			className="pt-8 md:pt-12 pb-8 md:pb-8 px-[5vw] md:px-[8vw] lg:px-[12vw]"
		>
			{/* TITLE */}
			<div className="text-center mb-16">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					CERTIFICATIONS
				</h2>
				<div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
			</div>

			<div className="flex flex-col items-center">
				{certificates.map((certificate) => (
					// OUTER CONTAINER
					<div
						key={certificate.id}
						className={`OUTER-CONTAINER w-full lg:w-3/5 flex justify-center mb-3 md:mb-4`}
					>
						{/* CARD CONTAINER*/}
						<a
							href={certificate.link}
							target="_blank"
							className="LINK-CONTAINER w-full"
						>
							<div
								className={`p-3 border border-gray-700 bg-gray-900/70 rounded-2xl shadow-xl cursor-pointer hover:shadow-purple-500/30`}
							>
								<div className="flex items-center space-x-3 md:space-x-6">
									{/* LOGO */}
									<div className="flex-shrink-0 w-7 md:w-10 lg:w-14">
										<img
											src={certificate.img}
											className="w-full h-full object-contain"
										/>
									</div>

									{/* TEXT DATA */}
									<div className="flex flex-col justify-between">
										<div>
											<h3 className="text-lg lg:text-lg font-semibold text-gray-100">
												{certificate.name}
											</h3>
											<h4 className="text-xs lg:text-md font-semibold text-gray-400">
												{certificate.institute}
											</h4>
										</div>

										<p className="text-xs lg:text-sm font-semibold text-gray-400 mt-2">
											{certificate.date}
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Certificates;
