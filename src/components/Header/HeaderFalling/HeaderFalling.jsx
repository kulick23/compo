import React from 'react';
import s from './HeaderFalling.module.css';
import '../../../styles/iconfont.css'

const HeaderFalling = () => {
    const linksBlock1 = ['Мои заказы', 'Сотрудники', 'Шаблоны заказов', 'Обращение'];
    const linksBlock2 = [
        {iconClass: 'icon-sale', text:'Акции', textColor: '#1551E5'},
        {text: 'Блог', textColor: '#1551E5'}
    ];

    return (
        <div className={s.header__second}>
            <div className={s.links__block1}>
                {linksBlock1.map((link, index) => (
                    <b><a href={'*'} key={index}>{link}</a></b>
                ))}
            </div>
            <div className={s.links__block2}>
                <button className={s.HeaderFallin__button}>
                    <p className={`${s.HeaderFallin__iconsms} icon-sms`}></p>
                    <b>Ваш менеджер</b>
                </button>
                {linksBlock2.map((item, index) => (
                    <div key={index} className={s.links__block2}>
                        {item.iconClass && <p className={`${s.HeaderFallin__iconsale} ${item.iconClass}`} style={{ color: item.textColor }}></p>}
                       <b> <a href={'*'} style={{ color: item.textColor }}>{item.text}</a></b>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeaderFalling;





