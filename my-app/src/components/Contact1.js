import React, { Component } from 'react';
import '../App.css';
import {FaFacebookSquare , FaTwitterSquare, FaEnvelope} from 'react-icons/fa';

class Contact1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-contact1">
                <h1>Contact Us</h1>
                 <FaFacebookSquare
                 size = '50'
                 color = '#3b5998'
                 />
                <FaTwitterSquare 
                size = '50'
                color ='#326ada'
                />
                <FaEnvelope
                size = '50'
                color = '#3b5998'
                />
             </div>
         );
    }
}
 
export default Contact1;