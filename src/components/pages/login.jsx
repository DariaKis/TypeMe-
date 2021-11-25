import React from 'react';
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import classes from "./login.module.css"

const Login = () => {
    return (
        <div className={classes.cover}>
            <h1 className={classes.title}>Регистрация</h1>
            <div className={classes.form}>
                <form>
                    <MyInput type="text" placeholder="Ваше имя"/><br/>
                    <MyInput type="mail" placeholder="Эл. почта"/><br/>
                    <MyInput type="password" placeholder="Пароль"/><br/>
                    <div className={classes.checkbox}>
                        <input type="checkbox" name="enabled" />
                        <span className={classes.txt}>Я соглашаюсь с условиями использования и политикой конфиденциальности TypeMe!</span><br/><br/>

                        <input type="checkbox" name="enabled" />
                        <span className={classes.txt}>Получать наши новости</span><br/>

                    </div>
                    <MyButton>
                        <div className={classes.btn}>
                            Зарегистрироваться
                        </div>
                    </MyButton>
                </form>
            </div>

        </div>
    );
};

export default Login;