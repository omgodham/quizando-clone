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
import Private from './Private/Private';
import GameInfo from "./Games/GameInfo";
import QuizPage from "./Games/QuizPage";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch >
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/live" component={Live} />
      <Route exact path="/classics" component={Classics}/>
      <Route exact path="/notokens" component={FreeToPlay}/>
      <Route exact path="/private-events" component={Private}/>
      <Route exact path="/hosts" component={Partners}/>
      <Route exact path="/:name" component={PartnerInfo}/>
      <Route exact path="/classics/:id" component={GameInfo}/>
      <Route path="/classics/play/:id" component={QuizPage}/>
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
