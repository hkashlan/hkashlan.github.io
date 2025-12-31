import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Building2, Calendar, Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    company: 'Akelius Technology',
    role: 'Senior Full Stack & Mobile Architect',
    period: 'May 2019 - Present',
    duration: '7+ years',
    description: 'Building enterprise-scale solutions',
    projects: [
      'Customer Management System',
      'Inspection Application (Mobile based on Capacitorjs)',
      '<a href="https://play.google.com/store/apps/details?id=com.akelius.mypages.prod&utm_source=emea_Med">Tenant Application</a>',
      'Rent Application',
      'Apartment Management System',
      'Akelius Website'
    ],
    skills: ['Angular', 'React', 'Strapi', 'TypeScript', 'Docker', 'Docker Compose', 'Kubernetes', 'Jenkins', 'Git', 'Node.js', 'Azure', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    achievements: [
      'Move from paid service to open source',
      'Improve user experience in all Apps',
      'Part of Frontend Monthly meeting to guide Akelius Frontend libraries',
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    company: 'FinanceNet Solutions',
    role: 'Senior Full Stack Developer',
    period: '2015 - 2020',
    duration: '5 years',
    description: 'Developed secure financial applications and payment processing systems',
    projects: [
      'Mobile banking app with 4.8★ rating',
      'Real-time fraud detection system',
      'Cryptocurrency trading platform'
    ],
    skills: ['React Native', 'Python', 'Django', 'MongoDB', 'Redis', 'Docker'],
    achievements: [
      'Processed $2B+ in transactions',
      'Zero security breaches',
      'PCI DSS compliance certification'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    company: 'E-Commerce Ventures',
    role: 'Full Stack Developer',
    period: '2010 - 2015',
    duration: '5 years',
    description: 'Built scalable e-commerce platforms and inventory management systems',
    projects: [
      'Multi-vendor marketplace platform',
      'Advanced recommendation engine',
      'Real-time inventory tracking system'
    ],
    skills: ['Vue.js', 'Java', 'Spring Boot', 'MySQL', 'Elasticsearch', 'RabbitMQ'],
    achievements: [
      'Handled 100K+ daily orders',
      'Reduced cart abandonment by 35%',
      'Increased conversion rate by 50%'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    company: 'Digital Media Corp',
    role: 'Web Developer',
    period: '2005 - 2010',
    duration: '5 years',
    description: 'Created content management systems and media streaming platforms',
    projects: [
      'Video streaming platform',
      'Custom CMS for major publications',
      'Social media integration tools'
    ],
    skills: ['JavaScript', 'PHP', 'MySQL', 'jQuery', 'WordPress', 'Apache'],
    achievements: [
      '10M+ monthly active users',
      'Won "Best Digital Platform" award',
      'Featured in Tech Magazine'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    company: 'StartUp Innovations',
    role: 'Junior Developer',
    period: '2002 - 2005',
    duration: '3 years',
    description: 'Started career building web applications and learning full stack development',
    projects: [
      'Corporate website builder',
      'Email marketing automation tool',
      'Customer relationship management system'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'ASP.NET', 'SQL Server', 'C#'],
    achievements: [
      'Built first production app',
      'Promoted to full developer in 1 year',
      'Completed Microsoft certification'
    ],
    color: 'from-indigo-500 to-blue-500'
  }
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="timeline" ref={containerRef} className="py-20 bg-slate-900 overflow-hidden relative">
      {/* Background 3D Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg) scale(2)',
            transformOrigin: 'center center'
          }}
        />
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Career Journey</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            23+ years of continuous learning and innovation across diverse technologies and industries
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative ${
                  index % 2 === 0 ? 'lg:pr-1/2 lg:pl-0' : 'lg:pl-1/2 lg:pr-0 lg:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 hidden lg:block z-20">
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-4 border-slate-900`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                {/* 3D Card */}
                <motion.div
                  className="relative group perspective-1000"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700 transition-all duration-300 ${
                      index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'translateZ(0)',
                    }}
                  >
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} rounded-t-2xl`} />

                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`w-14 h-14 rounded-xl bg-white ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                             style={{ transform: 'translateZ(20px)' }}>
                          {/* <Building2 className="w-7 h-7 text-white" /> */}
                          <img src="https://akelius.com/assets/img/akelius_logo.svg" alt="Akelius Logo" className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white mb-1">{exp.company}</h3>
                          <p className="text-slate-300">{exp.role}</p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                            <span className="text-slate-600">•</span>
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm">{exp.description}</p>
                    </div>

                    {/* Projects */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        <h4 className="text-white">Key Projects</h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.projects.map((project, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1">▹</span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-white mb-3 text-sm">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-20 text-white rounded-full text-xs border border-slate-600`}
                            style={{ transform: 'translateZ(10px)' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <h4 className="text-white text-sm">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">★</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 3D Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Companies', value: '5+' },
            { label: 'Major Projects', value: '50+' },
            { label: 'Technologies', value: '40+' },
            { label: 'Years of Code', value: '23+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-blue-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}