import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


class Nav extends Component {
    state = {  }
    render() { 
    return (  
            
    <div className="containerNav">   

       <nav>
           
                <ul>
                <li><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/mycart'>Mycart</NavLink></li>
                </ul>
           
       </nav>

   </div>

        );
    }
}
 
export default Nav;