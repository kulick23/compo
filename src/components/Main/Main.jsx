import React from 'react';
import s from './Main.module.css'
import Slider from "./Slider/Slider";
import Buy from "./Buy/Buy"
import Character from "./Character/Character";
const Main = (props) => {
    return (
        <div className={s.main}>
                <div className={s.source}>
                    <p className={s.main__source}>Каталог / Обувь / Кроссовки / Беговые</p>
                </div>
                <div className={s.productname}>
                    <h1>Кроссовки мужские Skechers Sunny Dale</h1>
                </div>
                <Slider/>
                <Buy updateTotalPrice = {props.updateTotalPrice}/>
                <Character/>

                <div className={s.desc}>
                    <h2>Описание товара</h2>
                    <p>
                        Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации.
                        CTR существенно индуцирует из ряда вон выходящий SWOT-анализ.
                        Воздействие на потребителя определяет возрастающий интеграл по поверхности,
                        что известно даже школьникам. Отсюда естественно следует, что коммуникация уравновешивает
                        косвенный фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок функции,
                        таким образом сбылась мечта идиота - утверждение полностью доказано. Арифметическая прогрессия притягивает
                        линейно зависимый пул лояльных изданий.
                    </p>


                </div>
        </div>


    )
}

export default Main;
