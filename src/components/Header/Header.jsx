import React from 'react';
import s from './Header.module.css';
import avatar from '../../assets/avatar.png';
import '../../styles/iconfont.css';

const Logo = () => (
    <div className={s.header__logo}>
        <h1 className={`${s.header__logoicon} icon-logo`}></h1>
        <h1>Compo</h1>
    </div>
);

const Search = () => (
    <label className={s.header__search}>
        <input type="text" placeholder="Название запроса" />
        <div className={s.search__icons}>
            <p className="icon-delete"></p>
            <p className="icon-search"></p>
        </div>
    </label>
);

const Profile = () => (
    <div className={s.header__profile}>
        <img className={s.header__avatar} src={avatar} alt="avatar" />
        <p>Ермаков Е.</p>
        <p className={`${s.header__icondown} icon-down`}></p>
    </div>
);

const Header = () => {
    const firstBlockElements = [
        <Logo key="logo" />,
        <button className={s.header__button} key="button">
            <p className={`${s.header__buttonicon} icon-burger`}></p>
            Меню
        </button>,
        <Search key="search" />,
        <p className={`${s.header__icondin} icon-din`} key="icondin"></p>,
        <div className={s.header__verticalline} key="verticalline"></div>,
        <p className={`${s.header__iconlike} icon-like`} key="iconlike"></p>,
        <button className={s.header__buy} key="buy">
            <p className={`${s.header__iconbuy} icon-buy`}></p>
            144 235₽
        </button>,
        <Profile key="profile" />
    ];

    const linksBlock1Elements = [
        <p key="orders">Мои заказы</p>,
        <p key="employees">Сотрудники</p>,
        <p key="order-templates">Шаблоны заказов</p>,
        <p key="feedback">Обращение</p>
    ];

    const linksBlock2Elements = [
        <button key="manager">Ваш менеджер</button>,
        <p key="promotions">Акции</p>,
        <p key="blog">Блог</p>
    ];

    return (
        <div className={s.header}>
            <div className={s.header__first}>
                {firstBlockElements}
            </div>
            <div className={s.header__second}>
                <div className={s.links__block1}>
                    {linksBlock1Elements}
                </div>
                <div className={s.links__block2}>
                    {linksBlock2Elements}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Header);
