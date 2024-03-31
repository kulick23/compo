import React from 'react';
import s from './Category.module.css';

const Category = () => {
    const categories = [
        {
            title: 'Женщинам',
            items: ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Bra fitting'],
            style: s.woman
        },
        {
            title: 'Мужчинам',
            items: ['Одежда', 'Обувь', 'Аксессуары', 'Белье'],
            style: s.man
        },
        {
            title: 'Детям',
            items: ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Игрушки', 'Малыши'],
            style: s.child
        },
        {
            title: 'Виды спорта',
            items: ['Велоспорт', 'Туризм', 'Тренажеры и фитнес', 'Командные виды спорта', 'Самокаты'],
            style: s.sport
        }
    ];

    return (
        <div className={s.category}>
            {categories.map((category, index) => (
                <div key={index} className={category.style}>
                    <h3>{category.title}</h3>
                    {category.items.map((item, i) => (
                        <a href={'*'} key={i}>{item}</a>

                    ))}
                </div>
            ))}
        </div>
    );
};

export default Category;
