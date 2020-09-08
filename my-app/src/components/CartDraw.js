import React, { Component } from 'react';
import CartProductCard from './CartProuctCard';
import ShopCart from './ShopCart';


class CartDraw extends Component {
  state = { 
    message: "",
    cart : ShopCart
   }
  render() { 
  
    var Message= this.state.message
    const EmptyMessage = ""
    const EmptyCartMessage = "Your Cart is Empty"
    if(this.state.cart.length === 0 && this.state.message===""){
      Message = EmptyCartMessage
      
    }
    
    const CartScan = this.state.cart.map(Item => { 
      const index= this.state.cart.findIndex((item)=>{
        return  (item.id === Item.id)
        })
    
      const RemoveItem = ()=>{
    
          ShopCart.splice(index, 1)
                this.setState({
                  cart: ShopCart
                  })
                  
          if(ShopCart.length === 0 && this.state.message===EmptyMessage){
               
                this.setState(
                  {
                    message: EmptyCartMessage
                  }
                )
          }else if(ShopCart.length !== 0 && this.state.message===EmptyCartMessage){
                
                this.setState(
                  {
                    message: EmptyMessage
                  }
                )
              }
          } 
      const CartObject = {
              id: Item.id,
              img: Item.img,
              name: Item.name,
              price: Item.price,
            }

    
      return ( 
       
        <div className="product" key={Item.id}>
        <CartProductCard  obj= {CartObject}/>
        <button onClick={RemoveItem }>Remove</button>
        </div>   
       
          
       );
     })
    return ( 
      <div>
      <h1>{Message}</h1>
      {CartScan }
      </div>
      );
  }
}

export default CartDraw;


