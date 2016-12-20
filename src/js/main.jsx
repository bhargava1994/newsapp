import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import Savednewsmap from './components/Savednewsmap';
import Homecomponent from './components/Homecomponent'
import Register from './components/Register'
import Login from './components/Login'
class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>

  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={hashHistory}>
              <Route path="/" component={MainComponent} >
              <IndexRoute component={Homecomponent}/>
            <Route path="/home" component={Homecomponent}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
               <Route path="/Register" component={Register}/>
               <Route path="/Login" component={Login}/>
            <Route path="/Savednewsmap" component={Savednewsmap}/>
              </Route>

</Router>,document.getElementById('content'));
