import profilepic from "./assets/about/bg-removed_IMG_4377.png";

import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import appwritelogo from "./assets/tech_logo/appwrite-logo.png";
import clerklogo from "./assets/tech_logo/clerk-logo.png";
import convexlogo from "./assets/tech_logo/convex-logo.png";
import neondblogo from "./assets/tech_logo/neondb-logo.png";
import cloudinarylogo from "./assets/tech_logo/cloudinary-logo.png";

import gitLogo from "./assets/tech_logo/git.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import thinklogo from "./assets/company_logo/thinklogo.png";

// Education
import cuetlogo from "./assets/education_logo/cuet-logo.png";
import dclogo from "./assets/education_logo/dc-logo.png";
import glablogo from "./assets/education_logo/glab-logo.png";

// certificates
import cuetcertlogo from "./assets/certificates/cuet.png";
import hkustcertlogo from "./assets/certificates/hkust2.png";
import ibmcertlogo from "./assets/certificates/ibm.png";
import metacertlogo from "./assets/certificates/meta.png";

// Projects
import khabarbariimage from "./assets/work_logo/khabar-bari-ss.png";

export const profilepicObj = {
	profilepic,
};

export const SkillsInfo = [
	{
		title: "Frontend",
		skills: [
			{ name: "HTML", logo: htmlLogo },
			{ name: "CSS", logo: cssLogo },
			{ name: "JS", logo: javascriptLogo },
			{ name: "React", logo: reactjsLogo },
			{ name: "React Native", logo: reactjsLogo },
			{ name: "Tailwind", logo: tailwindcssLogo },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Node", logo: nodejsLogo },
			{ name: "Express", logo: expressjsLogo },
			{ name: "Postgres", logo: postgreLogo },
			{ name: "MongoDB", logo: mongodbLogo },
			{ name: "Clerk", logo: clerklogo },
			{ name: "Appwrite", logo: appwritelogo },
			{ name: "Convex", logo: convexlogo },
			{ name: "Neon", logo: neondblogo },
			{ name: "Cloudinary", logo: cloudinarylogo },
		],
	},
	{
		title: "Tools",
		skills: [
			{ name: "Git", logo: gitLogo },
			{ name: "Postman", logo: postmanLogo },
			{ name: "Vercel", logo: vercelLogo },
		],
	},
];

export const experiences = [
	{
		id: 0,
		img: thinklogo,
		role: "Industrial Attachment",
		company: "THiNK Ltd",
		date: "2022 (Duration: One month)",
		desc: "Participated in a one-month industrial attachment program at THiNK Ltd. Uttara, fulfilling a requirement as part of my academic curriculum.",
		skills: ["Software Development Life Cycle", "Agile Framework"],
	},
	// {
	// 	id: 1,
	// 	img: thinklogo,
	// 	role: "Industrial Attachment",
	// 	company: "THiNK Ltd",
	// 	date: "2022 (Duration: One month)",
	// 	desc: "Participated in a one-month industrial attachment program at THiNK Ltd. Uttara, fulfilling a requirement as part of my academic curriculum.",
	// 	skills: ["Software Development Life Cycle", "Agile Framework"],
	// },
	// {
	// 	id: 2,
	// 	img: thinklogo,
	// 	role: "Industrial Attachment",
	// 	company: "THiNK Ltd",
	// 	date: "2022 (Duration: One month)",
	// 	desc: "Participated in a one-month industrial attachment program at THiNK Ltd. Uttara, fulfilling a requirement as part of my academic curriculum.",
	// 	skills: ["Software Development Life Cycle", "Agile Framework"],
	// },
	// {
	// 	id: 3,
	// 	img: thinklogo,
	// 	role: "Industrial Attachment",
	// 	company: "THiNK Ltd",
	// 	date: "2022 (Duration: One month)",
	// 	desc: "Participated in a one-month industrial attachment program at THiNK Ltd. Uttara, fulfilling a requirement as part of my academic curriculum.",
	// 	skills: ["Software Development Life Cycle", "Agile Framework"],
	// },
	// {
	// 	id: 4,
	// 	img: thinklogo,
	// 	role: "Industrial Attachment",
	// 	company: "THiNK Ltd",
	// 	date: "2022 (Duration: One month)",
	// 	desc: "Participated in a one-month industrial attachment program at THiNK Ltd. Uttara, fulfilling a requirement as part of my academic curriculum.",
	// 	skills: ["Software Development Life Cycle", "Agile Framework"],
	// },
];

