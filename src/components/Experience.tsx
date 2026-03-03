import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Lock, Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Security Engineer – Data Security',
    company: 'Providence Global Center',
    duration: 'July 2024 – Present',
    achievements: [
      'Designed and optimized organization-wide Microsoft Purview DLP policies across Exchange and non-Exchange channels.',
      'Engineered a risk-based Toxic Combination detection model, reducing active DLP policies from 100+ to 42 while improving alert precision.',
      'Built an AI Domain Registry & SIEM correlation workflow to bridge detection gaps in commercial threat intelligence feeds.',
      'Developed a DLP Policy Version Control system enabling granular tracking of rule-level changes and configuration drift.',
      'Implemented automated alert enrichment pipelines integrating Purview alerts and telemetry into a centralized SQL database.',
      'Supported Endpoint DLP implementation using CrowdStrike Falcon and assisted CASB governance via Microsoft Defender for Cloud Apps.',
      'Currently developing SOAR playbooks to automate security incident workflows and reduce manual investigation effort.'
    ],
  },
  {
    id: 2,
    role: 'Data Security Engineer – Leap Intern',
    company: 'Providence Global Center',
    duration: 'Jan 2024 – June 2024',
    achievements: [
      'Designed and deployed an enterprise Service Account Governance Portal managing 35,000+ service accounts across global environments.',
      'Implemented ownership mapping with Primary and Secondary approvers to eliminate orphaned privileged accounts.',
      'Built bulk onboarding workflows with ETL validation and concurrency controls to prevent conflicting ownership updates.',
      'Introduced structured decommissioning workflow requiring multi-owner confirmation before lifecycle termination.',
      'Established centralized audit tracking to enhance privileged account accountability and compliance visibility.'
    ],
  },
  {
    id: 3,
    role: 'IAM Engineer – Summer Intern',
    company: 'Providence Global Center',
    duration: 'June 2023 – Aug 2023',
    achievements: [
      'Developed a Unified Identity Dashboard aggregating data from SailPoint, CyberArk EPV, BeyondTrust EPM, and Azure AD.',
      'Enabled consolidated visibility of user risk indicators across multiple identity and privileged access platforms.',
      'Improved investigation efficiency by reducing cross-tool navigation for IAM analysts.'
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lockY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-emerald-400 font-mono text-xl mr-2">02.</span>
            Experience
          </h2>
          <div className="w-20 h-1 bg-emerald-500/50 rounded-full md:mx-auto mb-8"></div>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

          {/* Moving Lock Icon */}
          <motion.div
            style={{ top: lockY }}
            className="absolute left-8 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]"
          >
            <Lock className="w-5 h-5 text-black" />
          </motion.div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>

                {/* Timeline Dot (Static) */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500/20 border-2 border-emerald-500 -translate-x-1/2 z-0"></div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full md:w-5/12 pl-20 md:pl-0"
                >
                  <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors group">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-gray-500 mx-2">|</span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{exp.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                          <span className="text-emerald-500 mt-1">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
