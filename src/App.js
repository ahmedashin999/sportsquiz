import React from 'react';
 import Home from './components/pages'
 import Blog from './components/Blog'
 import Utn from './components/UTN'
 import Tennis from './components/Tennis';
 import Soccer from './components/Soccer';
 import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
 

 const App=()=> {
  
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/sports-grading-blog" component={Blog}/>
        <Route path="/help" component={Utn}/>
        
        <Route path="/get-your-utn" component={Tennis}/>
        <Route path="/get-your-usn" component={Soccer}/>
      </Switch>

    </Router>
  );
}

   
export default App