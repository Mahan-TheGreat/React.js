import React, { Component } from 'react';
import '../App.css';                

class Banner extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-welcomeBanner">
                  <h1 id="tag"> Wonder Decors </h1>
                  <h4 id="dcode"> Best choice for interiors </h4> 
            </div>
         );
    }
}
 
export default Banner;