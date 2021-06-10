import {sendMessageSocket} from '../controller/socketController';
const Input = () => {
    const sendMessage=(e)=>{
        e.preventDefault();
        sendMessageSocket(e.target[0].value);
        e.target[0].value=null;
    }
    return ( 
        <div className="input">
            <form onSubmit={sendMessage}>
                <input type="text" />
                <button type="submit">Send</button>
            </form>
        </div>
     );
}
 
export default Input;