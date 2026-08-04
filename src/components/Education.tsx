import {
	GraduationCap,
	Languages as LanguagesIcon,
	MapPin,
} from "lucide-react";
import { motion } from "motion/react";
import { education, languages, siteLocation } from "@/config";

export function Education() {
	return (
		<section id="education" className="py-20 bg-slate-50">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 text-slate-900">Education & Languages</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						Formal grounding in software engineering and information systems,
						and the languages I work in day to day.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{/* Degrees */}
					<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
						{education.map((degree, index) => (
							<motion.div
								key={degree.institution}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								whileHover={{ y: -5 }}
								className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
							>
								<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600" />
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
									<GraduationCap
										className="w-6 h-6 text-white"
										aria-hidden="true"
									/>
								</div>
								<h3 className="text-slate-900 mb-1">{degree.field}</h3>
								<p className="text-blue-600 text-sm font-medium mb-3">
									{degree.degree}
								</p>
								<p className="text-slate-700 text-sm">{degree.institution}</p>
								<p className="text-slate-500 text-sm">{degree.place}</p>
								<p className="text-slate-500 text-sm mt-2">{degree.period}</p>
								{degree.note && (
									<p className="mt-3 inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs">
										{degree.note}
									</p>
								)}
							</motion.div>
						))}
					</div>

					{/* Languages + location */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="relative bg-white rounded-xl p-6 shadow-lg overflow-hidden"
					>
						<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600" />
						<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
							<LanguagesIcon
								className="w-6 h-6 text-white"
								aria-hidden="true"
							/>
						</div>
						<h3 className="text-slate-900 mb-4">Languages</h3>

						<ul className="space-y-4">
							{languages.map((language) => (
								<li key={language.name}>
									<div className="flex items-baseline justify-between mb-1">
										<span className="text-slate-800 text-sm font-medium">
											{language.name}
										</span>
										<span className="text-slate-500 text-xs">
											{language.level} ({language.cefr})
										</span>
									</div>
									{/* Decorative — the text above already states the level. */}
									<div
										className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden"
										aria-hidden="true"
									>
										<motion.div
											className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
											initial={{ width: 0 }}
											whileInView={{ width: `${language.proficiency}%` }}
											viewport={{ once: true }}
											transition={{ duration: 0.8, ease: "easeOut" }}
										/>
									</div>
								</li>
							))}
						</ul>

						<div className="mt-6 pt-6 border-t border-slate-200 flex items-start gap-2">
							<MapPin
								className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
								aria-hidden="true"
							/>
							<div className="text-sm">
								<div className="text-slate-800">
									{siteLocation.city}, {siteLocation.country}
								</div>
								<div className="text-slate-500">{siteLocation.region}</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
