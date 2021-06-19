const Messages = (props) => {
    return ( 
        <div className="container-fluid h-100 w-100 overflow-auto text" id="displayMessages">
            {props.messages.map((message, i)=>{
                return <span className="d-block p-1 my-1 bg-info text-dark" id='message' key={i}>{message}</span>
            })}
        </div>
    );
}

export default Messages;