import profilepic from "./assets/about/bg-removed_IMG_4377.png";

// Skills Section Logo's
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
import cloudinarylogo from "./assets/tech_logo/cloudinary-logo.png";

import gitLogo from "./assets/tech_logo/git.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import thinklogo from "./assets/company_logo/thinklogo.png";

// Education
import cuetlogo from "./assets/education_logo/cuet-logo.png";
import dclogo from "./assets/education_logo/dc-logo.png";
import glablogo from "./assets/education_logo/glab-logo.png";

// Projects
import khabarbariimage from "./assets/work_logo/khabar-bari-ss.png";
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";

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
