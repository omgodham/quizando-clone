import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Games from "./Games";
import Footer from "./Footer";
import Login from "./Login";
import Signup from "./Signup";
function App() {
  return (
    <div className="App">
    <Router>
      <Switch >
      <Route path="/signup">
      <Navbar />
        <Signup />
        <Footer />
      </Route>
      <Route path="/login">
      <Navbar />
        <Login />
        <Footer />
      </Route>
      <Route path="/">
      <Navbar />
      <Home />
      <Games />
      <Footer />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
