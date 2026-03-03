import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    name: 'Top 2% in NPTEL Blockchain Course across India',
    issuer: 'NPTEL',
    year: '2022',
  },
  {
    name: '1st Place in CTF Organized by Convergence-VNRVJIET',
    issuer: 'VNRVJIET',
    year: '2023',
  },
  {
    name: 'State Level Inter-College CTF Organizer',
    issuer: 'VNRVJIET',
    year: '2023',
  },
  {
    name: 'Best Paper Award at the BVRIThon Conference for the research paper "Decentralized Health Management System"',
    issuer: 'BVRIT',
    year: '2023',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-emerald-400 font-mono text-xl mr-2">05.</span>
            Achievements
          </h2>
          <div className="w-20 h-1 bg-emerald-500/50 rounded-full md:mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {cert.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="font-medium text-gray-300">{cert.issuer}</span>
                  <span>•</span>
                  <span className="font-mono text-emerald-500/80">{cert.year}</span>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500/50 ml-auto shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
