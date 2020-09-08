import React, { Component } from 'react';
import '../App.css';

class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-mainLogo">
            <img src={require('../logo/instagram_profile_image.png')} alt="" height="210" width=" 230" responsive="responsive"/>
            </div>
         );
    }
}
 
export default Logo;