import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { siteName } from "@/config";

const hireHref = "#contact";

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
		{ label: "Home", href: "#top" },
		{ label: "Skills", href: "#skills" },
		{ label: "Timeline", href: "#timeline" },
		{ label: "How I Work", href: "#working-style" },
		{ label: "Projects", href: "#projects" },
		{ label: "Education", href: "#education" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
			aria-label="Main"
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-16">
					<motion.a
						href="#top"
						aria-label={`${siteName} — back to top`}
						className="text-white z-50"
						whileHover={{ scale: 1.05 }}
					>
						{"<Senior Full Stack Developer />"}
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
						aria-expanded={isMobileMenuOpen}
						aria-controls="mobile-menu"
						aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? <X /> : <Menu />}
					</button>
				</div>
			</div>

			{/* Mobile Menu — AnimatePresence is what makes the `exit` prop run. */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						id="mobile-menu"
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
							<a
								href={hireHref}
								className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Hire Me
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
