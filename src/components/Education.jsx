import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-4 max-w-6xl mx-auto bg-slate-50 dark:bg-slate-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center gap-4"
            >
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                    <GraduationCap size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.education.title}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {t.education.schools.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.school}</h3>
                        <p className="text-accent font-medium mb-4">{edu.degree}</p>
                        <p className="text-slate-600 dark:text-slate-500 text-sm">{edu.period}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
