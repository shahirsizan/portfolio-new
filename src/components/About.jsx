import { profilepicObj } from "../constants";

const About = () => {
	return (
		<section
			id="about"
			className="md:mt-10 lg:mt-20 pb-8 md:pb-8 px-[5vw] md:px-[8vw] lg:px-[12vw]"
		>
			<div className="flex flex-col-reverse md:flex-row items-center">
				{/* LEFT TEXTS */}
				<div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
					<h1 className="text-lg md:text-2xl lg:text-3xl text-white mb-2 whitespace-nowrap">
						Hello, I am
					</h1>
					<h2 className="text-2xl md:text-4xl lg:text-5xl text-white mb-4 whitespace-nowrap">
						Shahir Adil Sizan
					</h2>

					<h2
						className="text-sm
						sm:text-lg
						lg:text-2xl
						text-white
						mb-4
						whitespace-nowrap"
					>
						<span className="text-amber-500">
							Full-Stack Developer | CUET CSE
						</span>{" "}
					</h2>

					<h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] text-white">
						Dedicated to building efficient digital experiences and
						evolving alongside industry-leading engineering teams.
					</h3>

					{/* Resume Button */}
					{/* <a
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
						<span className="text-sm md:text-lg">RESUME</span>
					</a> */}
				</div>

				{/* RIGHT IMAGE */}
				<div className="w-full md:w-1/2 flex justify-center md:justify-end">
					<img
						src={profilepicObj.profilepic2}
						alt="Shahir Adil Sizan"
						className="w-3/5 sm:w-1/3 md:w-2/3 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
