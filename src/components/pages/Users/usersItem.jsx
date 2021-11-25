import React from 'react';

const UsersItem = (props) => {
    return (
        <div className="users">
            <div className="user_content">
                <div className="user_first">
                    <div className="users_strong">{props.number}.</div>
                    <div className="user_icon">
                        <img src="http://s1.iconbird.com/ico/1012/ColobrushIcons/w256h2561350817780Userman.png"/>
                    </div>
                    <div className="user_name">
                        <strong>{props.user.username}</strong>
                    </div>
                </div>

                <div className="user_info">
                    <div className="user_info1">
                        {props.user.speed}
                    </div>
                    <div className="user_info2">
                        {props.user.accuracy}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UsersItem;