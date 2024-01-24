import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import My_Account from './My_Account.js';
import Forms from './Forms';
// import Products from './Components/Products.js';
// import ProductList from './Components/ProductList.js';
// import Header from './Components/Header.js';
// import NotFound from './Components/NotFound.js';
import '../index.css'

class App extends Component {
   render () {
    return (
   <Router>
      <div>
       {/* <Switch> */}
        <Route exact path = '/' Component={Home}/>
        <Route path='/about/:id/:name' Component={About}/>
        <Route path='/contact' Component={Contact}/> 
        <Route path='/my_account' Component={My_Account}/>
        <Route path='/Forms'  Component={Forms}/> 
        {/* <Route path='/Products' Component={Products}/> 
        <Route path='/ProductList' Component={ProductList}/> 
        <Route path='/Header'  Component={Header}/> 
        <Route path='/NotFound' Component={NotFound}/>  */}
      {/* </Switch> */}
      </div>
    </Router>
    );
    
   }
 
}
export default App



