import {
	CheckCircle2,
	Code2,
	Lightbulb,
	Linkedin,
	MessageSquare,
	Sparkles,
	Target,
	Users,
	Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { linkedInInfo } from "@/config";

const qualities = [
	{
		icon: Code2,
		title: "Deep Technical Understanding",
		description:
			"Goes beyond surface-level implementation to truly understand how code works and impacts the entire system",
		color: "from-blue-500 to-cyan-500",
		bgColor: "bg-blue-500/10",
	},
	{
		icon: Lightbulb,
		title: "Solution-Oriented Thinker",
		description:
			"Solves complex problems with ease and consistently suggests multiple alternatives with clear explanations",
		color: "from-purple-500 to-pink-500",
		bgColor: "bg-purple-500/10",
	},
	{
		icon: Target,
		title: "Focus on What Matters",
		description:
			"Builds features that truly matter, not just following instructions but improving the application strategically",
		color: "from-orange-500 to-red-500",
		bgColor: "bg-orange-500/10",
	},
	{
		icon: Users,
		title: "Extremely Collaborative",
		description:
			"Works seamlessly with designers and team members, fostering a productive and supportive environment",
		color: "from-green-500 to-emerald-500",
		bgColor: "bg-green-500/10",
	},
	{
		icon: Zap,
		title: "Quick & Responsive",
		description:
			"Answers quickly and solves issues without delay, ensuring the team never gets blocked",
		color: "from-yellow-500 to-orange-500",
		bgColor: "bg-yellow-500/10",
	},
	{
		icon: CheckCircle2,
		title: "Reliable Partner",
		description:
			"Can be trusted with any task to deliver smart, well-thought-out solutions that strengthen the product",
		color: "from-indigo-500 to-blue-500",
		bgColor: "bg-indigo-500/10",
	},
];

export function WorkingStyle() {
	return (
		<section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
			{/* Decorative Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
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
					className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
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
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 text-slate-900">How I Work</h2>
					<p className="text-slate-600 max-w-2xl mx-auto mb-8">
						What colleagues and collaborators say about working with me
					</p>
					<motion.a
						href={`${linkedInInfo.url}details/recommendations/`}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full text-sm font-semibold hover:bg-[#0071ad] transition-all shadow-md hover:shadow-lg"
					>
						<Linkedin className="w-5 h-5" />
						View LinkedIn Recommendations
					</motion.a>
				</motion.div>

				{/* Main Testimonial Card */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="max-w-5xl mx-auto mb-20"
				>
					<motion.div
						whileHover={{ scale: 1.01 }}
						className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200"
						style={{ transformStyle: "preserve-3d" }}
					>
						{/* Decorative Quote Mark */}
						<div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
							<MessageSquare className="w-8 h-8 text-white" />
						</div>

						{/* Testimonial Text */}
						<div className="relative">
							<div className="mb-6">
								<p className="text-slate-700 leading-relaxed mb-4">
									"I worked closely with him as a{" "}
									<span className="text-blue-600">UX/UI designer</span>, and I
									quickly saw how deeply he{" "}
									<span className="text-blue-600">understands code</span>. He{" "}
									<span className="text-purple-600">
										solves complex problems with ease
									</span>{" "}
									and always looks for better ways to{" "}
									<span className="text-purple-600">
										improve the application
									</span>
									, not just follow instructions.
								</p>
								<p className="text-slate-700 leading-relaxed mb-4">
									He consistently{" "}
									<span className="text-orange-600">
										suggests several alternatives
									</span>
									, explains his ideas clearly, and focuses on building{" "}
									<span className="text-orange-600">
										features that truly matter
									</span>
									.
								</p>
								<p className="text-slate-700 leading-relaxed mb-4">
									He is{" "}
									<span className="text-green-600">
										extremely collaborative
									</span>
									. He <span className="text-green-600">answers quickly</span>,
									supports the team whenever needed, and solves issues without
									delay.
								</p>
								<p className="text-slate-700 leading-relaxed">
									You can{" "}
									<span className="text-indigo-600">
										trust him with any task
									</span>
									, and you can expect a smart,{" "}
									<span className="text-indigo-600">reliable partner</span> who
									genuinely strengthens the product."
								</p>
							</div>

							<div className="flex items-center gap-4 pt-6 border-t border-slate-200">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
								<div className="flex-1">
									<div className="text-slate-900">UX/UI Designer</div>
									<div className="text-slate-500 text-sm">
										Design Collaboration Partner
									</div>
								</div>
								<div className="hidden md:block">
									<motion.a
										href={`${linkedInInfo.url}details/recommendations/`}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex items-center gap-2 px-4 py-2 bg-[#0077b5]/10 text-[#0077b5] rounded-full text-sm font-medium hover:bg-[#0077b5]/20 transition-colors"
									>
										<Linkedin className="w-4 h-4" />
										LinkedIn
									</motion.a>
								</div>
							</div>
						</div>

						{/* 3D Shadow Effect */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 rounded-3xl pointer-events-none" />
					</motion.div>
				</motion.div>

				{/* Quality Cards */}
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<h3 className="text-slate-900 mb-2">Core Strengths</h3>
						<p className="text-slate-600">
							Key qualities that define my approach to development and
							collaboration
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{qualities.map((quality, index) => {
							const Icon = quality.icon;
							return (
								<motion.div
									key={quality.title}
									initial={{ opacity: 0, y: 30, rotateX: -10 }}
									whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1, duration: 0.6 }}
									whileHover={{
										y: -10,
										rotateY: 5,
										transition: { type: "spring", stiffness: 300 },
									}}
									className="group relative"
									style={{ transformStyle: "preserve-3d" }}
								>
									<div
										className={`relative bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl transition-shadow ${quality.bgColor} bg-opacity-50`}
									>
										{/* Gradient Accent Bar */}
										<div
											className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${quality.color} rounded-t-2xl`}
										/>

										{/* Icon */}
										<div
											className={`w-14 h-14 rounded-xl bg-gradient-to-br ${quality.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
											style={{ transform: "translateZ(20px)" }}
										>
											<Icon className="w-7 h-7 text-white" />
										</div>

										{/* Content */}
										<h4 className="text-slate-900 mb-2">{quality.title}</h4>
										<p
											className="text-slate-600 text-sm leading-relaxed"
											dangerouslySetInnerHTML={{ __html: quality.description }}
										/>

										{/* Hover Glow Effect */}
										<div
											className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`}
										/>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="text-center mt-16"
				>
					<div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
						<h3 className="text-slate-900 mb-3">Ready to Collaborate?</h3>
						<p className="text-slate-600 mb-6 max-w-md">
							Looking for a developer who brings technical excellence,
							collaborative spirit, and genuine product improvement to your team
						</p>
						<a
							href="#contact"
							className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
						>
							Let's Work Together
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
