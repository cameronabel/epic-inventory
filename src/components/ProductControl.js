import React from "react";
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";


export default class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stateName: 'list',
      mainProductList: [],
      selectedProduct: null
    };
  }

  handleClick = () => {
    let nextState = null;
    let nextSelectedProduct = this.state.selectedProduct;
    switch(this.state.stateName){
      case 'productDetail':
        nextState = 'list';
        nextSelectedProduct = null;
        break;
      case 'form':
        nextState = 'list';
        nextSelectedProduct = null;
        break;
      case 'list':
        nextState = 'create';
        break;
      default:
        nextState = 'list';
        break;
    }
    this.setState(() => ({
      stateName: nextState,
      selectedProduct: nextSelectedProduct
    }));
  }

  handleAddingProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState(() => ({
      mainProductList: newMainProductList,
      stateName: 'list'
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    switch(this.state.stateName){
      case 'list':
        currentlyVisibleState = <ProductList
          productList={this.state.mainProductList}
        />
        buttonText="Add Product"
        break
      case 'create':
        currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingProductToList} />
        buttonText="Back";
        break;
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
        <button class="btn addNewProduct" onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}