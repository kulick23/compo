import React from 'react';
import s from './Buy.module.css';
import Switch from './Switch/Switch';

const Buy = () => {
    const deliverItems = [
        { count: 'Завтра', description: 'Доставка' },
        { count: '7 шт.', description: 'Тарасовка' },
        { count: '7 шт.', description: 'Тарасовка' }
    ];

    const renderDeliverItems = () => {
        return deliverItems.map((item, index) => (
            <div key={index}>
                <h3>{item.count}</h3>
                <p>{item.description}</p>
            </div>
        ));
    };

    return (
        <div className={s.buyzone}>
            <p>166 534.00 цена без скидки</p>
            <div className={s.buyzone__price}>
                <h1>122 566 ₽</h1>
                <div className={s.buyzone__discount}>
                    <h4>-15%</h4>
                </div>
            </div>
            <div className={s.buyzone__order}>
                <div className={s.buyzone__avail}>
                    <h4>12 штук в уп.</h4>
                </div>
                <Switch />
                <p>Заказ упаковкой</p>
            </div>
            <div className={s.buyzone__stripe}></div>
            <div className={s.buyzone__deliver}>
                {renderDeliverItems()}
            </div>
            <div className={s.buyzone__buy}>
                <button className={s.buyzone__button1}>
                    <p className={`${s.buyzone__iconbuy} icon-buy`}></p>
                    В корзину
                </button>
                <button className={s.buyzone__button2}>
                    <p className={`${s.buyzone__iconlike} icon-like`}></p>
                </button>
            </div>
        </div>
    );
};

export default Buy;
