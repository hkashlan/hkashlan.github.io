import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import {
	emailInfo,
	githubInfo,
	linkedInInfo,
	siteLocation,
	siteName,
	siteRole,
} from "@/config";

/** Staggers the CSS `.rise` / `.pop` entrance animations. */
const delay = (seconds: string) =>
	({ "--delay": seconds }) as React.CSSProperties;

export function Hero() {
	return (
		<section
			id="top"
			className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.5, 0.3, 0.5],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<div>
						<div className="pop mb-6 inline-block">
							<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
								<img
									src="/hadi-kashlan.png"
									alt="Portrait of Hadi Kashlan"
									width={128}
									height={128}
									fetchPriority="high"
									decoding="async"
									className="w-full h-full rounded-full object-cover"
								/>
							</div>
						</div>

						<h1 className="rise mb-3 text-white" style={delay("0.2s")}>
							{siteName}
						</h1>

						<p
							className="rise mb-6 text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
							style={delay("0.3s")}
						>
							{siteRole}
						</p>

						<p
							className="rise text-slate-300 mb-6 max-w-2xl mx-auto text-lg"
							style={delay("0.4s")}
						>
							With over{" "}
							<span className="text-blue-400 font-semibold">
								23 years of expertise
							</span>
							, I architect and deliver scalable, high-performance solutions.
							Specializing in enterprise-grade web systems, seamless{" "}
							<span className="text-purple-400 font-semibold">
								hybrid mobile experiences
							</span>{" "}
							and{" "}
							<span className="text-fuchsia-400 font-semibold">
								AI-agentic development workflows
							</span>
							.
						</p>

						<div
							className="rise flex flex-wrap gap-3 justify-center mb-8 text-sm"
							style={delay("0.45s")}
						>
							<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300">
								<MapPin className="w-4 h-4 text-blue-400" aria-hidden="true" />
								{siteLocation.label}
							</span>
							<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-300">
								<span
									className="w-2 h-2 rounded-full bg-green-400"
									aria-hidden="true"
								/>
								Open to senior & architect roles
							</span>
						</div>

						<div
							className="rise flex gap-4 justify-center mb-12"
							style={delay("0.5s")}
						>
							<a
								href="#contact"
								className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
							>
								Get In Touch
							</a>
							<a
								href="#projects"
								className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
							>
								View Projects
							</a>
						</div>

						<div
							className="rise flex gap-6 justify-center"
							style={delay("0.6s")}
						>
							<a
								href={linkedInInfo.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Hadi Kashlan on LinkedIn (opens in a new tab)"
								className="text-slate-400 hover:text-blue-400 transition-colors"
							>
								<Linkedin className="w-6 h-6" aria-hidden="true" />
							</a>
							<a
								href={githubInfo.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Hadi Kashlan on GitHub (opens in a new tab)"
								className="text-slate-400 hover:text-blue-400 transition-colors"
							>
								<Github className="w-6 h-6" aria-hidden="true" />
							</a>

							<a
								href={emailInfo.url}
								aria-label="Email Hadi Kashlan"
								className="text-slate-400 hover:text-blue-400 transition-colors"
							>
								<Mail className="w-6 h-6" aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
				aria-hidden="true"
			>
				<ArrowDown className="w-6 h-6 text-slate-400" />
			</motion.div>
		</section>
	);
}
