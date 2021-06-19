const Input = (props) => {
    return ( 
        <div className="container-fluid h-100 w-100 overflow-auto px-0">
            <form onSubmit={props.sendMessage}>
                <input className='h-100 w-100' type="text" maxLength="80" required/>
            </form>
        </div>
     );
}
 
export default Input;