import React, { useState, useEffect } from 'react';
import Input from './Input';
import Users from './Users';
import { connect } from 'react-redux';
import { getUsers, getMessage } from '../redux';
import {registerNewuser, listenForUsers, listenForMessages, sendMessageSocket} from '../controller/socketController';
import Messages from './Messages';
import { Redirect, useLocation  } from "react-router-dom";
import socketIOClient from "socket.io-client";
import {HOSTNAME} from '../utils/host'; 

let socket = null;

const Chat = ({users, getUsers, messages, getMessage}) => {
    const [redirect, setRedirect] = useState(false);
    useEffect(()=>{
        if(!!localStorage.getItem('username')){
            registerNewuser(socket, {
                name: localStorage.getItem('username'), 
            });
            listenForUsers(socket, getUsers);
            listenForMessages(socket, getMessage);
        }else{
            setRedirect(true);
        };
    }, [getUsers, getMessage]);
    if(useLocation().pathname === "/chat" && socket === null){
        socket = socketIOClient(HOSTNAME);
    };
    const sendMessage = (e) => {
        e.preventDefault();
        sendMessageSocket(socket, e.target[0].value);
        e.target[0].value=null;
    };
    if(redirect){
        return(<Redirect to='/' />)
    }else{
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 bg-dark overflow-auto" id='active-users'><Users users={users.users}/></div>
                    <div className="col-8">
                        <div className="row bg-secondary" id='chat-display'><Messages messages={messages.messages}/></div>
                        <div className="row bg-secondary" id='send-message'><Input sendMessage={sendMessage}/></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        users: state.users,
        messages: state.messages
    }
}
 
const mapDispatchToProps = dispatch =>{
    return {
        getUsers: (users) => dispatch(getUsers(users)),
        getMessage: (message) => dispatch(getMessage(message))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);