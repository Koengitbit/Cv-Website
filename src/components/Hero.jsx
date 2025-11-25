import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center"
            >
                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50"></div>
                        <img
                            src={profileImage}
                            alt="Koen van der Hoeven"
                            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                            style={{ objectPosition: 'center 35%' }}
                        />
                    </div>
                </motion.div>

                <h2 className="text-xl md:text-2xl text-primary font-semibold mb-2 tracking-wide uppercase">{t.hero.role}</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                    Koen van der Hoeven
                </h1>
                <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
                    {t.hero.description}
                </p>

                <div className="flex justify-center gap-6 mb-12">
                    <SocialLink href="https://linkedin.com/in/koen-van-der-hoeven" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="mailto:koen1337@gmail.com" icon={<Mail />} label="Email" />
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-primary/25"
                    onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                >
                    {t.hero.cta}
                </motion.button>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, color: '#3b82f6' }}
        className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors p-2"
        aria-label={label}
    >
        {icon}
    </motion.a>
);

export default Hero;
