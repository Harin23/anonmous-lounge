import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';
import Loading from './Loading';
import {listenForUsers} from '../controller/socketController';

const Users = ({users, fetchUsers})=>{
    useEffect(()=>{
        if(users.loaded){
            fetchUsers();
        }else{
            listenForUsers(fetchUsers);
        }
    }, [fetchUsers, users.loaded])
    return users.loading ? (
        <Loading/>
    ) : ( 
        <div className="users">
            <ul className="list-group list-group-flush bg-light" id="users">
                {users.users.map((user, i)=>{
                    return <li className="list-group-item bg-transparent" key={i}>{user}</li>
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
        fetchUsers: (name) => dispatch(fetchUsers(name))
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);