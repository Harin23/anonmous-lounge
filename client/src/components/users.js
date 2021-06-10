import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersSuccess } from '../redux';
import Loading from './Loading';
import {listenForUsers} from '../controller/socketController';

const Users = ({users, getUsers})=>{
    useEffect(()=>{
        listenForUsers(getUsers);
    }, [getUsers])
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
        getUsers: (users) => dispatch(getUsersSuccess(users))
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);