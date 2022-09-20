import React from "react";

/*TODO:Решить как экспортировать классы и далее использовать их функции*/

export const PrintFullName = (props:any) => {
    return (
        <h1>Hello, dear {props.firstname} {props.surname}</h1>
    );
}

export const UserWelcome = ({firstname}:any) => {
    return (
        <h1>Hello, {firstname}</h1>
    )
}
