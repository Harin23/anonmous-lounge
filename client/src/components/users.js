import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersSuccess } from '../redux';
import {listenForUsers} from '../controller/socketController';

const Users = ({users, getUsers})=>{
    useEffect(()=>{
        listenForUsers(getUsers);
    }, [getUsers])
    return ( 
        <div className="users">
             <div className="card-header text-white">
                 <h5>Active Users:</h5>
             </div>
            <ul className="list-group list-group-flush" id="users">
                {users.users.map((user, i)=>{
                    return <li className="list-group-item rounded-pill bg-info text-center" key={i}>{user}</li>
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
        users: state.users,
    }
}
 
const mapDispatchToProps = dispatch =>{
    return {
        getUsers: (users) => dispatch(getUsersSuccess(users))
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);