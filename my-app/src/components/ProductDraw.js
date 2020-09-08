import React, { Component } from 'react';
import ProductCard from './ProductCard';
import '../App.css';
import swal from 'sweetalert';

import ChairCard from './ChairCard';
import TableCard from './TableCard';
import CouchCard from './CouchCard';
import DineTableCard from './DineTableCard';
import HotProducts from './HotProducts';




class  ProductDraw extends Component {
    state = { 
      filter: false,
      gofilter:false,
      filterItems: {
        minprice: '' ,
        maxprice: '' ,
      },
      browse: false,
      item: {
        Chair: false,
        TVTable: false,
        Dine: false,
        Couch: false,
      },
     }
  
     
     
     
  AllProductDraw = () => {
      this.setState({
        browse: false,
        item: {
          Chair: false,
          TVTable: false,
          Dine: false,
          Couch: false,
         }
       })}

  ChairDraw = () => {
      this.setState({
       browse: true,
       item: {
         Chair: true,
         TVTable: false,
         Dine: false,
         Couch: false,
        }
   })}

    TableDraw = () => {
      this.setState({
       browse: true,
       item: {
         Chair: false,
         TVTable: true,
         Dine: false,
         Couch: false,
        }
      })}

     DineTableDraw = () => {
      this.setState({
       browse: true,
       item: {
         Chair: false,
         TVTable: false,
        Dine: true,
         Couch: false,
        }
      })}

     CouchDraw = () => {
      this.setState({
       browse: true,
       item: {
         Chair: false,
         TVTable: false,
         Dine: false,
         Couch: true,
        }
      })}

  ChangeMinPrice = (event) => {
        this.setState({
          filterItems:{ minprice: event.target.value,
                          maxprice: this.state.filterItems.maxprice}     
        })
  }
  
  ChangeMaxPrice = (event) => {
       this.setState({
         filterItems:{  minprice: this.state.filterItems.minprice,
                        maxprice: event.target.value}
          
       }) 
   }
    min = 0
     max = 0
  GoFilter = (event) => {
       event.preventDefault()
       this.min = parseInt(this.state.filterItems.minprice)
       this.max = parseInt(this.state.filterItems.maxprice )
     
       if(this.min>this.max){
          swal({
            title: "Error Detected!",
            text: "Minimum Price Must Be Less than Maximum",
            icon: "warning",
          })         
         }
         this.setState({
           gofilter: true
         })
   }

  FilterItems = () =>{
       
    if(this.state.filter===false){
      this.setState({
        filter: true
      }) 
    }else{
      this.setState({
        filter: false,
        gofilter:false,
        filterItems: {
          minprice: '',
          maxprice: ''
        }
      }) 
    }
    
    }  
    
    render() { 
      var FilterDraw
      if(this.state.filter===true){
         FilterDraw =  <div>
           
         <form onSubmit={this.GoFilter}>
         <ul>

          <li>
            <label>Min Price</label>
            <input 
             type="number"
             name="MinPrice" 
             value={this.state.filterItems.minprice} 
             onChange={this.ChangeMinPrice}/>
          </li>

          <li>
            <label>Max Price</label>
            <input 
             type="number" 
             name="MaxPrice" 
             value={this.state.filterItems.maxprice} 
             onChange={this.ChangeMaxPrice}/>
          </li>

           <li><button type='submit'>Filter</button></li>

          </ul>
          </form>

       </div>
      }
      
     
      if(this.state.gofilter === false){
        this.min = 0
        this.max = 0
      }
      var ProductCd
      if(this.state.browse===false){
        ProductCd = <div><ProductCard minprice={this.min} maxprice={this.max}/></div>
      }else if(this.state.browse===true && this.state.item.Chair ===true){
        ProductCd = <div><ChairCard  minprice={this.min} maxprice={this.max}/></div>
      }else if(this.state.browse===true && this.state.item.Couch ===true){
        ProductCd = <div><CouchCard  minprice={this.min} maxprice={this.max}/></div>
      }else if(this.state.browse===true && this.state.item.Dine ===true){
        ProductCd = <div><DineTableCard  minprice={this.min} maxprice={this.max}/></div>
      }else if(this.state.browse===true && this.state.item.TVTable ===true){
        ProductCd = <div><TableCard  minprice={this.min} maxprice={this.max}/></div>
      }
      
      
        return ( 
            <div>
              <div className='navigateProducts'>   
                  <ul>
                  <li><button onClick={this.AllProductDraw}>All Products</button></li>
                <li><button onClick={this.ChairDraw}>Chair</button></li>
                <li><button onClick={this.CouchDraw}>Couch</button></li>
                <li><button onClick={this.TableDraw}>TV-Table</button></li>
                <li><button onClick={this.DineTableDraw}>Dining Table</button></li>
                
                  </ul>
                  
              </div>
                 <div>
               
                   <button onClick={this.FilterItems}>Filter Items</button>
                   {FilterDraw}
                 </div>
              <div className="productsDraw">
               {ProductCd}
               
               <div className="HotProducts">
                 <h1>Hot Products</h1>
                     <HotProducts />
                 </div>
              
                 </div>
            </div>
         );
        
    }
}
 
export default ProductDraw;