import {
	Award,
	Briefcase,
	Calendar,
	ChevronDown,
	Filter,
	X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** The page is server-rendered, where a layout effect would only warn. */
const useIsomorphicLayoutEffect =
	typeof window === "undefined" ? useEffect : useLayoutEffect;

type Experience = {
	company: { name: string; url?: string };
	role: string;
	period: string;
	duration: string;
	description: string;
	projects: Array<{ url?: string; text: string; skills: string[] }>;
	skills: string[];
	achievements: string[];
	color: string;
};

const experiences: Experience[] = [
	{
		company: {
			name: "Independent Projects",
			url: "https://github.com/hkashlan",
		},
		role: "AI & Full-Stack Engineer",
		period: "2024 - Present",
		duration: "Alongside full-time work",
		description:
			"Products I design, build and ship on my own time — AI-assisted end to end, from the first Claude Code session to the production deployment.",
		projects: [
			{
				url: "https://myclinic-sy.com/en",
				text: "MyClinic — clinic management platform for practices across Iraq, Syria and the wider region",
				skills: [
					"Claude Code",
					"MCP",
					"React",
					"TanStack",
					"TypeScript",
					"Tailwind CSS",
					"PostgreSQL",
				],
			},
			{
				url: "https://management.myclinic-sy.com/",
				text: "MyClinic Management — multi-tenant back office with a double-entry accounting ledger",
				skills: [
					"Claude Code",
					"React",
					"TanStack",
					"TypeScript",
					"Tailwind CSS",
					"PostgreSQL",
				],
			},
			{
				url: "https://hkashlan.github.io/altitudevision/",
				text: "AltitudeVision — bilingual product site for an AI voice-agent service",
				skills: [
					"React",
					"TanStack",
					"TypeScript",
					"NestJS",
					"Payload CMS",
					"DaisyUI",
					"Tailwind CSS",
				],
			},
			{
				url: "https://hkashlan.github.io/",
				text: "This portfolio site",
				skills: ["TanStack", "React", "TypeScript", "Tailwind CSS", "Vite"],
			},
		],
		skills: [
			"Claude Code",
			"MCP",
			"Custom Agents",
			"React",
			"TanStack",
			"TypeScript",
			"Tailwind CSS",
			"DaisyUI",
			"NestJS",
			"Payload CMS",
			"Node.js",
			"PostgreSQL",
			"Docker",
			"Dokploy",
			"Vite",
			"Figma",
		],
		achievements: [
			"Shipping production products solo — design, frontend, API, database and deployment",
			"AI-assisted end to end: Claude Code, MCP servers and custom agents drive a large share of the implementation",
			"Built an Arabic-first bilingual (AR/EN) UI with full RTL support",
			"Implemented a double-entry accounting ledger — chart of accounts, journal entries, fiscal periods, trial balance, P&L and balance sheet",
		],
		color: "from-violet-500 to-fuchsia-600",
	},
	{
		company: {
			name: "Akelius Technology",
			url: "https://www.linkedin.com/company/akelius-technology",
		},
		role: "Senior Full Stack & Mobile Architect",
		period: "April 2019 - Present",
		duration: "7+ years",
		description:
			"Akelius is an international residential real-estate company registered in Sweden. Building in-house enterprise-scale solutions and driving the team's move to AI-agentic development.",
		projects: [
			{
				text: "Custom CMS built on Strapi, replacing the legacy Java-based Hippo CMS",
				skills: ["Strapi", "Node.js", "React", "PostgreSQL"],
			},
			{ text: "Customer Management System", skills: ["Angular"] },
			{
				url: "https://play.google.com/store/apps/details?id=com.akelius.mypages.prod",
				text: "Tenant Application",
				skills: ["Angular", "Capacitorjs", "GraphQL"],
			},
			{
				url: "https://play.google.com/store/apps/details?id=com.akelius.myday.prod",
				text: "Inspection Application (Mobile based on Capacitorjs)",
				skills: ["Angular", "Capacitorjs", "GraphQL"],
			},
			{ text: "Rent Application", skills: ["Angular", "GraphQL"] },
			{
				url: "http://rent.akelius.com/",
				text: "Apartment Management System",
				skills: ["Angular"],
			},
			{
				url: "http://akelius.com/",
				text: "Akelius Website",
				skills: [
					"Angular",
					"React",
					"Strapi",
					"MongoDB",
					"PostgreSQL",
					"Terraform",
					"Azure",
				],
			},
		],
		skills: [
			"Claude Code",
			"MCP",
			"Angular",
			"React",
			"Strapi",
			"TypeScript",
			"Java",
			"Ionic",
			"Capacitorjs",
			"Docker",
			"Docker Compose",
			"Kubernetes",
			"Jenkins",
			"Git",
			"Node.js",
			"Express.js",
			"Azure",
			"PostgreSQL",
			"MongoDB",
			"GraphQL",
		],
		achievements: [
			"Driving adoption of AI-agentic workflows (Claude Code, custom agents, skills, MCP) to accelerate legacy migration work",
			"Migrating the legacy Java-based Hippo CMS to Strapi and architecting a custom CMS on top of it",
			"Built 10+ internal applications used across the organisation",
			"Move from paid service to open source",
			"Improve user experience in all Apps",
			"Part of Frontend Monthly meeting to guide Akelius Frontend libraries",
			"Mentoring and training new frontend team members",
		],
		color: "from-blue-500 to-cyan-500",
	},
	{
		company: {
			name: "Crealytics",
			url: "https://www.linkedin.com/company/crealytics",
		},
		role: "Frontend Developer",
		period: "October 2018 - March 2019",
		duration: "6 Months",
		description:
			"Crealytics builds performance marketing technology for online retailers, with a focus on paid search and shopping campaign automation.",
		projects: [],
		skills: ["React"],
		achievements: ["Built the frontend of an advertising bidding platform"],
		color: "from-purple-500 to-pink-500",
	},
	{
		company: {
			name: "Ladenzeile",
			url: "https://www.linkedin.com/company/ladenzeile-gmbh/",
		},
		role: "Senior Frontend Developer",
		period: "June 2015 - September 2018",
		duration: "3+ Years",
		description:
			"Visual Meta operates comparison shopping portals under the brands LadenZeile and ShopAlike across Europe, aggregating millions of offers from various online retailers. ",
		projects: [],
		skills: [
			"JSP",
			"HTML",
			"CSS",
			"JavaScript",
			"jQuery",
			"Angular",
			"Jenkins",
			"Docker",
			"Docker Compose",
			"Kubernetes",
			"Bitbucket",
			"Git",
			"Jira",
			"Confluence",
		],
		achievements: [
			"Moving to microservices architecture",
			"Moving to new Technologies Kubernetes + Docker",
			"keep the legacy JSP application system working and migrating to Angular",
		],
		color: "from-orange-500 to-red-500",
	},
	{
		company: {
			name: "Mobinets GmbH",
			url: "https://www.linkedin.com/company/mobinets/",
		},
		role: "Team Lead",
		period: "July 2013 – June 2015",
		duration: "2 Years",
		description:
			"Mobinets provides next-generation OSS (Operations Support Systems) software solutions designed to automate, consolidate, and optimize telecom network operations for global service providers.",
		projects: [],
		skills: ["Java", "Oracle (9i/10g)", "SQL", "JavaScript", "SVN", "GIT"],
		achievements: [
			"Leading a team of 3 developers",
			"Using Java for building OSS solutions for global telecom operators",
		],
		color: "from-green-500 to-emerald-500",
	},
	{
		company: {
			name: "Softnet",
		},
		role: "Team Lead",
		period: "March 2003 – June 2005, July 2007 – June 2013",
		duration: "8 Years",
		description:
			"Softnet is an IT and software consultancy specialised in large-scale enterprise applications, E-Government solutions and complex system integrations for the Syrian public and industrial sectors.",
		projects: [
			{
				text: "E-Banking Gateway — a core pillar of the national E-Government initiative",
				skills: ["Java", "Oracle", "J2EE"],
			},
			{
				text: "Digital Archive System — showcased at CEBIT in Germany",
				skills: ["Java", "Oracle", "JSP"],
			},
			{ text: "Water Billing System", skills: ["Java", "SVN", "GIT"] },
			{ text: "Electricity Billing System", skills: ["Java", "SVN", "GIT"] },
		],
		skills: [
			"JAVA",
			"Java Persisteence API",
			"Hibernetate ORM",
			"J2EE",
			"Swing",
			"Applet",
			"JSP",
			"JBoss",
			"Oracle (10g, 11G)",
			"MySQL",
			"JasperReports",
			"iReport Designer",
			"SVN",
			"CSV",
		],
		achievements: [
			"Leading the E-Banking Gateway project for the national E-Government initiative",
			"Directing the Digital Archive System, showcased at CEBIT in Germany",
			"Building first version of the billing system using Swing + Applet",
			"Migrating to web using JSF",
			"keep the tools updated",
		],
		color: "from-indigo-500 to-blue-500",
	},
];

/** Skills are typed by hand across entries, so match them case-insensitively. */
const skillKey = (skill: string) => skill.trim().toLowerCase();

type SkillUsage = {
	key: string;
	/** First spelling encountered, walking the timeline from the most recent role. */
	label: string;
	companies: string[];
};

const skillIndex = new Map<string, SkillUsage>();
for (const exp of experiences) {
	for (const skill of [
		...exp.skills,
		...exp.projects.flatMap((project) => project.skills),
	]) {
		const key = skillKey(skill);
		let usage = skillIndex.get(key);
		if (!usage) {
			usage = { key, label: skill, companies: [] };
			skillIndex.set(key, usage);
		}
		if (!usage.companies.includes(exp.company.name)) {
			usage.companies.push(exp.company.name);
		}
	}
}

/** Listed in the order they appear in the timeline data — most recent role first. */
const allSkills = [...skillIndex.values()];

/**
 * Buckets for the filter bar. Skills are listed by the spelling used above;
 * anything not listed here lands in "Other", so the bar never drops a skill.
 */
const skillGroups: Array<{ name: string; skills: string[] }> = [
	{ name: "AI", skills: ["Claude Code", "MCP", "Custom Agents"] },
	{
		name: "Frontend",
		skills: [
			"Angular",
			"React",
			"TanStack",
			"TypeScript",
			"Tailwind CSS",
			"DaisyUI",
			"JavaScript",
			"jQuery",
			"HTML",
			"CSS",
			"JSP",
			"Swing",
			"Applet",
		],
	},
	{ name: "Mobile", skills: ["Capacitorjs", "Ionic"] },
	{
		name: "Backend & API",
		skills: [
			"Node.js",
			"Express.js",
			"NestJS",
			"Payload CMS",
			"Java",
			"J2EE",
			"Java Persisteence API",
			"Hibernetate ORM",
			"JBoss",
			"GraphQL",
			"Strapi",
		],
	},
	{
		name: "Data",
		skills: [
			"PostgreSQL",
			"MongoDB",
			"MySQL",
			"Oracle",
			"Oracle (9i/10g)",
			"Oracle (10g, 11G)",
			"SQL",
			"CSV",
		],
	},
	{
		name: "DevOps & Cloud",
		skills: [
			"Docker",
			"Docker Compose",
			"Kubernetes",
			"Jenkins",
			"Terraform",
			"Azure",
			"Dokploy",
		],
	},
	{
		name: "Tooling",
		skills: [
			"Vite",
			"Figma",
			"Git",
			"SVN",
			"Bitbucket",
			"Jira",
			"Confluence",
			"JasperReports",
			"iReport Designer",
		],
	},
];

const OTHER_GROUP = "Other";

const groupByKey = new Map<string, string>();
for (const group of skillGroups) {
	for (const skill of group.skills) {
		groupByKey.set(skillKey(skill), group.name);
	}
}

const groupedSkills = [...skillGroups.map((group) => group.name), OTHER_GROUP]
	.map((name) => ({
		name,
		skills: allSkills.filter(
			(skill) => (groupByKey.get(skill.key) ?? OTHER_GROUP) === name,
		),
	}))
	.filter((group) => group.skills.length > 0);

/** How many skills a group shows before the "show all" toggle. */
const COLLAPSED_GROUP_SIZE = 6;

const hasCollapsedSkills = groupedSkills.some(
	(group) => group.skills.length > COLLAPSED_GROUP_SIZE,
);

const hasSkill = (skill: string, key: string) => skillKey(skill) === key;

const experienceUsesSkill = (exp: Experience, key: string) =>
	exp.skills.some((skill) => hasSkill(skill, key)) ||
	exp.projects.some((project) =>
		project.skills.some((skill) => hasSkill(skill, key)),
	);

export function Timeline() {
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
	const [showAllSkills, setShowAllSkills] = useState(false);

	const filterRef = useRef<HTMLDivElement>(null);
	const anchor = useRef<{ element: Element; top: number } | null>(null);

	/**
	 * Filtering adds or removes whole cards, so the page gets shorter or taller
	 * and the browser shifts (or clamps) the scroll position under the user.
	 * Remember where the clicked element sat in the viewport, then put it back.
	 */
	const rememberScrollAnchor = (element: Element | null) => {
		const target = element ?? filterRef.current;
		anchor.current = target
			? { element: target, top: target.getBoundingClientRect().top }
			: null;
	};

	useIsomorphicLayoutEffect(() => {
		const previous = anchor.current;
		anchor.current = null;
		if (!previous) return;

		// A chip inside a card that just got filtered out is gone — fall back to
		// the filter bar, which is above every card and never unmounts.
		const element = previous.element.isConnected
			? previous.element
			: filterRef.current;
		if (!element) return;

		const delta = element.getBoundingClientRect().top - previous.top;
		if (Math.abs(delta) > 1) window.scrollBy(0, delta);
	}, [selectedKeys, showAllSkills]);

	const selected = selectedKeys
		.map((key) => skillIndex.get(key))
		.filter((usage) => usage !== undefined);
	const isSelected = (key: string) => selectedKeys.includes(key);

	/** A role matches when it used any of the selected skills. */
	const visibleExperiences =
		selected.length === 0
			? experiences
			: experiences.filter((exp) =>
					selected.some((skill) => experienceUsesSkill(exp, skill.key)),
				);

	/** Collapsed groups still show whatever is currently selected. */
	const chipsFor = (group: (typeof groupedSkills)[number]) => {
		if (showAllSkills) return group.skills;
		const shown = group.skills.slice(0, COLLAPSED_GROUP_SIZE);
		return [
			...shown,
			...group.skills.filter(
				(skill) => !shown.includes(skill) && isSelected(skill.key),
			),
		];
	};

	const toggleSkill = (key: string) =>
		setSelectedKeys((current) =>
			current.includes(key)
				? current.filter((selectedKey) => selectedKey !== key)
				: [...current, key],
		);

	const toggleGroup = (keys: string[]) =>
		setSelectedKeys((current) =>
			keys.every((key) => current.includes(key))
				? current.filter((key) => !keys.includes(key))
				: [...current, ...keys.filter((key) => !current.includes(key))],
		);

	/** Which of the selected skills a project used — drives its highlight badges. */
	const matchedProjectSkills = (projectSkills: string[]) =>
		selected.filter((skill) =>
			projectSkills.some((projectSkill) => hasSkill(projectSkill, skill.key)),
		);

	return (
		<section
			id="timeline"
			className="py-20 bg-slate-900 overflow-hidden relative"
		>
			{/* Background 3D Grid Effect */}
			<div className="absolute inset-0 opacity-20">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `
              linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px)
            `,
						backgroundSize: "50px 50px",
						transform: "perspective(1000px) rotateX(60deg) scale(2)",
						transformOrigin: "center center",
					}}
				/>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 text-white">Career Journey</h2>
					<p className="text-slate-300 max-w-2xl mx-auto">
						23+ years of continuous learning and innovation across diverse
						technologies and industries
					</p>
				</motion.div>

				{/* Skill Filter */}
				<motion.div
					ref={filterRef}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto mb-12"
				>
					<div className="flex items-center justify-center gap-2 mb-4 text-slate-400 text-sm">
						<Filter className="w-4 h-4" />
						<span>Pick one or more technologies to see where I used them</span>
					</div>

					<div className="space-y-3">
						{groupedSkills.map((group) => {
							const groupKeys = group.skills.map((skill) => skill.key);
							const wholeGroupSelected = groupKeys.every((key) =>
								isSelected(key),
							);
							return (
								<div
									key={group.name}
									className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
								>
									<button
										type="button"
										onClick={(event) => {
											rememberScrollAnchor(event.currentTarget);
											toggleGroup(groupKeys);
										}}
										aria-pressed={wholeGroupSelected}
										title={
											wholeGroupSelected
												? `Remove all ${group.name} filters`
												: `Filter by everything in ${group.name}`
										}
										className={`sm:w-32 sm:text-right shrink-0 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
											wholeGroupSelected
												? "text-blue-400"
												: "text-slate-500 hover:text-white"
										}`}
									>
										{group.name}
									</button>

									<div className="flex flex-wrap gap-2 flex-1">
										{chipsFor(group).map((skill) => {
											const active = isSelected(skill.key);
											return (
												<motion.button
													key={skill.key}
													type="button"
													layout
													onClick={(event) => {
														rememberScrollAnchor(event.currentTarget);
														toggleSkill(skill.key);
													}}
													aria-pressed={active}
													whileHover={{ scale: 1.05, y: -2 }}
													whileTap={{ scale: 0.97 }}
													className={`px-3 py-1 rounded-full text-xs border transition-colors cursor-pointer ${
														active
															? "bg-blue-500 border-blue-400 text-white"
															: "bg-slate-800 border-slate-700 text-slate-300 hover:border-blue-400 hover:text-white"
													}`}
												>
													{skill.label}
													<span
														className={`ml-1.5 tabular-nums ${
															active ? "text-blue-100" : "text-slate-500"
														}`}
													>
														{skill.companies.length}
													</span>
												</motion.button>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>

					{hasCollapsedSkills && (
						<div className="flex justify-center mt-4">
							<button
								type="button"
								onClick={(event) => {
									rememberScrollAnchor(event.currentTarget);
									setShowAllSkills((current) => !current);
								}}
								className="px-3 py-1 rounded-full text-xs border border-dashed border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 transition-colors cursor-pointer flex items-center gap-1"
							>
								{showAllSkills
									? "Show less"
									: `Show all ${allSkills.length} technologies`}
								<ChevronDown
									className={`w-3 h-3 transition-transform ${
										showAllSkills ? "rotate-180" : ""
									}`}
								/>
							</button>
						</div>
					)}

					<AnimatePresence initial={false}>
						{selected.length > 0 && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								className="overflow-hidden"
							>
								<div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-slate-300">
									<span>
										<span className="text-white font-medium">
											{selected.map((skill) => skill.label).join(" / ")}
										</span>{" "}
										used at {visibleExperiences.length}{" "}
										{visibleExperiences.length === 1 ? "company" : "companies"}:{" "}
										<span className="text-blue-400">
											{visibleExperiences
												.map((exp) => exp.company.name)
												.join(", ")}
										</span>
									</span>

									<button
										type="button"
										onClick={(event) => {
											rememberScrollAnchor(event.currentTarget);
											setSelectedKeys([]);
										}}
										className="flex items-center gap-1 px-2 py-1 rounded-full border border-slate-700 text-slate-400 text-xs hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
									>
										<X className="w-3 h-3" />
										Clear {selected.length > 1 ? "filters" : "filter"}
									</button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>

				{/* Our own scroll restore handles filter changes — leaving the
				    browser's scroll anchoring on as well would fight it. */}
				<div
					className="max-w-4xl mx-auto relative"
					style={{ overflowAnchor: "none" }}
				>
					{/* Timeline Rail — one straight line, cards read top to bottom. */}
					<div
						className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-slate-700"
						aria-hidden="true"
					/>

					<div className="space-y-10">
						<AnimatePresence mode="popLayout">
							{visibleExperiences.map((exp) => (
								<motion.div
									key={exp.company.name}
									layout
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.98 }}
									viewport={{ once: true, margin: "-80px" }}
									transition={{ duration: 0.4 }}
									className="relative pl-8 sm:pl-12"
								>
									{/* Timeline Dot — aligned with the card header. */}
									<div
										className={`absolute left-0 top-8 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${exp.color} border-[3px] border-slate-900 ring-1 ring-slate-700`}
										aria-hidden="true"
									/>

									{/* Card */}
									<div className="relative group bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700 hover:border-slate-500 transition-colors duration-300">
										{/* Gradient Accent */}
										<div
											className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} rounded-t-2xl`}
										/>

										{/* Header */}
										<div className="mb-6">
											<div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
												<div>
													<h3 className="text-white mb-1">
														{exp.company.url ? (
															<a
																href={exp.company.url}
																target="_blank"
																rel="noopener noreferrer"
																className="hover:text-blue-400 transition-colors"
															>
																{exp.company.name}
															</a>
														) : (
															exp.company.name
														)}
													</h3>
													<p className="text-slate-300 font-medium">
														{exp.role}
													</p>
												</div>
												<div className="flex sm:flex-col sm:items-end items-center gap-2 sm:gap-1 shrink-0 text-sm text-slate-400">
													<span className="flex items-center gap-2">
														<Calendar className="w-4 h-4" />
														{exp.period}
													</span>
													<span className="text-slate-500 text-xs">
														{exp.duration}
													</span>
												</div>
											</div>
											<p className="text-slate-400 text-sm">
												{exp.description}
											</p>
										</div>

										{/* Projects */}
										{exp.projects.length > 0 && (
											<div className="mb-6">
												<div className="flex items-center gap-2 mb-3">
													<Briefcase className="w-4 h-4 text-blue-400" />
													<h4 className="text-white">Key Projects</h4>
												</div>
												<ul className="space-y-2">
													{exp.projects.map((project) => {
														const matches = matchedProjectSkills(
															project.skills,
														);
														return (
															<li
																key={`${project.text}`}
																className={`text-slate-300 text-sm flex items-start gap-2 transition-opacity ${
																	selected.length > 0 && matches.length === 0
																		? "opacity-40"
																		: "opacity-100"
																}`}
															>
																<span className="text-blue-400">▹</span>
																<span className="[&_a]:text-blue-400 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-blue-400/30 hover:[&_a]:decoration-blue-400 hover:[&_a]:text-blue-300 transition-all [&_a:after]:content-['_↗'] [&_a:after]:ml-0.5 [&_a:after]:text-xs [&_a:after]:opacity-70">
																	{project.url ? (
																		<a
																			href={project.url}
																			target="_blank"
																			rel="noopener noreferrer"
																		>
																			{project.text}
																		</a>
																	) : (
																		project.text
																	)}
																	{matches.map((skill) => (
																		<span
																			key={skill.key}
																			className="ml-2 align-middle px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] whitespace-nowrap"
																		>
																			{skill.label}
																		</span>
																	))}
																</span>
															</li>
														);
													})}
												</ul>
											</div>
										)}

										{/* Skills */}
										<div className="mb-6">
											<h4 className="text-white mb-3 text-sm">
												Technologies Used
											</h4>
											<div className="flex flex-wrap gap-2">
												{exp.skills.map((skill) => {
													const active = isSelected(skillKey(skill));
													return (
														<motion.button
															key={skill}
															type="button"
															onClick={(event) => {
																rememberScrollAnchor(event.currentTarget);
																toggleSkill(skillKey(skill));
															}}
															aria-pressed={active}
															title={
																active
																	? `Remove the ${skill} filter`
																	: `Add ${skill} to the filter`
															}
															whileHover={{ scale: 1.1, y: -2 }}
															whileTap={{ scale: 0.97 }}
															className={`px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-20 text-white rounded-full text-xs border cursor-pointer transition-all ${
																active
																	? "border-white ring-2 ring-white/60"
																	: `border-slate-600 ${selected.length > 0 ? "opacity-50 hover:opacity-100" : ""}`
															}`}
														>
															{skill}
														</motion.button>
													);
												})}
											</div>
										</div>

										{/* Achievements */}
										<div>
											<div className="flex items-center gap-2 mb-3">
												<Award className="w-4 h-4 text-yellow-400" />
												<h4 className="text-white text-sm">Key Achievements</h4>
											</div>
											<ul className="space-y-2">
												{exp.achievements.map((achievement) => (
													<li
														key={achievement}
														className="text-slate-400 text-sm flex items-start gap-2"
													>
														<span className="text-yellow-400 mt-1">★</span>
														<span>{achievement}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>

				{/* Summary Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
				>
					{[
						{ label: "Companies", value: "5+" },
						{ label: "Major Projects", value: "50+" },
						{ label: "Technologies", value: "40+" },
						{ label: "Years of Code", value: "23+" },
					].map((stat) => (
						<motion.div
							key={stat.label}
							whileHover={{ scale: 1.05, rotateY: 5 }}
							className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700"
							style={{ transformStyle: "preserve-3d" }}
						>
							<div className="text-blue-400 mb-2 text-3xl font-bold tabular-nums">
								{stat.value}
							</div>
							<div className="text-slate-400 text-sm">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