export const education = [
	{
		id: 0,
		img: cuetlogo,
		school: "CUET, Chattogram",
		date: "2018 - 2025",
		grade: "3.10",
		discipline: "Computer Science & Engineering",
		degree: "B.Sc. in CSE",
		"Capstone Project":
			"Prevention of Gossypiboma, A Deep Learning-based approach",
		"Project Info":
			"Developed a deep-learning based application to count surgical gauzes in real-time to prevent Gossypiboma (retained surgical gauzes) during surgical procedures",
	},
	{
		id: 1,
		img: dclogo,
		school: "Dhaka College, Dhaka",
		date: "2015 - 2017",
		grade: "5.00",
		discipline: "Science",
		degree: "HSC",
	},
	{
		id: 2,
		img: glablogo,
		school: "Government Laboratory High School, Dhaka",
		date: "2005 - 2015",
		grade: "5.00",
		discipline: "Science",
		degree: "SSC",
	},
];

export const certificates = [
	{
		id: 0,
		img: hkustcertlogo,
		name: "Software Engineering",
		date: "2023",
		institute: "The Hong Kong University of Science and Technology",
		link: "https://www.coursera.org/account/accomplishments/specialization/N574PGMHZP6K",
	},
	{
		id: 1,
		img: ibmcertlogo,
		name: "Introduction to Agile Development and Scrum",
		date: "2024",
		institute: "IBM",
		link: "https://www.coursera.org/account/accomplishments/verify/897XC9Q87PEA",
	},
	{
		id: 2,
		img: metacertlogo,
		name: "HTML and CSS in depth",
		date: "2024",
		institute: "Meta",
		link: "https://www.coursera.org/account/accomplishments/verify/6DA46QCW6UL3",
	},
	{
		id: 3,
		img: metacertlogo,
		name: "React Basics",
		date: "2024",
		institute: "Meta",
		link: "https://www.coursera.org/account/accomplishments/verify/6BFM33TRVXVA",
	},
	{
		id: 4,
		img: metacertlogo,
		name: "Advanced React",
		date: "2024",
		institute: "Meta",
		link: "https://www.coursera.org/account/accomplishments/verify/KUKVFP39SB33",
	},
	{
		id: 5,
		img: metacertlogo,
		name: "Introduction to Databases",
		date: "2024",
		institute: "Meta",
		link: "https://www.coursera.org/account/accomplishments/verify/FER9WX7BSNDY",
	},
];

export const projects = [
	{
		id: 0,
		title: "Khabar Bari (Bkash integrated)",
		description: "Khabar Bari description",
		image: khabarbariimage,
		tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
		github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
		webapp: "https://githubprofiledetective.netlify.app/",
	},
	{
		id: 1,
		title: "Image Background Remover (Bkash integrated)",
		description: "Image Background Remover description",
		image: khabarbariimage,
		tags: [
			"React JS",
			"Node.js",
			"MongoDB",
			"Express",
			"HTML",
			"CSS",
			"JavaScript",
		],
		github: "https://github.com/codingmastr/CSPrep",
		webapp: "https://csprep.netlify.app/",
	},
	{
		id: 2,
		title: "Weather App (Vanilla JS)",
		description: "Weather App (Vanilla JS) description",
		image: khabarbariimage,
		tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
		github: "https://github.com/codingmastr/Movie-Recommendation-App",
		webapp: "https://movie-recommendation-app-jet.vercel.app/",
	},
	{
		id: 3,
		title: "Instagram Clone (Basic features) (React Native)",
		description: "Weather App (Vanilla JS) description",
		image: khabarbariimage,
		tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
		github: "https://github.com/codingmastr/Movie-Recommendation-App",
		webapp: "https://movie-recommendation-app-jet.vercel.app/",
	},
	{
		id: 4,
		title: "Blog App (Microservice architecture)",
		description: "Blog App (Microservice architecture) description",
		image: khabarbariimage,
		tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
		github: "https://github.com/codingmastr/Movie-Recommendation-App",
		webapp: "https://movie-recommendation-app-jet.vercel.app/",
	},
];
