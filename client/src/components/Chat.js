import { useEffect } from 'react';
import Input from './Input';
import Users from './Users';
import {registerNewuser} from '../controller/socketController';

const Chat = () => {
    useEffect(()=>{
        registerNewuser(localStorage.getItem('username'));
    }, [])
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 bg-info" id='active-users'><Users/></div>
                <div className="col">
                    <div className="row bg-danger" id='chat-display'>a</div>
                    <div className="row bg-warning" id='send-message'><Input /></div>
                </div>
            </div>
        </div>
    );
}

export default Chat;