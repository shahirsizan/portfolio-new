import React from "react";
import { certificates } from "../constants";

const Certificates = () => {
	return (
		<section
			id="certificates"
			className="pt-16 md:pt-24 pb-12 lg:pb-24 px-[5vw] md:px-[8vw] lg:px-[12vw]"
		>
			{/* TITLE */}
			<div className="text-center mb-16">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					CERTIFICATES
				</h2>
				<div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
			</div>

			<div className="flex flex-col items-center">
				{certificates.map((certificate) => (
					// OUTER CONTAINER
					<div
						key={certificate.id}
						className={`w-full lg:w-3/5 flex justify-center mb-8`}
					>
						{/* CARD CONTAINER*/}
						<a
							href={certificate.link}
							target="_blank"
							className="w-full"
						>
							<div
								className={`p-5 lg:p-7 border border-gray-700 bg-gray-900/70 rounded-2xl shadow-2xl cursor-pointer hover:shadow-purple-500/30`}
							>
								<div className="flex items-center space-x-6">
									<div className="flex-shrink-0 w-10 lg:w-20">
										<img
											src={certificate.img}
											className="w-full h-full object-contain"
										/>
									</div>

									<div className="flex flex-col justify-between">
										<div>
											<h3 className="text-lg lg:text-2xl font-semibold text-gray-100">
												{certificate.name}
											</h3>
											<h4 className="text-sm lg:text-lg font-semibold text-gray-400">
												{certificate.institute}
											</h4>
										</div>

										<p className="text-xs lg:text-md font-semibold text-gray-400 mt-2">
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
