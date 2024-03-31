import React from 'react';
import s from './Category.module.css'
const Category = () => {
    return (
        <div className={s.category}>
            <div className={s.woman}>
                <h3>Женщинам</h3>
                <p>Одежда</p>
                <p>Обувь</p>
                <p>Аксессуары</p>
                <p>Белье</p>
                <p>Bra fitting</p>

            </div>
            <div className={s.man}>
                <h3>Мужчинам</h3>
                <p>Одежда</p>
                <p>Обувь</p>
                <p>Аксессуары</p>
                <p>Белье</p>
            </div>
            <div className={s.child}>
                <h3>Детям</h3>
                <p>Одежда</p>
                <p>Обувь</p>
                <p>Аксессуары</p>
                <p>Белье</p>
                <p>Игрушки</p>
                <p>Малыши</p>
            </div>
            <div className={s.sport}>
                <h3>Виды спорта</h3>
                <p>Велоспорт</p>
                <p>Туризм</p>
                <p>Тренажеры и фитнес</p>
                <p>Командные виды спорта</p>
                <p>Самокаты</p>
            </div>

        </div>


    )
}

export default Category;