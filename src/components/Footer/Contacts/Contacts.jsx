import React from 'react';
import s from './Contacts.module.css';
import '../../../styles/iconfont.css';

const Contacts = () => {
    const links = ['Вакансии', 'Блог', 'Акции'];

    const contactInfo = [
        { text: '8 800 841-95-95', description: 'Служба поддержки' },
        { text: 'support@support.ru', description: 'Служба поддержки' }
    ];

    return (
        <div className={s.contacts}>
            <div className={s.contacts__leftblock}>
                <div className={s.contact__logo}>
                    <h1 className={`${s.contact__logoicon} icon-logo`}></h1>
                    <h1>Compo</h1>
                </div>
                {contactInfo.map((item, index) => (
                    <div key={index} className={s.contacts__info}>
                        <h3>{item.text}</h3>
                        <p className={s.contact__support}>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className={s.contacts__rightblock}>
                {links.map((link, index) => (
                    <b> <a href={'*'} key={index}>{link}</a></b>
                ))}
                <button className={s.contacts__offer}>Предложить идею</button>
            </div>
        </div>
    );
}

export default Contacts;
