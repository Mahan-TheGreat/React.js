import React from 'react';
import { useHistory } from 'react-router';
import '../App.css'

import ShopCart from './ShopCart';

const ProductDetailsCard = (props) => {
    const history = useHistory();
    const GoBack = () => {
        history.push({pathname: '/'});
    }
    const item = {
        id: props.product.id,
        img: props.product.img,
        name: props.product.name,
        price: props.product.price,
        reviews: props.product.reviews
      }
    const AddToCart = () => {  
        ShopCart.unshift(item)
    }
  
 
  
      
    return (  
         
        <div className="productDetailsCard">
         <button onClick={GoBack}>Go Back</button>   

         <div className="productDetails">
        <img src={props.product.img}  alt="ProductDetails" />
        <h1 id="key">Name: {props.product.name}</h1>
        <h3 id="label">Price: {props.product.price}</h3>
        <h4>Product Description</h4>
         <button onClick={AddToCart}>Add To Cart</button> 
        </div>

        

     </div>
    );

   
}
 
export default ProductDetailsCard;