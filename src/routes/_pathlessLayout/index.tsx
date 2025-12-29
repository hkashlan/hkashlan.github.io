import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Timeline } from '@/components/Timeline';
import { WorkingStyle } from '@/components/WorkingStyle';
import { Navigation } from '@/components/Navigation';
import { Contact } from '@/components/Contact';

export const Route = createFileRoute('/_pathlessLayout/')({
  component: RouteComponent,
})

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