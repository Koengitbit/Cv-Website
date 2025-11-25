import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
                <h2 className="text-xl md:text-2xl text-primary font-semibold mb-2 tracking-wide uppercase">{t.hero.role}</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Koen van der Hoeven
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
                    {t.hero.description}
                </p>

                <div className="flex justify-center gap-6 mb-12">
                    <SocialLink href="https://linkedin.com/in/koen-van-der-hoeven" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="mailto:koen1337@gmail.com" icon={<Mail />} label="Email" />
                    <SocialLink href="tel:+31612329398" icon={<Phone />} label="Phone" />
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
        className="text-slate-400 hover:text-primary transition-colors p-2"
        aria-label={label}
    >
        {icon}
    </motion.a>
);

export default Hero;
