import React from 'react';
import {useState} from "react";
import MyButton from "../../UI/button/MyButton";
import UsersList from "./usersList";


function Users() {

    const [users, setUsers] = useState([
        {id: 0, username: "Valera", testData: "01-01-21", speed: 280, accuracy: 99},
        {id: 1, username: "SpiderMan", testData: "02-02-21", speed: 270, accuracy: 88},
        {id: 2, username: "Mira", testData: "03-03-21", speed: 260, accuracy: 77},
        {id: 3, username: "Samantha", testData: "04-04-21", speed: 250, accuracy: 99},
        {id: 4, username: "Patricia Lebsack", testData: "05-05-21", speed: 240, accuracy: 88},
        {id: 5, username: "Oleg", testData: "06-06-21", speed: 230, accuracy: 77},
        {id: 6, username: "Mrs. Dennis Schulist", testData: "07-07-21", speed: 220, accuracy: 99},
        {id: 7, username: "Kostya_888", testData: "08-08-21", speed: 210, accuracy: 88},
        {id: 8, username: "0", testData: "0", speed: 0, accuracy: 0},
    ]);


    return (
        <div className="App">
            <UsersList users={users} title={"Рейтинг"} subtitle={"Статистика за неделю"}/>
            <div className="users_form">
                <div className="us_btn">
                    <MyButton>Тестирование</MyButton>
                </div>

                <div className="us_txt">
                    Пройди тест скорости печати, чтобы войти в рейтинг за этот месяц и получить сертификат
                </div>

            </div>
        </div>
    )
}



export default Users;