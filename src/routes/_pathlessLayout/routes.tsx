import { createFileRoute } from "@tanstack/react-router";
import { Contact, Navigation } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { WorkingStyle } from "@/components/WorkingStyle";

export const Route = createFileRoute("/_pathlessLayout/routes")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen">
			<Navigation />
			<Hero />
			<Skills />
			<WorkingStyle />
			<Timeline />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
