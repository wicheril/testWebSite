import React, { Component } from 'react';
import {PrintFullName, UserWelcome} from './components/userGreetings';
import {users} from "./data/Users";
import {User} from "./components/User";

class EnterInformation extends Component {
    /*Состояние каких компонентов мы отслеживаем.*/
    state = {
        firstname: "",
        surname: "",
        firstnameError: "",
    };
    
    validateName = (firstname: string) => {
        const regex = /[A-Za-z]{3,}/;
        
        return !regex.test(firstname)
            ? "The name must contain at least three letters. Numbers and special characters are not allowed."
            : "";
    }
    
    onFirstnameBlur = () => {
        const {firstname} = this.state;
        const firstnameError = this.validateName(firstname);
        return this.setState({
            firstnameError
        });
    }
        
    
    onFirstNameChanged = (event: { target: { value: any; }; }) =>
        this.setState({
            firstname: event.target.value
        });
    
    onSurnameChanged = (event: { target: { value: any; }; }) =>
        /*Здесь происходит обновление состояния объекта*/
        this.setState({
            surname: event.target.value
        });


    render() {
        return (
            <div>
                <label>
                    First name:
                    <input 
                        type={"text"}
                        name={"firstname"}
                        onChange={this.onFirstNameChanged} 
                        onBlur={this.onFirstnameBlur}
                    />
                </label>
                <input type={"text"} name={"surname"} onChange={this.onSurnameChanged}/>
                <PrintFullName firstname={this.state.firstname} surname={this.state.surname}/>
                <UserWelcome firstname={this.state.firstname}/>
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <User user={ users[0] }/>
            <User user={ users[1] }/>
        </div>
    )
}

export default App;
