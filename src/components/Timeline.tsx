import { Award, Briefcase, Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
			name: "Akelius Technology",
			url: "https://www.linkedin.com/company/akelius-technology",
		},
		role: "Senior Full Stack & Mobile Architect",
		period: "April 2019 - Present",
		duration: "7+ years",
		description: "Building in-house enterprise-scale solutions",
		projects: [
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
			"Angular",
			"React",
			"Strapi",
			"TypeScript",
			"Docker",
			"Docker Compose",
			"Kubernetes",
			"Jenkins",
			"Git",
			"Node.js",
			"Azure",
			"PostgreSQL",
			"MongoDB",
			"GraphQL",
		],
		achievements: [
			"Move from paid service to open source",
			"Improve user experience in all Apps",
			"Part of Frontend Monthly meeting to guide Akelius Frontend libraries",
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
		description: "Building Advertising Bidding platform using",
		projects: [],
		skills: ["React"],
		achievements: ["Building Advertising Bidding platform using"],
		color: "from-purple-500 to-pink-500",
	},
	{
		company: {
			name: "Ladenzeile",
			url: "https://www.linkedin.com/company/ladenzeile-gmbh/",
		},
		role: "Senior Frontend Developer",
		period: "June 2015 - September 2019",
		duration: "4 Years",
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
		skills: ["Java", "Oracle (11g)", "SVN", "GIT", "SVN"],
		achievements: ["Manage team.", "Using Java for building OSS"],
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
			"Building a billing system for a water companies and electricity companies.",
		projects: [
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
			"Building first version of the billing system using Swing + Applet",
			"Migrating to web using JSF",
			"keep the tools updated",
		],
		color: "from-indigo-500 to-blue-500",
	},
];

export function Timeline() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

	return (
		<section
			id="timeline"
			ref={containerRef}
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

			<motion.div
				style={{ opacity }}
				className="container mx-auto px-6 relative z-10"
			>
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

				<div className="max-w-6xl mx-auto relative">
					{/* Central Timeline Line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden lg:block" />

					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.company}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ delay: index * 0.2, duration: 0.6 }}
								className={`relative lg:pr-1/2 lg:pl-0`}
							>
								{/* Timeline Dot */}
								<div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 hidden lg:block z-20">
									<motion.div
										className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-4 border-slate-900`}
										whileHover={{ scale: 1.5 }}
										transition={{ type: "spring", stiffness: 300 }}
									/>
								</div>

								{/* 3D Card */}
								<motion.div
									className="relative group perspective-1000"
									whileHover={{ scale: 1.02 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<div
										className={`bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700 transition-all duration-300 ${
											index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
										}`}
										style={{
											transformStyle: "preserve-3d",
											transform: "translateZ(0)",
										}}
									>
										{/* Gradient Accent */}
										<div
											className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} rounded-t-2xl`}
										/>

										{/* Header */}
										<div className="mb-6">
											<div className="mb-4">
												<h3 className="text-white mb-1">{exp.company.name}</h3>
												<p className="text-slate-300 font-medium">{exp.role}</p>
												<div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
													<Calendar className="w-4 h-4" />
													<span>{exp.period}</span>
													<span className="text-slate-600">•</span>
													<span>{exp.duration}</span>
												</div>
											</div>
											<p className="text-slate-400 text-sm">
												{exp.description}
											</p>
										</div>

										{/* Projects */}
										<div className="mb-6">
											<div className="flex items-center gap-2 mb-3">
												<Briefcase className="w-4 h-4 text-blue-400" />
												<h4 className="text-white">Key Projects</h4>
											</div>
											<ul className="space-y-2">
												{exp.projects.map((project) => (
													<li
														key={`${project.text}`}
														className="text-slate-300 text-sm flex items-start gap-2"
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
														</span>
													</li>
												))}
											</ul>
										</div>

										{/* Skills */}
										<div className="mb-6">
											<h4 className="text-white mb-3 text-sm">
												Technologies Used
											</h4>
											<div className="flex flex-wrap gap-2">
												{exp.skills.map((skill) => (
													<motion.span
														key={skill}
														whileHover={{ scale: 1.1, y: -2 }}
														className={`px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-20 text-white rounded-full text-xs border border-slate-600`}
														style={{ transform: "translateZ(10px)" }}
													>
														{skill}
													</motion.span>
												))}
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

										{/* 3D Hover Effect Overlay */}
										<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
									</div>
								</motion.div>
							</motion.div>
						))}
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
							<div className="text-blue-400 mb-2">{stat.value}</div>
							<div className="text-slate-400 text-sm">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
