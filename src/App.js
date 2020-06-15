import React from 'react';
import './App.css';

import {
  Route,BrowserRouter as Router
} from 'react-router-dom';
import Prva from './components/Prva';
import Druga from './components/Druga';
import Izradio from './components/Izradio';

function App() {
  return (
    <div className="App">
 
 <Router>

 <Route exact path="/"component={Prva}></Route>
  <Route path="/Druga" component={Druga}></Route>
  <Route path="/Izradio" component={Izradio}></Route>

 </Router>

    </div>

    
  );
}

export default App;
