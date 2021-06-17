import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import logo from "../assets/logo192.png"

const Home = () => {
    const [redirect, setRedirect] = useState(false);
    const setUsernameSumbit=(e)=>{
        e.preventDefault();
        localStorage.setItem('username', e.target[0].value)
        setRedirect(true);
    }
    if(redirect){
        return(<Redirect to='/chat' />)
    }else{
        return( 
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to the Lounge! Please enter your username to continue.</h1>
                <form onSubmit={setUsernameSumbit}>
                    <label htmlFor="">
                        Username: <input type="text"/>
                        <button className="btn btn-color text-white mx-2" type="submit">Chat</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default Home;