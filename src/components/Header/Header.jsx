import React from 'react';
import s from './Header.module.css'
import avatar from '../../assets/avatar.png'
import '../../styles/iconfont.css';
const Header = () => {
    return (
        <div  className={s.header}>
<div className={s.header__first}>
    <div className={s.header__logo}>
        <h1 className={`${s.header__logoicon} icon-logo`}></h1>
    <h1 >Compo</h1>
    </div>
    <button className={s.header__button}>
        <p className={`${s.header__buttonicon} icon-burger`}></p>
        Меню
    </button>
    <label className={s.header__search}>
    <input  type="text" placeholder="Название запроса"/>
        <div className={s.search__icons}>
        <p className="icon-delete"></p>
        <p className="icon-search"></p>
        </div>
    </label>
    <p className={`${s.header__icondin} icon-din`}></p>
    <div  className={s.header__verticalline}></div>
    <p className={`${s.header__iconlike} icon-like`}></p>
    <button className={s.header__buy}>
        <p className={`${s.header__iconbuy} icon-buy`}></p>
        144 235₽
    </button>
    <div className={s.header__profile}>
         <img className={s.header__avatar} src={avatar} />
        <p>Ермаков Е.</p>
        <p className={`${s.header__icondown} icon-down`}></p>
    </div>
</div>
            <div className={s.header__second}>
                <div className={s.links__block1}>
                    <p>Мои заказы</p>
                    <p>Сотрудники</p>
                    <p>Шаблоны заказов</p>
                    <p>Обращение</p>
                </div>
                <div className={s.links__block2}>
                    <button>Ваш менеджер</button>
                    <p>Акции</p>
                    <p>Блог</p>
                </div>
            </div>
        </div>
    )
}
export default Header