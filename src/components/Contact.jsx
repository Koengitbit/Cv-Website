import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 px-4 bg-slate-900/50 border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.contact.title}</h2>
                    <p className="text-slate-400 mb-12 max-w-xl mx-auto">
                        {t.contact.description}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                        <ContactItem
                            href="mailto:koen1337@gmail.com"
                            icon={<Mail />}
                            label="koen1337@gmail.com"
                        />
                        <ContactItem
                            href="tel:+31612329398"
                            icon={<Phone />}
                            label="(+31) 6 12329398"
                        />
                        <ContactItem
                            href="https://linkedin.com/in/koen-van-der-hoeven"
                            icon={<Linkedin />}
                            label="LinkedIn Profile"
                        />
                    </div>
                </motion.div>

                <div className="mt-20 text-slate-600 text-sm">
                    {t.contact.footer.replace('{year}', new Date().getFullYear())}
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ href, icon, label }) => (
    <a
        href={href}
        className="flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-colors group"
    >
        <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
            {icon}
        </div>
        <span className="font-medium">{label}</span>
    </a>
);

export default Contact;
