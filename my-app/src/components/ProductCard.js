import React from 'react';
import Product from "./Product";
import ProductList from "./ProductList";


const ProductCard  = (props) => {
    const MinPrice = props.minprice
    const MaxPrice = props.maxprice

   var ProductDraw = []
    const xProduct = ProductList.map(item => {
        if(MinPrice === 0 && MaxPrice === 0){
            ProductDraw.push(item)
        return <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} reviews={item.reviews}/>
    }else if(item.price>=MinPrice && MaxPrice>=item.price){
        ProductDraw.push(item) 
        return <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} reviews={item.reviews}/>
      }
      return this
    }
    )
    var EmptyDraw
    if (ProductDraw.length === 0){
    EmptyDraw = <div><h1>Sorry, No such Item were found.</h1></div>
    }
    return (  
      <div>
       {EmptyDraw}
       {xProduct}  
      </div>
    );
 
}
 
export default ProductCard ;