var React = require('react');
var {Link} = require('react-router');
export default class NavBar extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-default navbar-fixed-top">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Savednewsmap">Savednews</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Register <span class="glyphicon glyphicon-log-in" aria-hidden="true"></span> </Link></li>
        </ul>
      </div>
     </nav>
   </div>
 );
}
}
