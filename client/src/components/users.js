import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersAction } from '../actions/usersAction';

class users extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="users">

            </div>
         );
    }
}

const mapStateToProps = state =>({
    users: state.users
});
 
export default connect(mapStateToProps, { usersAction })(users);