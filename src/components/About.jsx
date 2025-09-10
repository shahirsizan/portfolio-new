import { profilepicObj } from "../constants";

const About = () => {
	return (
		<section
			id="about"
			className="py-4 px-[5vw] md:px-[8vw] lg:px-[12vw]  md:mt-24 lg:mt-32"
		>
			<div className="flex flex-col-reverse md:flex-row items-center">
				{/* LEFT TEXTS */}
				<div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
					<h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2">
						Hello, I am
					</h1>
					<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 whitespace-nowrap">
						Shahir Adil Sizan
					</h2>

					<h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] ">
						<span className="text-white">
							A Computer Science graduate with profound interest
							in{" "}
							<span className="whitespace-nowrap">
								Full-Stack
							</span>{" "}
							<span className="whitespace-nowrap">
								Web Applications
							</span>{" "}
							and AI{" "}
						</span>
					</h3>

					{/* Resume Button */}
					<a
						href="https://drive.google.com/file/d/1eSNr3zRzyMEUSbymEB5GUIYSRzhuKvUk/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-white py-3 px-8 rounded-full mt-5 font-bold transition duration-300 transform hover:scale-105"
						style={{
							background:
								"linear-gradient(90deg, #8245ec, #a855f7)",
							boxShadow:
								"0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
						}}
					>
						<span className="text-sm md:text-lg">
							DOWNLOAD RESUME
						</span>
					</a>
				</div>

				{/* RIGHT IMAGE */}
				<div className="w-full md:w-1/2 flex justify-center md:justify-end">
					<img
						src={profilepicObj.profilepic}
						alt="Shahir Adil Sizan"
						className="max-md:w-2/3 md:w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
