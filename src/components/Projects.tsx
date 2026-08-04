import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type Project = {
	title: string;
	description: string;
	/** Optional — cards without a screenshot fall back to a gradient banner. */
	image?: string;
	/**
	 * Full-page screenshots are taller than the banner, and `object-cover`
	 * centres them — which lands mid-page. Anchor those to the top instead.
	 */
	imagePosition?: "center" | "top";
	/** Two-tone gradient used for the fallback banner and its initials. */
	accent?: string;
	tags: string[];
	githubUrl?: string;
	liveUrl?: string;
};

const projects: Project[] = [
	{
		title: "MyClinic",
		description:
			"A clinic management platform for practices across Iraq, Syria and the wider region — patient files, appointments, prescriptions and daily accounting in one secure system, with a public marketing site and a full management back office. Built Arabic-first, end to end, with an AI-assisted workflow: Claude Code, MCP servers and custom agents drove a large share of the implementation.",
		image: "/myclinic.jpg",
		imagePosition: "top",
		accent: "from-violet-500 to-fuchsia-600",
		tags: [
			"AI Integrated",
			"Claude Code",
			"MCP",
			"TanStack Query/Router",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
		],
		liveUrl: "https://myclinic-sy.com/en",
	},
	{
		title: "MyClinic Management",
		description:
			"The back office behind MyClinic: a multi-tenant workspace that pairs the clinical modules — patients, appointments, visits, billing, providers — with a full double-entry accounting ledger. Chart of accounts, journal entries, fiscal periods, trial balance, P&L and balance sheet, with multi-currency balances and a bilingual Arabic/English UI on a dashboard each practice lays out itself.",
		image: "/myclinic-management.jpg",
		imagePosition: "top",
		accent: "from-sky-500 to-blue-600",
		tags: [
			"AI Integrated",
			"Claude Code",
			"Double-Entry Accounting",
			"Multi-Tenant",
			"i18n (AR/EN)",
			"TanStack Query/Router",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
		],
		liveUrl: "https://management.myclinic-sy.com/",
	},
	{
		title: "Akelius My Day",
		description:
			"The essential tool for property managers and maintenance teams. Efficiently conduct inspections, document conditions with photos, and manage work orders in one organized interface.",
		image: "/akelius-my-day.png",
		accent: "from-blue-500 to-cyan-500",
		tags: ["Angular", "TypeScript", "Capacitorjs", "Capgo"],
		liveUrl:
			"https://play.google.com/store/apps/details?id=com.akelius.myday.prod",
	},
	{
		title: "AltitudeVision",
		description:
			"A product site for an AI voice-agent service that answers tenant calls around the clock for German property managers. Bilingual marketing pages backed by a Payload CMS editorial workflow and a NestJS API, so content authors ship without a developer in the loop.",
		image: "/altitudevision.jpg",
		imagePosition: "top",
		accent: "from-indigo-500 to-violet-600",
		tags: [
			"AI Voice Agents",
			"TanStack Query/Router",
			"React",
			"TypeScript",
			"NestJS",
			"Payload CMS",
			"DaisyUI",
			"Tailwind CSS",
		],
		liveUrl: "https://hkashlan.github.io/altitudevision/",
	},
	{
		title: "Hadi Kashlan Profile",
		description:
			"This is my personal website built with Tanstack and DaisyUI. It features a modern and responsive design, with a focus on accessibility and performance.",
		image: "/hadi-kashlan-profile.png",
		accent: "from-orange-500 to-red-500",
		tags: [
			"Tanstack",
			"React",
			"DaisyUI",
			"TypeScript",
			"Tailwind CSS",
			"Vite",
			"Figma",
		],
		githubUrl: "https://github.com/hkashlan/hkashlan.github.io/",
		liveUrl: "https://hkashlan.github.io/",
	},
];

/** "Akelius My Day" -> "AM" — used on the no-screenshot banner. */
const initialsOf = (title: string) =>
	title
		.split(/\s+/)
		.slice(0, 2)
		.map((word) => word[0])
		.join("");

/**
 * Banner is 8:5 — the aspect the site screenshots are captured at, so they
 * show whole rather than cropped. A missing or broken image degrades to the
 * project's gradient rather than a broken-image icon.
 */
function ProjectBanner({ project }: { project: Project }) {
	const [failed, setFailed] = useState(false);
	const accent = project.accent ?? "from-blue-500 to-purple-600";
	const showImage = project.image && !failed;

	return (
		<div className="relative aspect-[8/5] overflow-hidden bg-slate-100">
			{showImage ? (
				<img
					src={project.image}
					alt={`Screenshot of ${project.title}`}
					loading="lazy"
					decoding="async"
					onError={() => setFailed(true)}
					className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
						project.imagePosition === "top" ? "object-top" : "object-center"
					}`}
				/>
			) : (
				<div
					className={`w-full h-full bg-gradient-to-br ${accent} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
					aria-hidden="true"
				>
					<span className="text-white/90 text-5xl font-bold tracking-tight">
						{initialsOf(project.title)}
					</span>
				</div>
			)}
			<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
		</div>
	);
}

export function Projects() {
	return (
		<section id="projects" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 text-slate-900">Featured Projects</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						A selection of enterprise-grade and independently shipped projects —
						from AI-assisted product builds to mobile apps used daily by
						property teams.
					</p>
				</motion.div>

				{/* With only a couple of projects a 3-column grid leaves a dead
				    column, so narrow the container until there are enough cards. */}
				<div
					className={`grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto ${
						projects.length > 2 ? "lg:grid-cols-3 max-w-7xl" : "max-w-4xl"
					}`}
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col"
						>
							<ProjectBanner project={project} />

							<div className="p-6 flex flex-col flex-1">
								<h3 className="mb-2 text-slate-900">{project.title}</h3>
								<p className="text-slate-600 mb-4 text-sm leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex flex-wrap gap-3 mt-auto pt-1">
									{project.githubUrl && project.githubUrl !== "#" && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`Source code for ${project.title} (opens in a new tab)`}
											className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
										>
											<Github className="w-4 h-4" />
											<span>Code</span>
										</a>
									)}
									{project.liveUrl && project.liveUrl !== "#" && (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`Live version of ${project.title} (opens in a new tab)`}
											className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
										>
											<ExternalLink className="w-4 h-4" />
											<span>Live Demo</span>
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
