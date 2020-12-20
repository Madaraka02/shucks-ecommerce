import React from 'react';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Advert from './Advert';
import Display from './Display';
import Men from './Men';
import Women from './Women';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sandals from './Sandals';
import Heels from './Heels';
import AllBoots from './AllBoots';
import Rubbers from './Rubbers';
import Payment from './Payment';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/checkout">
          <Header/>
            <Checkout />
            {/* <Footer/> */}
          </Route>
          <Route path="/payment">
          <Header/>
            <Payment />
            <Footer/>
          </Route>
          <Route path="/Rubbers">
          <Header/>
            <Rubbers />
            <Footer/>
          </Route>
          <Route path="/AllBoots">
          <Header/>
            <AllBoots />
            <Footer/>
          </Route>
          <Route path="/Heels">
          <Header/>
            <Heels />
            <Footer/>
          </Route>
          <Route path="/Sandals">
          <Header/>
            <Sandals />
            <Footer/>
          </Route>
          <Route path="/Men">
          <Header/>
            <Men/>
            <Footer/>
          </Route>
          <Route path="/Women">
          <Header/>
            <Women/>
            <Footer/>
          </Route>
          <Route path="/">
          <Header/>
          <Advert/>
          <Display/>
          <Footer/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
