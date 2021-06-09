const Home = () => {
    const setUsernameSumbit=(e)=>{
        e.preventDefault();
        localStorage.setItem('username', e.target[0].value)
    }
    return( 
        <div className="home-component">
            <form onSubmit={setUsernameSumbit}>
                <label htmlFor="">
                    Username: <input type="text"/>
                    <button type="submit">Start</button>
                </label>
            </form>
        </div>
    );
}

export default Home;