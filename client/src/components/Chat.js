import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../redux';
import Loading from './Loading';
import Users from './Users';

const Chat = ({username, setUsername}) => {
    useEffect(()=>{
        setUsername(localStorage.getItem('username'));
    }, [setUsername])
    return  username.loading ? (
        <Loading/>
    ) : ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 bg-info" id='active-users'><Users/></div>
                <div className="col">
                    <div className="row bg-danger" id='chat-display'>a</div>
                    <div className="row bg-warning" id='send-message'>{localStorage.getItem('username')}:</div>
                </div>
            </div>
        </div>
    );
}
 
const mapStateToProps = state =>{
    return {
        username: state.username,
    }
}
 
const mapDispatchToProps = dispatch =>{
    return {
        setUsername: (name) => dispatch(setUsername(name))
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);