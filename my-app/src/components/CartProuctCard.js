import React from 'react';

const CartProductCard = (props) => {

  

  return ( 
   
      <div className="draw">

            <img src={props.obj.img} alt="fuck" />
            <h3 id="key">Name: {props.obj.name}</h3>
            <h3 id="label">Price: {props.obj.price}</h3>
            
            

      </div>

     );
}
 
export default CartProductCard;