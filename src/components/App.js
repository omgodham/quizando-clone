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
import HowToPlay from './Footer/HowToPlay';
import FAQs from './Footer/FAQs';
import Terms from './Footer/Terms';
import Cookies from './Footer/Cookies';
import Privacy from './Footer/Privacy';
import ContactUs from './Footer/ContactUs';
import PrivateEventsInfo from './Footer/PrivateEventsInfo';
import Profile from "./Profile/Profile";

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
      <Route exact path="/how-to-play" component={HowToPlay}/>
      <Route exact path="/terms-and-conditions" component={Terms}/>
      <Route exact path="/faqs" component={FAQs}/>
      <Route exact path="/cookies" component={Cookies}/>
      <Route exact path="/privacy-policy" component={Privacy}/>
      <Route exact path="/contact-us" component={ContactUs}/>
      <Route exact path="/private-events-info" component={PrivateEventsInfo}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/:name" component={PartnerInfo}/>
      <Route exact path="/classics/:id" component={GameInfo}/>
      <Route exact path="/classics/play/:id" component={QuizPage}/>
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
