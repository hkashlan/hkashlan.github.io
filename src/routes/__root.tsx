import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { MotionConfig } from "motion/react";
import {
	education,
	languages,
	siteDescription,
	siteLocation,
	siteName,
	siteRole,
	siteUrl,
} from "../config";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

const title = `${siteName} | ${siteRole}`;
const socialImage = `${siteUrl}hadi-kashlan.png`;

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: siteName,
	url: siteUrl,
	image: socialImage,
	jobTitle: siteRole,
	description: siteDescription,
	email: "mailto:hkashlan@gmail.com",
	sameAs: [
		"https://www.linkedin.com/in/hadi-kashlan/",
		"https://github.com/hkashlan",
	],
	address: {
		"@type": "PostalAddress",
		addressLocality: siteLocation.city,
		addressRegion: siteLocation.region,
		addressCountry: siteLocation.countryCode,
	},
	worksFor: {
		"@type": "Organization",
		name: "Akelius",
		url: "https://akelius.com/",
	},
	alumniOf: education.map((degree) => ({
		"@type": "CollegeOrUniversity",
		name: degree.institution,
	})),
	hasCredential: education.map((degree) => ({
		"@type": "EducationalOccupationalCredential",
		credentialCategory: degree.degree,
		educationalLevel: degree.degree,
		name: `${degree.degree} in ${degree.field}`,
		recognizedBy: { "@type": "CollegeOrUniversity", name: degree.institution },
	})),
	knowsLanguage: languages.map((language) => ({
		"@type": "Language",
		name: language.name,
	})),
	knowsAbout: [
		"Software Architecture",
		"Full Stack Development",
		"AI-Assisted Development",
		"Agentic Workflows",
		"Model Context Protocol (MCP)",
		"Angular",
		"React",
		"TanStack",
		"TypeScript",
		"Node.js",
		"Java",
		"Strapi CMS",
		"Kubernetes",
		"Hybrid Mobile Development",
	],
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title },
			{ name: "description", content: siteDescription },
			{ name: "author", content: siteName },
			{ name: "theme-color", content: "#0f172a" },

			// Open Graph — controls the preview when the link is shared.
			{ property: "og:type", content: "profile" },
			{ property: "og:site_name", content: siteName },
			{ property: "og:title", content: title },
			{ property: "og:description", content: siteDescription },
			{ property: "og:url", content: siteUrl },
			{ property: "og:image", content: socialImage },
			{ property: "og:image:alt", content: `Portrait of ${siteName}` },

			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: siteDescription },
			{ name: "twitter:image", content: socialImage },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "canonical", href: siteUrl },
			{ rel: "icon", href: "/favicon.ico", sizes: "any" },
			{ rel: "apple-touch-icon", href: "/logo192.png" },
			{ rel: "manifest", href: "/manifest.json" },
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(structuredData),
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{/* `reducedMotion="user"` makes Motion honour the OS setting. */}
				<MotionConfig reducedMotion="user">{children}</MotionConfig>
				{import.meta.env.DEV && (
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
				)}
				<Scripts />
			</body>
		</html>
	);
}
