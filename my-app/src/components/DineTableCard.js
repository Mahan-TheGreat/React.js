import React from 'react';
import Product from "./Product";
import ProductList from "./ProductList";


const DineTableCard  = (props) => {
    
  const MinPrice = props.minprice
  const MaxPrice = props.maxprice
    
    var DineDraw =[]
    const xProduct = ProductList.map(item => {
      if(item.category==='Dine'){
        if(MinPrice === 0 && MaxPrice === 0){
          DineDraw.push(item)
        return <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} reviews={item.reviews}/>
      }else if(item.price>=MinPrice && MaxPrice>=item.price){ 
        DineDraw.push(item)
        return <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} reviews={item.reviews}/>
      }}
      return this
    }
    )
    var EmptyDraw
    if(DineDraw.length === 0){
      EmptyDraw = <div><h1>Sorry, No such Item were found.</h1></div>
    }
  
    return (  
        <div>
          {xProduct}
          {EmptyDraw}
        </div>
   
    );
 
}
 
export default DineTableCard ;