import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { WorkingStyle } from "@/components/WorkingStyle";

export const Route = createFileRoute("/_pathlessLayout/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
			>
				Skip to content
			</a>
			<Navigation />
			<main id="main">
				<Hero />
				<Skills />
				<WorkingStyle />
				<Timeline />
				<Projects />
				<Education />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
