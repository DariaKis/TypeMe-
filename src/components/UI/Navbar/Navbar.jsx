import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <div className="navbar__links__btn">
                    <Link to={"/"}><MyButton>TypeMe!</MyButton></Link>
                </div>
                <div className="navbar__links__link">
                    <Link to="/Text">Тестирование</Link>
                    <Link to="/training">Обучение</Link>
                    <Link to="/users">Пользователи</Link>
                    <Link to="/login">Регистрация</Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;