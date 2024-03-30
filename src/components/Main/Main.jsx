import React from 'react';
import s from './Main.module.css'
import Switch from "./Switch/Switch";
import Slider from "./Slider/Slider";
const Main = () => {
    return (
        <div className={s.main}>
                <div className={s.source}>
                    <p>Каталог / Обувь / Кроссовки / Беговые</p>
                </div>
                <div className={s.productname}>
                    <h1>Кроссовки мужские Skechers Sunny Dale</h1>
                </div>
                <div className={s.slider}>
                <Slider/>
                </div>
                <div className={s.buyzone}>
                    <p>166 534.00 цена без скидки</p>
                    <div className={s.buyzone__price}>
                        <h1>122 566 ₽</h1>
                        <div className={s.buyzone__discount}>
                        <h4 >-15%</h4>
                        </div>
                    </div>
                    <div className={s.buyzone__order}>
                        <div className={s.buyzone__avail}>
                            <h4 >12 штук в уп.</h4>
                        </div>
                      <Switch/>
                        <p>Заказ упаковкой</p>
                    </div>
                    <div className={s.buyzone__stripe}></div>
                    <div className={s.buyzone__deliver}>
                        <div>
                            <h3>Завтра</h3>
                            <p>Доставка</p>
                        </div>
                        <div>
                            <h3>7 шт.</h3>
                            <p>Тарасовка</p>
                        </div>
                        <div>
                            <h3>7 шт.</h3>
                            <p>Тарасовка</p>
                        </div>
                    </div>

                    <div className={s.buyzone__buy}>
                        <button className={s.buyzone__button1}>
                            <p  className={`${s.buyzone__iconbuy} icon-buy`}></p>
                            В корзину
                        </button>
                        <button className={s.buyzone__button2}>
                            <p  className={`${s.buyzone__iconlike} icon-like`}></p>
                        </button>
                    </div>
                </div>
                <div className={s.characteristic}>
                    <h2>Характеристики</h2>
                    <div className={s.characteristic__zone}>
                        <div>
                            <h2>ELC00696</h2>
                            <p>Код поставщика</p>
                        </div>
                        <div>
                            <h2>ELC0200000696</h2>
                            <p>Артикул</p>
                        </div>
                    </div>
                    <div className={s.characteristic__zone}>
                        <div>
                            <h2>ELC00696</h2>
                            <p>Код РАЭК</p>
                        </div>
                        <div>
                            <h2>ELC00696</h2>
                            <p>Код ETM</p>
                        </div>
                    </div>
                    <div className={s.characteristic__zone}>
                        <div>
                            <h2>Electric used</h2>
                            <p>Бренд</p>
                        </div>
                        <div>
                            <h2>ELC00696</h2>
                            <p>Серия</p>
                        </div>
                    </div>
                    <div className={s.characteristic__zone}>
                        <div>
                            <h2>ELC0200000696</h2>
                            <p>Код производителя</p>
                        </div>

                    </div>
                </div>
                <div className={s.desc}></div>
        </div>


    )
}

export default Main;
