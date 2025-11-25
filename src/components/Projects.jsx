import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center gap-4"
            >
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                    <FolderGit2 size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.projects.title}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {t.projects.items.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="p-8 relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
                                    <p className="text-purple-400 text-sm">{project.tech}</p>
                                </div>
                                <span className="text-slate-600 dark:text-slate-500 text-xs bg-slate-100 dark:bg-slate-900/50 px-2 py-1 rounded border border-slate-300 dark:border-slate-700">
                                    {project.period}
                                </span>
                            </div>

                            <p className="text-slate-700 dark:text-slate-300 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <ul className="space-y-2">
                                {project.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
