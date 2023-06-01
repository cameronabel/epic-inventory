import React from "react";
import ProductList from "./ProductList";
import { v4 } from 'uuid';


export default class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stateName: 'list',
      mainProductList: [],
      selectedProduct: null
    };
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let addProductButton = null;

    switch(this.state.stateName){
      case 'list':
        currentlyVisibleState = <ProductList
          productList={this.state.mainProductList}
        />
        buttonText="Add Product"
        break
      default:
        currentlyVisibleState = <ProductList
          productList={this.state.mainProductList}
        />
        buttonText="Add Product"
        break
    }

    return (
      <>
        {currentlyVisibleState}
        <button>{buttonText}</button>
      </>
    )
  }
}