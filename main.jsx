<<<<<<< HEAD
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
<<<<<<< HEAD
<Router history={hashHistory,browserHistory}>
=======
<Router history={browserHistory}>
>>>>>>> 2e93803d1953716647d4a65e7b0784697df93d6b
              <Route path="/" component={MainComponent} >
              <IndexRoute component={Login}/>
            <Route path="/home" component={Homecomponent}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
               <Route path="/Register" component={Register}/>
               <Route path="/Login" component={Login}/>
            <Route path="/Savednewsmap" component={Savednewsmap}/>
              </Route>

</Router>,document.getElementById('content'));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/style.css';
export default class MainComponent extends React.Component{

  render() {
    return(
      <div className="MainComponent">
       
      </div>
  );
  }
}
ReactDOM.render(
  <h1>Hello, Raghu</h1>,
  document.getElementById('content')
);
>>>>>>> e6ab4da0f7c640a24f5d47fb9c7b383db2d7cc21
