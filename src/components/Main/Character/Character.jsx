import React from 'react';
import s from './Character.module.css';

const Character = () => {
    const characteristics = [
        { title: 'Код поставщика', value: 'ELC00696', style: s.post },
        { title: 'Артикул', value: 'ELC0200000696', style: s.artik },
        { title: 'Код РАЭК', value: 'ELC00696', style: s.rak },
        { title: 'Код ETM', value: 'ELC00696', style: s.etm },
        { title: 'Бренд', value: 'Electric used', style: s.brand },
        { title: 'Серия', value: 'ELC00696', style: s.seria },
        { title: 'Код производителя', value: 'ELC0200000696', style: s.proizv }
    ];

    const renderCharacteristics = () => {
        return characteristics.map((item, index) => (
            <div key={index} className={item.style}>
                <h3>{item.value}</h3>
                <p className={s.character__names}>{item.title}</p>
            </div>
        ));
    };

    return (
        <div className={s.characteristic}>
            <h2 className={s.title}>Характеристики</h2>
            {renderCharacteristics()}
        </div>
    );
};

export default Character;