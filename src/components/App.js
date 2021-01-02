import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./HomeScreen/Home";
import Games from "./Games/Games";
import Footer from "./Footer/Footer";
import Login from "./LoginSignUp/Login";
import Signup from "./LoginSignUp/Signup";
import Live from "./Live/Live";
import Classics from "./Classics/Classics";
import FreeToPlay from "./FreeToPlay/FreeToPlay";
import Partners from "./Partners/Partners";
import PartnerInfo from "./Partners/PartnerInfo";

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
      <Route path="/live">
      <Navbar />
      <Live />
        <Footer />
      </Route>
      <Route path="/classics">
      <Navbar />
      <Classics />
        <Footer />
      </Route>
      <Route path="/notokens">
      <Navbar />
      <FreeToPlay />
        <Footer />
      </Route>
      <Route path="/hosts">
      <Navbar />
      <Partners />
        <Footer />
      </Route>
      <Route path="/:name" component={PartnerInfo}/>
      {/* <Navbar />
      <PartnerInfo  />
        <Footer />
      </Route> */}
      <Route exact path="/">
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
