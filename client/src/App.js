import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import AddNote from './Pages/AddNote';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>

          <Route exact path="/addNote">
            <Navbar />
            <AddNote />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
