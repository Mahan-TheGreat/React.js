import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import '../App.css';

import ProductDetailsCard from './ProductDetailsCard';



class ProductDetails extends Component {
    state = { 
        product: this.props.location.state.product,
        addReview:false,
        review: '',
        reviews: this.props.location.state.product.reviews,
        Ratings: 0,
        Hover: 0    
     }
     
     Product = this.props.location.state.product

      
          
     WriteReview = () => {
        
         if(this.state.addReview===false){
           
         this.setState({
             addReview:true
         })
        }else{
            this.setState({
                addReview:false
            })
        }
     }

     ChangeReview = (event) => {
         this.setState({
             review: event.target.value
         })
      }

       
    

 
    render() { 
        
        const RatingDraw =[...Array(5)].map((star,i)=> {
            const ratingValue = i + 1
             return  <li 
               key= {i}
               className = 'Star'
               value={ratingValue}
               onClick={()=>{  this.setState ( { Ratings: ratingValue } ) } }
              >
    
               < FaStar
                color= {ratingValue <= ( this.state.Hover  || this.state.Ratings) ? 'goldenrod' : '#fff'}
                onMouseEnter={()=>{   this.setState ( { Hover: ratingValue  } ) } }
                onMouseLeave={()=>{   this.setState ( { Hover: 0  } ) } }  
                key= {i}
                size= {50}
                                   
                />
    
               </li>
                }) 
            
            const RDraw = RatingDraw.map((item, i)=>{
                const Color = item.props.children.props.color
                return <li 
                key= {i}
                className = 'Reviewed-Star'
               >
     
                < FaStar
                 color= {Color}
                 key= {i}
                 size= {40}
                                    
                 />
     
                </li>
                 }) 
            

             const  SubmitReview = (event) =>{
                    event.preventDefault()
                    
                    var review = this.state.review
                    const Reviews = this.state.reviews
                    Reviews.unshift([  review, RDraw]) 
                    this.setState({
                          reviews: Reviews  
                        })            
                        return this.state.reviews
                     }
              
                      
           
        var  ReviewDraw = this.state.reviews.map(item =>{
             return <li key={this.state.reviews.indexOf(item)}>
                 <h3 >{item[0]} </h3>
                   <div className="Ratings">
                     <ol >
                         {item[1]}
                     </ol>
                 </div>
             </li>
           })
          
        
            
        var AddReview
      
        if (this.state.addReview === true){
           
            AddReview = <div className="addReview">
                <form onSubmit={SubmitReview}>
               <label>Review the product:</label>
               <textarea 
               placeholder="Write what you think about this product."
               onChange={this.ChangeReview}
               value={this.state.Review}
               />

               <div className='RatingStar'>
                <h1>Rate the Product</h1>
                <ol>
                {RatingDraw}
                </ol>
               </div>
               
               <input type='submit'/>
               <input type='reset' />
               </form>

           </div>
        }
        var noReviews
        if(this.state.reviews.length===0){
            noReviews = <h3>No Reviews yet</h3>
        }
       return(
     
       
           <div>
              <ProductDetailsCard product={this.Product}/>
              <div className='reviewDraw'>
                  <h1>Reviews</h1>
                  {noReviews}
                  <ul>
                  {ReviewDraw}
                  </ul>
              </div>
              <div className='addReview'>
              <button onClick={this.WriteReview}>Add a Review</button>
              {AddReview}
              </div>
             
           </div>
         
       );
    }
}
 
export default ProductDetails;

