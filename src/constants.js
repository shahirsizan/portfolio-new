// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import appwritelogo from "./assets/tech_logo/appwrite-logo.png";
import clerklogo from "./assets/tech_logo/clerk-logo.png";
import convexlogo from "./assets/tech_logo/convex-logo.png";
import cloudinarylogo from "./assets/tech_logo/cloudinary-logo.png";

import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";
import thinklogo from "./assets/company_logo/thinklogo.png";

// Education
import cuetlogo from "./assets/education_logo/cuet-logo.png";
import dclogo from "./assets/education_logo/dc-logo.png";
import glablogo from "./assets/education_logo/glab-logo.png";

// Projects
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";

export const SkillsInfo = [
	{
		title: "Frontend",
		skills: [
			{ name: "HTML", logo: htmlLogo },
			{ name: "CSS", logo: cssLogo },
			{ name: "JavaScript", logo: javascriptLogo },
			{ name: "React JS", logo: reactjsLogo },
			{ name: "Tailwind CSS", logo: tailwindcssLogo },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Node JS", logo: nodejsLogo },
			{ name: "Express JS", logo: expressjsLogo },
			{ name: "PostgreSQL", logo: postgreLogo },
			{ name: "MongoDB", logo: mongodbLogo },
			{ name: "Clerk", logo: clerklogo },
			{ name: "Appwrite", logo: appwritelogo },
			{ name: "Convex", logo: convexlogo },
			{ name: "Cloudinary", logo: cloudinarylogo },
		],
	},
	{
		title: "Languages",
		skills: [
			{ name: "C", logo: cLogo },
			{ name: "C++", logo: cppLogo },
			{ name: "Java", logo: javaLogo },
			{ name: "Python", logo: pythonLogo },
			{ name: "C-Sharp", logo: csharpLogo },
			{ name: "JavaScript", logo: javascriptLogo },
			{ name: "TypeScript", logo: typescriptLogo },
		],
	},
	{
		title: "Tools",
		skills: [
			{ name: "Git", logo: gitLogo },
			{ name: "GitHub", logo: githubLogo },
			{ name: "VS Code", logo: vscodeLogo },
			{ name: "Postman", logo: postmanLogo },
			{ name: "Compass", logo: mcLogo },
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
		desc: "Participated in a one-month industrial attachment program at THiNK Ltd., Uttara, fulfilling a requirement of my academic curriculum.",
		skills: ["Software Development Life Cycle", "Agile Framework"],
	},
];

export const education = [
	{
		id: 0,
		img: cuetlogo,
		school: "CUET, Chattogram",
		date: "2018 - 2025",
		grade: "3.10",
		desc: "Computer Science & Engineering",
		degree: "B.Sc. in CSE",
	},
	{
		id: 1,
		img: dclogo,
		school: "Dhaka College, Dhaka",
		date: "2015 - 2017",
		grade: "5.00",
		desc: "Science",
		degree: "HSC",
	},
	{
		id: 2,
		img: glablogo,
		school: "Government Laboratory High School, Dhaka",
		date: "2005 - 2015",
		grade: "5.00",
		desc: "Science",
		degree: "SSC",
	},
];

export const projects = [
	{
		id: 0,
		title: "Khabar Bari",
		description:
			"A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
		image: githubdetLogo,
		tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
		github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
		webapp: "https://githubprofiledetective.netlify.app/",
	},
	{
		id: 1,
		title: "CS Prep",
		description:
			"A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
		image: csprepLogo,
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
		title: "Movie Recommendation App",
		description:
			"A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
		image: movierecLogo,
		tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
		github: "https://github.com/codingmastr/Movie-Recommendation-App",
		webapp: "https://movie-recommendation-app-jet.vercel.app/",
	},
	{
		id: 3,
		title: "Email Validator NPM Package",
		description:
			"An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
		image: npmLogo,
		tags: ["React JS", "Node.js", "NPM", "Validation"],
		github: "https://github.com/codingmastr/cmtk-email-validator",
		webapp: "https://www.npmjs.com/package/cmtk-email-validator",
	},
	{
		id: 4,
		title: "Task Reminder Chrome Extension Tool",
		description:
			"A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
		image: taskremLogo,
		tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
		github: "https://github.com/codingmastr/Task-Reminder-Tool",
		webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
	},
	{
		id: 5,
		title: "Webverse Digital",
		description:
			"The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
		image: webverLogo,
		tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
		github: "https://github.com/codingmastr/Webverse-Digital",
		webapp: "https://webversedigital.com/",
	},
];
