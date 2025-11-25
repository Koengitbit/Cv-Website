import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const getSkillData = (key) => {
    switch (key) {
        case 'languages':
            return {
                icon: <Code2 className="text-blue-400" />,
                skills: ["C#", "JavaScript", "TypeScript", "Python", "SQL", "C", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "PHP", "Java"]
            };
        case 'frameworks':
            return {
                icon: <Layout className="text-purple-400" />,
                skills: [".NET 8.0", "ASP.NET", "MVC", "Blazor", "Angular", "React", "Laravel"]
            };
        case 'databases':
            return {
                icon: <Database className="text-green-400" />,
                skills: ["MySQL", "PostgreSQL", "Entity Framework"]
            };
        case 'devops':
            return {
                icon: <Settings className="text-orange-400" />,
                skills: ["GitHub Actions", "Docker", "Azure DevOps", "CI/CD"]
            };
        case 'other':
            return {
                icon: <Terminal className="text-pink-400" />,
                skills: ["REST APIs", "Onion Architecture", "Authentication", "Unit Testing"]
            };
        default:
            return { icon: null, skills: [] };
    }
};

const Skills = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-4 max-w-6xl mx-auto bg-slate-50 dark:bg-slate-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center gap-4"
            >
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Terminal size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.skills.title}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(t.skills.categories).map(([key, title], index) => {
                    const { icon, skills } = getSkillData(key);
                    return (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                    {icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-300 dark:border-slate-600/50 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
