import {
	Code2,
	Database,
	Globe,
	Layers,
	Server,
	Smartphone,
} from "lucide-react";
import { motion } from "motion/react";

const skillCategories = [
	{
		title: "Frontend Development",
		icon: Globe,
		skills: [
			"React",
			"Angular",
			"TypeScript",
			"Tailwind CSS",
			"Daisyui",
			"GraphQL",
		],
		color: "blue",
	},
	{
		title: "Backend Development",
		icon: Server,
		skills: ["Node.js", ".NET", "Express", "Python", "Java", "C#"],
		color: "purple",
	},
	{
		title: "Database & Storage",
		icon: Database,
		skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
		color: "green",
	},
	{
		title: "DevOps & Cloud",
		icon: Layers,
		skills: [
			"AWS",
			"Docker",
			"Docker Compose",
			"Kubernetes",
			"CI/CD",
			"Terraform",
			"GitHub Actions",
		],
		color: "orange",
	},
	{
		title: "Mobile Development",
		icon: Smartphone,
		skills: ["Capacitorjs", "Progressive Web Apps"],
		color: "pink",
	},
	{
		title: "Architecture & Design",
		icon: Code2,
		skills: [
			"Microservices",
			"System Design",
			"DDD",
			"SOLID",
			"Design Patterns",
			"API Design",
		],
		color: "cyan",
	},
];

const colorClasses = {
	blue: "from-blue-500 to-blue-600",
	purple: "from-purple-500 to-purple-600",
	green: "from-green-500 to-green-600",
	orange: "from-orange-500 to-orange-600",
	pink: "from-pink-500 to-pink-600",
	cyan: "from-cyan-500 to-cyan-600",
};

export function Skills() {
	return (
		<section id="skills" className="py-20 bg-slate-50">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 text-slate-900">Technical Expertise</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						Two decades of hands-on experience across the entire technology
						stack, delivering enterprise-grade solutions and leading technical
						innovation.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
					{skillCategories.map((category, index) => {
						const Icon = category.icon;
						return (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								whileHover={{ y: -5 }}
								className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
							>
								<div
									className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[category.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}
								>
									<Icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="mb-4 text-slate-900">{category.title}</h3>
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill) => (
										<span
											key={skill}
											className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
										>
											{skill}
										</span>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="mt-16 text-center"
				>
					<div className="inline-block bg-white rounded-xl p-8 shadow-lg">
						<div className="grid grid-cols-3 gap-8">
							<div>
								<div className="text-blue-600 mb-2">23+</div>
								<div className="text-slate-600">Years Experience</div>
							</div>
							<div>
								<div className="text-blue-600 mb-2">100+</div>
								<div className="text-slate-600">Projects Delivered</div>
							</div>
							<div>
								<div className="text-blue-600 mb-2">50+</div>
								<div className="text-slate-600">Technologies Mastered</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
