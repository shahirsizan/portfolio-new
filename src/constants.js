import profilepic from "./assets/about/bg-removed_IMG_4377.png";

// language
import javascriptLogo from "./assets/tech_logo/javascript.png";
import typescriptLogo from "./assets/tech_logo/typescript-logo.png";

// frontend
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import shadcnLogo from "./assets/tech_logo/shadcn-logo.png";

// backend
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import appwritelogo from "./assets/tech_logo/appwrite-logo.png";
import neondblogo from "./assets/tech_logo/neondb-logo.png";
import cloudinarylogo from "./assets/tech_logo/cloudinary-logo.png";

// auth
// import clerklogo from "./assets/tech_logo/clerk-logo.png";
import jwtLogo from "./assets/tech_logo/jwtLogo.png";
import googleSigninLogo from "./assets/tech_logo/googleSigninLogo.png";

// other
import gitLogo from "./assets/tech_logo/git.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import renderLogo from "./assets/tech_logo/renderLogo.jpg";

// payment gateway
import bkashLogo from "./assets/tech_logo/bkashLogo.png";

// Experience
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
import khabarbariimage from "./assets/work_logo/khabarbari/1.png";
import weatherappimage from "./assets/work_logo/weatherapp/1.png";
import bgremoverimage from "./assets/work_logo/bgremover/2.png";

export const profilepicObj = {
	profilepic,
};

export const SkillsInfo = [
	{
		title: "Language",
		skills: [
			{ name: "JavaScript", logo: javascriptLogo },
			// { name: "TS", logo: typescriptLogo },
		],
	},
	{
		title: "Frontend",
		skills: [
			{ name: "HTML", logo: htmlLogo },
			{ name: "CSS", logo: cssLogo },
			{ name: "React", logo: reactjsLogo },
			{ name: "Tailwind CSS", logo: tailwindcssLogo },
			{ name: "Shadcn/ui", logo: shadcnLogo },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Node.js", logo: nodejsLogo },
			{ name: "Express", logo: expressjsLogo },
			{ name: "PostgreSQL", logo: postgreLogo },
			{ name: "MongoDB", logo: mongodbLogo },
			{ name: "Cloudinary", logo: cloudinarylogo },
			{ name: "NeonDB", logo: neondblogo },
		],
	},
	{
		title: "Auth",
		skills: [
			{ name: "JWT", logo: jwtLogo },
			{ name: "Google Sign-in", logo: googleSigninLogo },
		],
	},
	{
		title: "Payment Gateway",
		skills: [{ name: "bKash", logo: bkashLogo }],
	},
	{
		title: "Other",
		skills: [
			{ name: "Git", logo: gitLogo },
			{ name: "Postman", logo: postmanLogo },
			{ name: "Vercel", logo: vercelLogo },
			{ name: "Render", logo: renderLogo },
		],
	},
];

export const experiences = [
	{
		id: 0,
		img: thinklogo,
		role: "Industrial Attachment",
		company: "THiNK Ltd",
		date: "2022 (Duration: Three week)",
		desc: "Participated in a three-week industrial attachment program at THiNK Ltd. Uttara, as part of my academic requirements.",
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
		name: "Software Engineering (Specialization)",
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
		name: "Introduction to Databases",
		date: "2024",
		institute: "Meta",
		link: "https://www.coursera.org/account/accomplishments/verify/FER9WX7BSNDY",
	},
	{
		id: 3,
		img: metacertlogo,
		name: "Introduction to Back-End Development",
		date: "2024",
		institute: "Meta",
		link: "https://www.coursera.org/account/accomplishments/verify/YET43DEGDS2E",
	},
	{
		id: 4,
		img: metacertlogo,
		name: "React Basics",
		date: "2024",
		institute: "Meta",
		link: "https://www.coursera.org/account/accomplishments/verify/6BFM33TRVXVA",
	},
	{
		id: 5,
		img: metacertlogo,
		name: "Advanced React",
		date: "2024",
		institute: "Meta",
		link: "https://www.coursera.org/account/accomplishments/verify/KUKVFP39SB33",
	},
];

export const projects = [
	{
		id: "khabarbari",
		title: "Khabar Bari",
		description:
			"Food delivery app with cart functionality and bKash sandbox integration",
		image: khabarbariimage,
		tags: ["MERN", "Tailwind CSS", "bKash"],
		githubLink:
			"https://github.com/shahirsizan/khabar-bari-online-food-ordering-app-frontend",
		liveLink: "https://khabar-bari-frontend.vercel.app/",
	},
	{
		id: "bgremover",
		title: "Background Remover",
		description: "Image Background Remover description",
		image: bgremoverimage,
		tags: ["MERN", "Tailwind CSS", "bKash"],
		githubLink:
			"https://github.com/shahirsizan/Image-Background-Remover-App",
		liveLink: "https://image-background-remover-app.vercel.app/",
	},
	{
		id: "weatherapp",
		title: "Weather App",
		description: "Weather App (Vanilla JS) description",
		image: weatherappimage,
		tags: ["HTML", "CSS", "JS", "OpenWeatherMapAPI"],
		githubLink: "https://github.com/shahirsizan/weatherAppJavascript2025",
		liveLink: "https://weather-app-javascript2025.vercel.app/",
	},

	// {
	// 	id: "blogapp",
	// 	title: "Blog App (Microservice architecture)",
	// 	description: "Blog App (Microservice architecture) description",
	// 	image: khabarbariimage,
	// 	tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
	// 	githubLink: "https://github.com/codingmastr/Movie-Recommendation-App",
	// 	liveLink: "https://movie-recommendation-app-jet.vercel.app/",
	// },
];
