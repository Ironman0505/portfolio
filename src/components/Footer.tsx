import { Github, Linkedin, Mail, Instagram, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-2 text-emerald-400">
          <Shield className="w-6 h-6" />
          <span className="font-mono font-bold text-lg tracking-tight">SEC_ENG</span>
        </div>

        <p className="text-gray-500 text-sm font-mono text-center">
          &copy; {new Date().getFullYear()} Security Engineer. Built with React & Tailwind.
          <br />
          <span className="text-emerald-500/50 text-xs">All systems operational.</span>
        </p>
      </div>
    </footer>
  );
}
