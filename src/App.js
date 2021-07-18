import './App.css';
import Create from './components/Create/Create';
import List from './components/List/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
            <Home></Home>
          </Route>
        <Route path="/list">
          <List></List>
        </Route>
        <Route path="/create">
          <Create></Create>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
