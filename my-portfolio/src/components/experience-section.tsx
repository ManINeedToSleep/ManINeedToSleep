"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      type: "education",
      title: "Computer Science",
      organization: "University of Technology",
      period: "2020 - 2024",
      description: "Bachelor's degree with focus on software engineering and web development",
      icon: GraduationCap,
    },
    {
      type: "work",
      title: "Frontend Developer",
      organization: "Tech Startup Inc.",
      period: "2023 - Present",
      description: "Building responsive web applications using React and TypeScript",
      icon: Briefcase,
    },
    {
      type: "certification",
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      period: "2023",
      description: "Cloud computing fundamentals and AWS services certification",
      icon: Award,
    },
  ]

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "GraphQL",
    "MongoDB",
  ]

  return (
    <section className="py-20 relative bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-blue-300 mb-4">
            Journey & Arsenal
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-purple-200 mb-6">Experience & Education</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 hover:border-purple-400/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-900/30 rounded-lg">
                      <exp.icon className="w-5 h-5 text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg text-purple-200">{exp.title}</h4>
                      <p className="text-purple-300/80 text-sm">{exp.organization}</p>
                      <div className="flex items-center gap-2 mt-1 mb-2">
                        <Calendar className="w-3 h-3 text-purple-400" />
                        <span className="text-xs text-purple-400">{exp.period}</span>
                      </div>
                      <p className="text-purple-100/70 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-purple-200 mb-6">Tech Arsenal</h3>
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3 text-center hover:border-purple-400/50 transition-colors cursor-default"
                  >
                    <span className="text-purple-200 text-sm font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <h4 className="font-serif text-lg text-purple-200 mb-4">Recent Achievements</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-100/80 text-sm">AWS Cloud Practitioner Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-100/80 text-sm">React Developer Certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-100/80 text-sm">Dean's List - 3.8 GPA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
