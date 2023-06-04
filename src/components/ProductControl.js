import React from "react";
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";
import ProductDetail from "./ProductDetail";
import EditProductForm from "./EditProductForm";


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
    const editedMainProductList = this.mainProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
      mainProductList: editedMainProductList,
      stateName: 'list'
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    switch(this.state.stateName){
      case 'list':
        currentlyVisibleState = <ProductList
          productList={this.state.mainProductList}
          onProductSelection={this.handleChangingSelectedProduct}
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
        <button class="btn addNewProduct" onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}