import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './components/Chat';
import Home from './components/Home';
import { connect } from 'react-redux';

function App(username) {
  return(
    <Router>
      <div className="page-content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
            <Route path="/chat">
              <Chat/>
            </Route>
        </Switch>
      </div>
    </Router>
  )
  
}

const mapStateToProps = state =>{
  return {
      username: state.username,
  }
}

export default connect(
  mapStateToProps
)(App);
