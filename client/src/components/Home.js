import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

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
            <div className="home-component">
                <form onSubmit={setUsernameSumbit}>
                    <label htmlFor="">
                        Username: <input type="text"/>
                        <button type="submit">Chat</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default Home;