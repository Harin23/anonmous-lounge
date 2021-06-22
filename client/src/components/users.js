const Users = (props)=>{
    return ( 
        <div className="users">
            <div className="card-header bg-info mt-1 users-header">
                <h3>Active Users: {props.users.length}</h3>
                <button className="btn btn-primary" onClick={props.home}>Change Username</button>
            </div>
            <ul className="list-group list-group-flush" id="users">
                {props.users.map((user, i)=>{
                    return <li className="
                    list-group-item 
                    rounded-pill 
                    bg-info 
                    text-center
                    mt-1
                    overflow-auto" key={i}> {user.name}</li>
                })}
            </ul>
        </div>
    );
}
 
export default Users;