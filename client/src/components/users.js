const Users = (props)=>{
    return ( 
        <div className="users">
             <div className="card-header text-white">
                 <h3>Active Users: {props.users.length}</h3>
             </div>
            <ul className="list-group list-group-flush" id="users">
                {props.users.map((user, i)=>{
                    return <li className="
                    list-group-item 
                    rounded-pill 
                    bg-info 
                    text-center
                    mt-1" key={i}> {user.name}</li>
                })}
            </ul>
        </div>
    );
}
 
export default Users;