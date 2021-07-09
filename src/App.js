import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from './components/NotFound';
import ArenaMarket from './components/ArenaMarket';
// import ProductComponentfake from "./components/Test"


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        {/* <Route path="/rrr" exact component={ProductComponentfake}/> */}
        <Route path="/home" exact component={ArenaMarket} />
        <Route path="/login" exact component={AdminLogin}/>
        <ProtectedRoute path="/adminPanel" exact component={AdminPanel} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>


  );
}

export default App;
