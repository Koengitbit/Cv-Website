import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center gap-4"
            >
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Briefcase size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.experience.title}</h2>
            </motion.div>

            <div className="space-y-12">
                {t.experience.jobs.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Timeline Line (Desktop) */}
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-800 transform -translate-x-1/2" />

                        <div className="md:flex items-start justify-between gap-12 flex-row">
                            <div className="flex-1 md:text-right">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                                <p className="text-primary font-medium mb-2">{exp.company}</p>
                                <p className="text-slate-600 dark:text-slate-500 text-sm mb-4">{exp.period}</p>
                            </div>

                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-slate-50 dark:border-slate-900 z-10 mt-1.5" />

                            <div className="flex-1">
                                <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-primary/30 transition-colors">
                                    <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
                                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
