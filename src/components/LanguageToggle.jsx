import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLanguage}
            className="fixed top-4 right-4 z-50 bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
        >
            {language === 'nl' ? (
                <>
                    <img src="https://flagcdn.com/w40/nl.png" alt="NL Flag" className="w-5 h-auto rounded-sm" />
                    <span>NL</span>
                </>
            ) : (
                <>
                    <img src="https://flagcdn.com/w40/gb.png" alt="GB Flag" className="w-5 h-auto rounded-sm" />
                    <span>GB</span>
                </>
            )}
        </motion.button>
    );
};

export default LanguageToggle;
