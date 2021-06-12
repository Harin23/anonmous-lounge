import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './components/Chat';
import Home from './components/Home';

function App() {
  return(
    <div>
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
    </div>
  )
}

export default App;
