import React from 'react';
import s from './Footer.module.css'
import Contacts from "./Contacts/Contacts";
import Category from "./Category/Category";
import Basement from "./Basement/Basement";
const Footer = () => {
    return (
        <div className={s.footer}>
            <Contacts />
            <Category />
            <Basement />
        </div>
    )
}

export default Footer;