import { Heart } from "lucide-react";
import { siteName } from "@/config";

export function Footer() {
	return (
		<footer className="bg-slate-950 text-slate-400 py-8">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<span>
							© {new Date().getFullYear()} {siteName}
						</span>
					</div>

					<div className="flex items-center gap-2">
						<span>Built with</span>
						<Heart
							className="w-4 h-4 text-red-500 fill-red-500"
							aria-hidden="true"
						/>
						<span>using TanStack Start, React & Tailwind CSS</span>
					</div>

					<div className="text-sm">
						<span>23+ Years of Excellence</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
