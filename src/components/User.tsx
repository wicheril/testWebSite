import React from "react";
import {IUser} from "../models";

interface UserProps {
    user: IUser
}

export const User = (props: UserProps) => {
    return (
        <div>
            Hi, im user, my name is { props.user.name }
            <br/>
            { props.user.id }
            <br/>
            {props.user.username}
        </div>
    )
}