import { motion } from 'motion/react';
import { Network, Cloud, Code, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Network Security',
    icon: <Network className="w-6 h-6 text-emerald-400" />,
    skills: ['Firewalls (Palo Alto, Cisco)', 'IDS/IPS', 'VPNs', 'Packet Analysis (Wireshark)', 'Zero Trust'],
  },
  {
    title: 'Cloud Security',
    icon: <Cloud className="w-6 h-6 text-emerald-400" />,
    skills: ['AWS Security', 'Azure Security Center', 'IAM', 'Container Security (Docker, K8s)', 'CSPM'],
  },
  {
    title: 'Application Security',
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    skills: ['OWASP Top 10', 'SAST/DAST', 'Secure Code Review', 'Penetration Testing', 'DevSecOps'],
  },
  {
    title: 'Tools & Technologies',
    icon: <Wrench className="w-6 h-6 text-emerald-400" />,
    skills: ['Splunk', 'CrowdStrike', 'Burp Suite', 'Metasploit', 'Python/Bash Scripting'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-emerald-400 font-mono text-xl mr-2">03.</span>
            Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-emerald-500/50 rounded-full md:mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
