import React from 'react';
import './App.css';
import FormContainer from './FormContainer.js';
import Posts from './Posts';
import { Route, Switch, NavLink } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <nav>
        <NavLink exact to="/">Post</NavLink>
        <NavLink to="/formcontainer">FormContainer</NavLink>
      </nav>

      <Switch>
        <Route path="/" component={Posts}/>
        <Route path="/formcontainer" component={FormContainer}/>
      </Switch>
  
    </div>
      );
    }
    
    export default App;
