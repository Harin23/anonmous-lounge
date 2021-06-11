import { useEffect } from 'react';
import { getMessage } from '../redux';
import { connect } from 'react-redux';
import {listenForMessages} from '../controller/socketController';

const Messages = ({messages, getMessage}) => {
    useEffect(()=>{
        listenForMessages(getMessage);
    }, [getMessage])
    return ( 
        <div className="container-fluid h-100 w-100 bg-secondary overflow-auto text" id="displayMessages">
            {messages.messages.map((message, i)=>{
                return <span className="d-block rounded-pill p-1 my-1 bg-info text-dark" id='message' key={i}>{message}</span>
            })}
        </div>
    );
}
 
const mapStateToProps = state =>{
    return {
        messages: state.messages,
    }
}
 
const mapDispatchToProps = dispatch =>{
    return {
        getMessage: (message) => dispatch(getMessage(message))
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages);