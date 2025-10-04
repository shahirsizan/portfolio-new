import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
	return (
		<footer className="text-center py-6 px-[5vw] md:px-[8vw] lg:px-[12vw]">
			<h2 className="text-xl font-semibold text-purple-500">
				Shahir Adil Sizan
			</h2>

			<div className="flex gap-1 md:gap-2 lg:gap-4 p-3 justify-center ">
				<a
					href="https://mail.google.com/mail/?view=cm&to=shahir.sizan18@gmail.com"
					title="shahir.sizan18@gmail.com"
					className="border p-2 text-md rounded bg-gray-800 text-white "
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Send email to Sizan"
				>
					<CiMail />
				</a>
				<a
					href="https://www.linkedin.com/in/shahir-adil-sizan/"
					title="Linkedin"
					className="border p-2 text-md rounded bg-gray-800 text-white "
					target="_blank"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://github.com/shahirsizan"
					title="Github"
					className="border p-2 text-md rounded bg-gray-800 text-white "
					target="_blank"
				>
					<FaSquareGithub />
				</a>
				<a
					href="https://leetcode.com/u/user8526sJ/"
					title="Leetcode"
					className="border p-2 text-md rounded bg-gray-800 text-white "
					target="_blank"
				>
					<SiLeetcode />
				</a>
				<a
					href="https://codeforces.com/profile/u125"
					title="Codeforces"
					className="border p-2 text-md rounded bg-gray-800 text-white "
					target="_blank"
				>
					<SiCodeforces />
				</a>
			</div>

			<p className="text-sm text-gray-400 mt-6">
				{new Date().getFullYear()} © Shahir Adil Sizan. <br /> All
				rights reserved
			</p>
		</footer>
	);
};

export default Footer;
