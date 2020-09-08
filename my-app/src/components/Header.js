import React, { Component } from 'react';
import '../App.css';
import Logo from './Logo';
import Banner from './Banner';
import Contact1 from './Contact1';

class Header extends Component {
    state = { 
      
     }
    render() { 
        return(
      <div className="containerHeader">
        <Logo/>
        <Banner/>
        <Contact1/>
      </div>
      )
    }
}
 
export default Header ;