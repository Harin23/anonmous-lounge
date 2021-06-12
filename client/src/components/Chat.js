import React, { useState, useEffect } from 'react';
import Input from './Input';
import Users from './Users';
import {registerNewuser} from '../controller/socketController';
import Messages from './Messages';
import { Redirect } from "react-router-dom";

const Chat = () => {
    const [redirect, setRedirect] = useState(false);
    useEffect(()=>{
        if(!!localStorage.getItem('username') && !!localStorage.getItem('profilePic')){
            registerNewuser({
                name: localStorage.getItem('username'), 
                pic: localStorage.getItem('profilePic')
            });
        }else{
            setRedirect(true);
        }
    }, [])
    if(redirect){
        return(<Redirect to='/' />)
    }else{
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 bg-dark" id='active-users'><Users/></div>
                    <div className="col-8">
                        <div className="row bg-secondary" id='chat-display'><Messages/></div>
                        <div className="row bg-secondary" id='send-message'><Input/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;