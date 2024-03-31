import React, { useState } from 'react';
import s from './Switch.module.css'; // Модульные стили для переключателя

const Switch = () => {
    const [switchOn, setSwitchOn] = useState(false);

    const handleSwitchToggle = () => {
        setSwitchOn(prevState => !prevState);
    };

    return (
        <div className={`${s.switch} ${switchOn ? s.switchOn : ''}`} onClick={handleSwitchToggle}>
            <input type="checkbox" name="switch" className={s.checkbox} checked={switchOn} readOnly />
        </div>
    );
};

export default Switch;

