import React from 'react';
import s from './HeaderMain.module.css'
import avatar from "../../../assets/avatar.png";
import '../../../styles/iconfont.css';

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
            <a href={'*'} className="icon-delete"></a>
            <a href={'*'} className="icon-search"></a>
        </div>
    </label>
);

const Profile = () => (
    <div className={s.header__profile}>
        <img className={s.header__avatar} src={avatar} alt="avatar" />
        <p>Ермаков Е.</p>
        <a href={'*'} className={`${s.header__icondown} icon-down`}></a>
    </div>
);
const HeaderMain = () => {
    return (
        <div className={s.header__first}>
            <Logo />
            <button className={s.header__button}>
                <p className={`${s.header__buttonicon} icon-burger`}></p>
                Меню
            </button>
            <Search />
            <a href={'*'} className={`${s.header__icondin} icon-din`}></a>
            <div className={s.header__verticalline}></div>
            <a href={'*'} className={`${s.header__iconlike} icon-like`}></a>
            <button className={s.header__buy}>
                <p className={`${s.header__iconbuy} icon-buy`}></p>
                144 235₽
            </button>
            <Profile />
        </div>


    )
}

export default HeaderMain;