import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ProductDraw from './components/ProductDraw';
import CartDraw from'./components/CartDraw';
import ProductDetails from './components/ProductDetails';



function App() {

  return (
    <BrowserRouter>
    <div  className="App">
    
      <Header/>
      <Nav/>
      <Route path='/productdetails' component={ProductDetails}/>
      <Route  path='/mycart' component= {CartDraw} />  
      <Route exact path='/' component={ProductDraw}/>
    </div>
    </BrowserRouter>
  );

}

export default App;
