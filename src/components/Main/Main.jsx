import React from 'react';
import s from './Main.module.css'
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
                <div className={s.buyzone}></div>
                <div className={s.characteristic}></div>
                <div className={s.desc}></div>
        </div>


    )
}

export default Main;
