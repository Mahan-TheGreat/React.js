import React from 'react';
import Product from "./Product";
import ProductList from "./ProductList";


const ChairCard  = (props) => {
 
    const MinPrice = props.minprice
    const MaxPrice = props.maxprice

    var ChairDraw = []
    const xProduct = ProductList.map(item => {
      if(item.category==='Chair'){
        if(MinPrice === 0 && MaxPrice === 0){
        ChairDraw.push(item)
        return <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} reviews={item.reviews} />}  
      else if(item.price>=MinPrice && MaxPrice>=item.price){ 
        ChairDraw.push(item)
        return <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} reviews={item.reviews} />
      }}
      return this
      
    }
     )
     var EmptyDraw
    if (ChairDraw.length === 0){
    EmptyDraw = <div><h1>Sorry, No such Item were found.</h1></div>
    }
  
    return (  
        <div>
           {xProduct} 
           {EmptyDraw}
        </div>
       
    );
 
}
 
export default ChairCard ;