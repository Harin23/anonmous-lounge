import {sendMessageSocket} from '../controller/socketController';
const Input = () => {
    const sendMessage=(e)=>{
        e.preventDefault();
        sendMessageSocket(e.target[0].value);
        e.target[0].value=null;
    }
    return ( 
        <div className="container-fluid h-100 w-100 overflow-auto px-0">
            <form onSubmit={sendMessage}>
                <input className='h-100 w-100' type="text" maxLength="80" />
            </form>
        </div>
     );
}
 
export default Input;