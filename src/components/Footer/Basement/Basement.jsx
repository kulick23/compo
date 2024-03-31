import React from 'react';
import s from './Basement.module.css';
import '../../../styles/iconfont.css';

const Basement = () => {
    const items = [
        { iconClass: 'icon-pdf', text: 'PDF презентация' },
        { iconClass: 'icon-video', text: 'Видео инструкция' },
        { iconClass: 'icon-faq', text: 'FAQ' },
        { iconClass: 'icon-youtube', text: 'Мы на YouTube', textColor: '#1551E5' },
        { text: 'Политика конфиденциальности' },
        { text: 'Лицензионное соглашение' }
    ];

    return (
        <div className={s.basement}>
            <div className={s.basement__linksblock}>
                {items.map((item, index) => (
                    <div key={index} className={s.basement__linkicons}>
                        {item.iconClass && <p className={`${s.basement__icons} ${item.iconClass}`} style={{ color: item.textColor }}></p>}
                        <a href={'*'} style={{ color: item.textColor }}>{item.text}</a>
                    </div>
                ))}
            </div>
            <p className={s.basement__text}>
                Настоящая Политика обработки персональных данных разработана в соответствии
                с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации,
                Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006
                года 149-ФЗ "Об информации, информационных технологиях и о защите информации",
            </p>
            <div className={s.basement__logoblock}>
                <div className={s.basement__logo}>
                    <h1 className={`${s.basement__logoicon} icon-logo`}></h1>
                    <h1>Compo</h1>
                </div>
                <h3>Разработка платформы</h3>
            </div>
        </div>
    );
};

export default Basement;

