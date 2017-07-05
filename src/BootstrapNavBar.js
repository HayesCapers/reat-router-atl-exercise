import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class BootstrapNavBar extends Component{
  render(){
    return(
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">WebSiteName</a>
			    </div>
			    <ul className="nav navbar-nav">
			    	<li><Link to='/'>Home</Link></li>
			      	<li><Link to="/one">Atlanta</Link></li>
			      	<li><Link to="/two">Images</Link></li>
			      	<li><Link to="/three">Mayor Message</Link></li>
			      	<li><Link to="/four">About</Link></li>
			    </ul>
			  </div>
			</nav>  
	)
  }
}

export default BootstrapNavBar