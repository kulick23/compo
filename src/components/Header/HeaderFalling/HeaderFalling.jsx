import React from 'react';
import s from './HeaderFalling.module.css';
import '../../../styles/iconfont.css'

const HeaderFalling = () => {
    const linksBlock1 = ['Мои заказы', 'Сотрудники', 'Шаблоны заказов', 'Обращение'];
    const linksBlock2 = ['Акции', 'Блог'];

    return (
        <div className={s.header__second}>
            <div className={s.links__block1}>
                {linksBlock1.map((link, index) => (
                    <a href={'*'} key={index}>{link}</a>
                ))}
            </div>
            <div className={s.links__block2}>
                <button className={s.HeaderFallin__button}>
                    <p className={`${s.HeaderFallin__iconsms} icon-sms`}></p>
                    <p>Ваш менеджер</p>
                </button>
                {linksBlock2.map((link, index) => (
                    <a href={'*'} key={index}>{link}</a>
                ))}
            </div>
        </div>
    );
};

export default HeaderFalling;
