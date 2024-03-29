import React from "react";
import { v4 } from 'uuid';

import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";
import ProductDetail from "./ProductDetail";
import EditProductForm from "./EditProductForm";


export default class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stateName: 'list',
      mainProductList: sampleProductArray,
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

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({
      selectedProduct: selectedProduct,
      stateName: 'details'
    });
  }

  handleEditClick = () => {
    this.setState({stateName: 'edit'});
  }

  handleEditingProduct = (productToEdit) => {
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
      mainProductList: editedMainProductList,
      stateName: 'list'
    });
  }

  handleDeletingProduct = (id) => {
    const newMainProductList = this.state.mainProductList.filter(product => product.id !== id);
    this.setState({
      stateName: 'list',
      mainProductList: newMainProductList,
      selectedProduct: null
    });
  }

  handleDecrementingProductQuantity = (id) => {
    let productToDecrement = this.state.mainProductList.filter(product => product.id === id)[0];
    productToDecrement.qty = Math.max(productToDecrement.qty - 1, 0);
    this.forceUpdate();
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    switch(this.state.stateName){
      case 'list':
        currentlyVisibleState = <ProductList
          productList={this.state.mainProductList}
          onProductSelection={this.handleChangingSelectedProduct}
          whenSellButtonClicked={this.handleDecrementingProductQuantity}
        />
        buttonText="Add Product"
        break
      case 'create':
        currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingProductToList} />
        buttonText="Back";
        break;
      case 'details':
        currentlyVisibleState = <ProductDetail
          product={this.state.selectedProduct}
          onClickingDelete={this.handleDeletingProduct}
          onClickingEdit={this.handleEditClick} />
        buttonText="Back"
        break;
      case 'edit':
        currentlyVisibleState = <EditProductForm
          product={this.state.selectedProduct}
          onClickingEdit={this.handleEditingProduct} />
        buttonText="Back"
        break;
      default:
        currentlyVisibleState = <ProductList
          productList={this.state.mainProductList}
          onProductSelection={this.handleChangingSelectedProduct}
        />
        buttonText="Add Product"
        break
    }

    return (
      <>
        {currentlyVisibleState}
        <button className="btn addNewProduct" onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

let sampleProductArray = [
  {
    vendor: "Fullerton",
    name: "2019 Three Otters Rose",
    shortDescription: "Pinot Rose",
    abv: 13.5,
    qty: 30,
    id: v4()
  },
  {
    vendor: "Lagunitas",
    name: "Willettized",
    shortDescription: "Imperial Coffee Stout - Barrel Aged",
    abv: 13.1,
    qty: 40,
    id: v4()
  },
  {
    vendor: "Deschutes",
    name: "'19 The Abyss",
    shortDescription: "Imperial Stout - Barrel Aged",
    abv: 11.2,
    qty: 20,
    id: v4()
  },
  {
    vendor: "Hen House",
    name: "Oyster Stout",
    shortDescription: "Stout w/ Oysters & Sea Salt",
    abv: 4.9,
    qty: 110,
    id: v4()
  }
]