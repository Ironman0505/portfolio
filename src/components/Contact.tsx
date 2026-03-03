import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Contact() {


  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-emerald-400 font-mono text-xl mr-2">06.</span>
            Lets Connect!
          </h2>
          <div className="w-20 h-1 bg-emerald-500/50 rounded-full md:mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you have a question, a project proposal, or just want to discuss anything, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-6"
        >
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl text-center">
            Connect with me on your preferred platform:
          </p>
          <div className="flex items-center gap-6">
         
            <a
              href="https://www.instagram.com/_aliennx_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:mendukowshikreddy@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
              <a
              href="https://www.linkedin.com/in/mendu-kowshik-reddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
               <a
              href="https://github.com/Ironman0505/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}
