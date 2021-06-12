import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const Home = () => {
    const [redirect, setRedirect] = useState(false);
    const setUsernameSumbit=(e)=>{
        e.preventDefault();
        localStorage.setItem('username', e.target[0].value)
        setRedirect(true);
    }
    const responseGoogle = (response) => {
        console.log(response);
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
                <GoogleLogin
                    clientId="1032729763324-i5u1do7vjn595cq7ou7f02ve60esig0k.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'Strict'}
                />
            </div>
        );
    }
}

export default Home;