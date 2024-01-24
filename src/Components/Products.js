import React from "react";
import ProductList from "./ProductList";

class Products extends React.Component {
   constructor(props){
     super(props);
      this.state = {
        title: 'Product Page',
        products: 'JSON'
      }
   }

   

   render(){
    return (
        <div>
          <h2>{this.state.title}</h2>
          <ProductList productlist ={this.state.products }/>
        </div>
    )
   }
}

  export default Products