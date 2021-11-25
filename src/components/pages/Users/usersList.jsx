import React from 'react';
import UsersItem from "./usersItem";
import classes from "./userList.module.css"

const UsersList = ({users, title, subtitle}) => {
    return (
        <div>
            <h1 className={classes.title}>
                {title}
            </h1>
            <h3 className={classes.subtitle}>
                {subtitle}
            </h3>
            <div className={classes.info}>
                <div className={classes.info1}>Позиция</div>
                <div className={classes.rate}>
                    <div className={classes.rate1}>Скорость, зн./мин</div>
                    <div className={classes.rate2}>Точность, %</div>
                </div>
            </div>
            {users.map((user) =>
                <UsersItem number={user.id + 1} user={user} key={user.id}/>
            )}

        </div>
    );
};

export default UsersList;