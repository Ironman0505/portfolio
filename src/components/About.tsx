import { motion } from 'motion/react';
import { Shield, Lock, Activity, KeyIcon, CpuIcon, DatabaseIcon } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-emerald-400 font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-500/50 rounded-full md:mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-3xl md:mx-auto text-lg leading-relaxed">
            I am a passionate Security Engineer and Web Developer with a deep understanding of network protocols, 
            cloud infrastructure, and Data security. I love building secure & scalable systems and automating security processes
             to enhance organizational resilience against cyber threats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
  {
    icon: <DatabaseIcon className="w-8 h-8 text-emerald-400" />,
    title: 'Data Security Engineering',
    description: 'Designing and optimizing enterprise Data Loss Prevention (DLP) controls to protect sensitive data across communication channels, endpoints, and cloud services while reducing false positives and improving detection accuracy.'
  },
  {
    icon: <KeyIcon className="w-8 h-8 text-emerald-400" />,
    title: 'Identity & Access Governance',
    description: 'Building governance systems that enforce accountable ownership, lifecycle management, and secure access control for privileged identities such as service accounts and enterprise applications.'
  },
  {
    icon: <CpuIcon className="w-8 h-8 text-emerald-400" />,
    title: 'Security Automation & Detection',
    description: 'Developing automation pipelines and SOAR workflows that correlate security telemetry, enrich alerts with contextual intelligence, and enable faster investigation and response across security operations.'
  }
].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
