import React from 'react';
import s from './Contacts.module.css'
import '../../../styles/iconfont.css'
const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.contacts__leftblock}>
            <div className={s.contact__logo}>
                <h1 className={`${s.contact__logoicon} icon-logo`}></h1>
                <h1>Compo</h1>
            </div>
                <div className={s.contacts__info}>
                    <h3>8 800 841-95-95</h3>
                    <p>Служба поддержки</p>
                </div>
                <div className={s.contacts__info}>
                    <h3>support@support.ru</h3>
                    <p>Служба поддержки</p>
                </div>
            </div>
            <div className={s.contacts__rightblock}>
                <p>Вакансии</p>
                <p>Блог</p>
                <p>Акции</p>
                <button className={s.contacts__offer}>Предложить идею</button>
            </div>
        </div>


    )
}

export default Contacts;