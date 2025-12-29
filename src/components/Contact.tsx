import { socialLinks } from '@/config';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Let's Connect</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Always open to discussing new opportunities, innovative projects,
            or just having a conversation about technology and software architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{link.name}</h3>
                    <p className="text-slate-400 text-sm">{link.description}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-slate-800 rounded-xl p-8">
            <h3 className="text-white mb-4">Open to Opportunities</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Currently available for senior technical leadership roles, consulting
              engagements, and exciting full-stack development projects.
            </p>
            <a
              href="mailto:hkashlan@gmail.com"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
