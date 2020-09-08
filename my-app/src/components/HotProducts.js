import React from 'react';
import Product from "./Product";
import ProductList from "./ProductList";


const HotProducts  = () => {
    
   
    const xProduct = ProductList.map(item => {
      
    return <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} reviews={item.reviews} />
    }
    )
  
    return (  
        
       xProduct
    );
 
}
 
export default HotProducts ;