import { motion, AnimatePresence } from 'motion/react';
import { NotebookPen, Folder,X } from 'lucide-react';
import projects from '../projects'
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-emerald-400 font-mono text-xl mr-2">04.</span>
             Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-500/50 rounded-full md:mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-8">
                <Folder className="w-10 h-10 text-emerald-400" />
                <div className="flex gap-4" >
                  {project.info && (
                    <div
                      className="text-gray-400 hover:text-emerald-400 transition-colors hover:cursor-pointer"
                      onClick={() => openModal(project)}
                    >
                      <NotebookPen className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      {/* modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a0a0a] text-white rounded-lg p-6 relative max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4   text-gray-400 hover:text-white hover:cursor-pointer  transition-colors"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>

              {/* project heading */}
              <h2 className="text-xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              

              <div className="mt-2 text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">
                {selectedProject.info}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
