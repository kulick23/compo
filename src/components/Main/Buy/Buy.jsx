import React, { useState } from 'react';
import s from './Buy.module.css';
import Switch from './Switch/Switch';

const Buy = (props) => {
    let price = 122566;
    const [isIconLiked, setIconLiked] = useState(false);
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
    const handleLikeButtonClick = () => {
        setIconLiked(!isIconLiked);
    };

    const deliverItems = [
        { count: 'Завтра', description: 'Доставка' },
        { count: '7 шт.', description: 'Тарасовка' },
        { count: '7 шт.', description: 'Тарасовка' }
    ];

    const renderDeliverItems = () => {
        return deliverItems.map((item, index) => (
            <div className={s.buyzone__deli} key={index} style={{ marginLeft: index !== 0 ? '5%' : '0' }}>
                <h3>{item.count}</h3>
                <p className={s.buyzone__stock}>{item.description}</p>
            </div>
        ));
    };

    return (
        <div className={s.buyzone}>
            <b className={s.buyzone__saleprise}>166 534.00 цена без скидки</b>
            <div className={s.buyzone__price}>
                <h1>{formatPrice(price)} ₽</h1>
                <div className={s.buyzone__discount}>
                    <h4>-15%</h4>
                </div>
            </div>
            <div className={s.buyzone__order}>
                <div className={s.buyzone__avail}>
                    <h4>12 штук в уп.</h4>
                </div>
                <Switch />
                <b>Заказ упаковкой</b>
            </div>
            <div className={s.buyzone__stripe}></div>
            <div className={s.buyzone__deliver}>
                {renderDeliverItems()}
            </div>
            <div className={s.buyzone__buy}>
                <button className={s.buyzone__button1} onClick={() => props.updateTotalPrice(price)}>
                    <p className={`${s.buyzone__iconbuy} icon-buy`}></p>
                    <b>В корзину</b>
                </button>
                <button className={s.buyzone__button2} onClick={handleLikeButtonClick}>
                    <p className={`${isIconLiked ? `${s.buyzone__iconlike} icon-like-full` : `${s.buyzone__iconlike} icon-like`}`}></p>
                </button>
            </div>
        </div>
    );
};

export default Buy;


