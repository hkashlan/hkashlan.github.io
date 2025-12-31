import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ label: "Home", href: "#" },
		{ label: "Skills", href: "#skills" },
		{ label: "Timeline", href: "#timeline" },
		{ label: "Projects", href: "#projects" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					<motion.a
						href="/#"
						className="text-white z-50"
						whileHover={{ scale: 1.05 }}
					>
						{"<Developer />"}
					</motion.a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="text-slate-300 hover:text-white transition-colors"
							>
								{item.label}
							</a>
						))}
						<a
							href="#contact"
							className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							Hire Me
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className="md:hidden text-white z-50"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? <X /> : <Menu />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="md:hidden bg-slate-900 border-t border-slate-800"
				>
					<div className="container mx-auto px-6 py-4 flex flex-col gap-4">
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="text-slate-300 hover:text-white transition-colors py-2"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.label}
							</a>
						))}
						<button
							type="button"
							className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
							onClick={() => {
								setIsMobileMenuOpen(false);
								window.location.hash = "contact";
							}}
						>
							Hire Me
						</button>
					</div>
				</motion.div>
			)}
		</motion.nav>
	);
}
