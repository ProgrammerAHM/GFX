import useAnimatedElement from '../util/inView';
import { useTranslation } from 'react-i18next';
import { React, useEffect, useState } from "react";
import Contact from '../components/elements/Appointment'
import Layout from "../components/Layout";

function ContactPage() {

    const { i18n, t } = useTranslation();

    const currentLanguage = i18n.language;
    const ar = currentLanguage === 'ar';
    const [isarabic, setisarabic] = useState(ar);

    const handleLanguageChanged = () => {
        setisarabic(!isarabic)
    };

    useEffect(() => {
        i18n.on('languageChanged', handleLanguageChanged);
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [handleLanguageChanged]);

    const threshold = .6
    const elements = useAnimatedElement(threshold)
    var c = 1
    var dir = isarabic ? "rtl" : "ltr"

    return (
        <>
            <title>Contact : gxf</title>
            <Layout parent={t("Home")} sub={t("Contact")} parentURL="/" title={t("Contact Us")}>
                <section dir={dir}>
                    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14' >
                        <div className='contact-cart' >
                            <h3>
                                {t('CONTACT US')}
                            </h3>
                            <div>
                                <a href="tel:+971563272736"><p className='hover:text-slate-800'>+971 56 327 2736</p></a>
                                <a href="tel:+971505108831"><p className='hover:text-slate-800'>+971 50 510 8831</p></a>
                            </div>
                            <div>
                                <a href="mailto:gxfcar@gmail.com"><p>gxfcar@gmail.com</p></a>
                            </div>
                        </div>

                        <a className='contact-cart' href='https://goo.gl/maps/CY1XvAoJK5CCDY9GA' target='_blank'>
                            <h3>
                                {t('ADDRESS')}
                            </h3>
                            <div>
                                <p>{t('Forsan central mall')}</p>
                                <p>{t('Khalifa A')}</p>
                                <p>{t('Abu Dhabi')}</p>
                            </div>
                        </a>
                        <div className='contact-cart'>
                            <h3>
                                {t('OPEN HOURS')}
                            </h3>
                            <div className='flex justify-between'>
                                <p>{t('Saturday – Thursday')}</p>
                                <p>{t('10 am – 11 pm')}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>{t('Friday')}</p>
                                <p>{t('2 pm – 11 pm')}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='my-14'>
                    <div className='container'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14532.649913713043!2d54.5660142!3d24.4104223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4780ab3f4387%3A0xe225635fef6b1795!2sGXF%20Car%20Care!5e0!3m2!1sen!2seg!4v1690197282698!5m2!1sen!2seg"
                            className='google-map-location'
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                </section>
                <section>
                    <Contact />
                </section>
            </Layout>
        </>

    );
}

export default ContactPage;
