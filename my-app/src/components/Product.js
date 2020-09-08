import React from 'react';
import ShopCart from './ShopCart';
import {useHistory} from 'react-router-dom';




function Product(props) {
  
 
  const item = {
    id: props.id,
    img: props.img,
    name: props.name,
    price: props.price,
    reviews: props.reviews
  }
  const AddToCart = () => {  
    ShopCart.unshift(item)
}

  const history = useHistory();
  const GoProductDetails = () => {
    
    history.push({
      pathname: '/productdetails',
      state: {  
      product: item,
      addReview:false,
      review: '',
      reviews: props.reviews
    }
    })
  }
  
  
    return ( 
       <div className="product">
         
        <img src={props.img}  onClick={GoProductDetails}alt="fuck" />
       <h2 id="key"> {props.name}</h2>
       <h3 id="label">Price: Nrs {props.price}</h3>
       <button type='submit' onClick={AddToCart}>AddToCart</button>
       
       </div>
     );
}
 
export default Product;
 
