import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSectionId, setActiveSectionId] = useState("");

	// Smooth scroll function
	const handleMenuItemClick = (sectionId) => {
		setActiveSectionId(sectionId);
		setIsOpen(false);

		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	const menuItems = [
		{ id: "skills", label: "Skills" },
		{ id: "experience", label: "Experience" },
		{ id: "work", label: "Projects" },
		{ id: "education", label: "Education" },
		{ id: "certificates", label: "Certificates" },
	];

	return (
		<nav
			className={
				"fixed top-0 w-full z-50 transition duration-300 px-[5vw] md:px-[8vw] lg:px-[12vw] bg-[#050414]/70 backdrop-blur-md shadow-lg"
			}
		>
			<div className="text-white py-3 flex justify-between items-center">
				{/* Logo */}
				<div className="text-2xl md:text-xl font-semibold cursor-pointer ">
					<span className="text-[#8245ec]">&lt;</span>
					<span className="text-white">Sizan</span>
					<span className="text-[#8245ec]">/</span>
					<span className="text-[#8245ec]">&gt;</span>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-7 lg:space-x-10 text-gray-300">
					{menuItems.map((item) => (
						<li
							key={item.id}
							className={`cursor-pointer hover:text-[#8245ec] ${
								activeSectionId === item.id
									? "text-[#8245ec]"
									: ""
							}`}
						>
							<button
								onClick={() => handleMenuItemClick(item.id)}
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>

				{/* hidden Mobile Menu Icon */}
				<div className="md:hidden">
					{isOpen ? (
						<FiX
							className="text-3xl text-[#8245ec] cursor-pointer"
							onClick={() => setIsOpen(false)}
						/>
					) : (
						<FiMenu
							className="text-3xl text-[#8245ec] cursor-pointer"
							onClick={() => setIsOpen(true)}
						/>
					)}
				</div>
			</div>

			{/* Mobile Menu Items */}
			{isOpen && (
				<div className="md:hidden absolute top-18 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/90 backdrop-blur-3xl z-50 rounded-lg shadow-xl ">
					<ul className="flex flex-col items-center space-y-4 py-4 text-gray-100">
						{menuItems.map((item) => (
							<li
								key={item.id}
								className={`cursor-pointer hover:text-white ${
									activeSectionId === item.id
										? "text-[#8245ec]"
										: ""
								}`}
							>
								<button
									onClick={() => handleMenuItemClick(item.id)}
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
