import { Coffee, FileText, Github, Linkedin, Mail } from "lucide-react";

export const siteName = "Hadi Kashlan";
export const siteRole = "Senior Full Stack & Mobile Architect";
export const siteUrl = "https://hkashlan.github.io/";
export const siteDescription =
	"Hadi Kashlan is a senior full stack and mobile architect with 23+ years of experience building enterprise-scale web systems and hybrid mobile apps with Angular, React, TypeScript, Node.js and Capacitor, and driving AI-agentic development workflows.";

/** Falkensee sits just outside Berlin — recruiters search for the metro area. */
export const siteLocation = {
	city: "Falkensee",
	region: "Berlin metropolitan area",
	country: "Germany",
	countryCode: "DE",
	label: "Falkensee · Berlin area, Germany",
};

export interface Degree {
	degree: string;
	field: string;
	institution: string;
	place: string;
	period: string;
	note?: string;
}

export const education: Degree[] = [
	{
		degree: "Master's degree",
		field: "Computer Information Systems",
		institution: "Arabic Academy for Banking and Financial Sciences",
		place: "Damascus, Syria",
		period: "September 2006 – July 2009",
		note: "Overall grade: 82.4%",
	},
	{
		degree: "Bachelor's degree",
		field: "Software Engineering",
		institution: "Damascus University",
		place: "Damascus, Syria",
		period: "September 1999 – June 2004",
	},
];

export interface Language {
	name: string;
	level: string;
	cefr: string;
	/** Share of the proficiency bar to fill, 0–100. */
	proficiency: number;
}

export const languages: Language[] = [
	{ name: "Arabic", level: "Native", cefr: "C2", proficiency: 100 },
	{ name: "English", level: "Very good", cefr: "C1", proficiency: 85 },
	{ name: "German", level: "Good", cefr: "B1", proficiency: 55 },
];

interface SocialLink {
	name: string;
	icon: React.ComponentType<{ className?: string }>;
	url: string;
	description: string;
	color: string;
}

export const linkedInInfo: SocialLink = {
	name: "LinkedIn",
	icon: Linkedin,
	url: "https://www.linkedin.com/in/hadi-kashlan/",
	description: "Connect professionally",
	color: "bg-blue-600",
};

export const githubInfo: SocialLink = {
	name: "GitHub",
	icon: Github,
	url: "https://github.com/hkashlan",
	description: "View my code",
	color: "bg-slate-800",
};

export const emailInfo: SocialLink = {
	name: "Email",
	icon: Mail,
	url: "mailto:hkashlan@gmail.com",
	description: "Send a message",
	color: "bg-red-600",
};

export const resumeInfo: SocialLink = {
	name: "Resume",
	icon: FileText,
	url: "https://drive.google.com/file/d/1ZJKb1UP9f6UPWmPK9oDcniuTsvpD3plp/view?usp=sharing",
	description: "Download CV",
	color: "bg-green-600",
};

export const scheduleCallInfo: SocialLink = {
	name: "Schedule Call",
	icon: Coffee,
	url: "https://calendly.com/hkashlan/15min",
	description: "Let's chat",
	color: "bg-orange-600",
};

export const socialLinks: SocialLink[] = [
	linkedInInfo,
	githubInfo,
	emailInfo,
	resumeInfo,
	scheduleCallInfo,
];
