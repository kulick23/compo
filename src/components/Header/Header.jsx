import React from 'react';
import s from './Header.module.css';
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderFalling from "./HeaderFalling/HeaderFalling";

const Header = (props) => {
    return (
        <div className={s.header}>
          <HeaderMain getTotalPrice = {props.getTotalPrice}/>
            <HeaderFalling />
        </div>
    );
};

export default React.memo(Header);
