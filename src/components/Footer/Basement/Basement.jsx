import React from 'react';
import s from './Basement.module.css'
import '../../../styles/iconfont.css'
const Basement = () => {
    return (
        <div className={s.basement}>
         <div className={s.basement__linksblock}>
             <div className={s.basement__linkicons}>
                 <p className={`${s.basement__icons} icon-pdf`}></p>
                 <p>PDF презентация</p>
             </div>
             <div className={s.basement__linkicons}>
                 <p className={`${s.basement__icons} icon-video`}></p>
                 <p>Видео инструкция</p>
             </div>
             <div className={s.basement__linkicons}>
                 <p className={`${s.basement__icons} icon-faq`}></p>
                 <p>FAQ</p>
             </div>
             <div className={`${s.basement__linkicons} ${s.basement__blueicons}`}>
                 <p className={`${s.basement__icons} icon-youtube`}></p>
                 <p>Мы на YouTube</p>
             </div>
             <p>Политика конфиденциальности</p>
             <p>Лицензионное соглашение</p>
         </div>
            <p className={s.basement__text}>
                Настоящая Политика обработки персональных данных разработана в соответствии
                с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации,
                Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006
                года 149-ФЗ "Об информации, информационных технологиях и о защите информации",
            </p>
            <div className={s.basement__logoblock}>
                <div className={s.basement__logo}>
                    <h1 className={`${s.basement__logoicon} icon-logo`}></h1>
                    <h1>Compo</h1>
                </div>
                <h3>Разработка платформы</h3>
            </div>

        </div>


    )
}

export default Basement;