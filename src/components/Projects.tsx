import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Enterprise SaaS Platform',
    description: 'Led the architecture and development of a multi-tenant SaaS platform serving 10,000+ users. Built with microservices architecture, handling 1M+ requests daily.',
    image: 'https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2RlfGVufDF8fHx8MTc2NDQyODc4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Kubernetes'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Developed a high-performance analytics platform with real-time data visualization, processing millions of events per hour with sub-second latency.',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NDQ0NDMzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'GraphQL', 'Redis', 'WebSocket', 'D3.js'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Mobile Banking Application',
    description: 'Architected and built a secure mobile banking app with biometric authentication, supporting iOS and Android with 4.8+ star rating.',
    image: 'https://images.unsplash.com/photo-1665043548178-8e606eca11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc2NDQ4OTE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Python', 'MongoDB', 'Docker', 'CI/CD'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'E-commerce Marketplace',
    description: 'Built a scalable marketplace platform handling thousands of concurrent users, with advanced search, recommendation engine, and payment processing.',
    image: 'https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2RlfGVufDF8fHx8MTc2NDQyODc4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Java', 'Elasticsearch', 'Stripe', 'Terraform'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'AI-Powered Content Platform',
    description: 'Developed an intelligent content management system with AI-driven recommendations, automated tagging, and natural language processing.',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NDQ0NDMzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Vue.js', 'FastAPI', 'TensorFlow', 'DynamoDB', 'Lambda'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'DevOps Automation Suite',
    description: 'Created a comprehensive DevOps toolkit automating deployment pipelines, infrastructure provisioning, and monitoring for enterprise environments.',
    image: 'https://images.unsplash.com/photo-1665043548178-8e606eca11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc2NDQ4OTE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Kubernetes', 'Prometheus', 'Grafana', 'Ansible'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A selection of enterprise-grade projects showcasing technical leadership,
            architectural excellence, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
