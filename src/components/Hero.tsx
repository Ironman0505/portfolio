import { motion } from 'motion/react';
import { Terminal, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-8"
        >
          <Terminal className="w-3 h-3" />
          <span>SYSTEM.STATUS == "SECURE"</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
        >
          Hi, I'm <span className="text-emerald-400">Kowshik Reddy Mendu</span>
          <br />
          <span className="text-gray-400">Security Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed"
        >
          at PGC India, specialized in Data Security and Security Automation,
          with hands-on experience in building and improving enterprise-scale security 
          controls across cloud and organizational environments. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-black bg-emerald-400 rounded-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600"></span>
            <span className="relative flex items-center gap-2">
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all hover:border-emerald-500/50"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
