import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";


export default function ProductList(props){
  return (
    <>
      <hr />
      {props.productList.map((product) =>
        <Product
          name={product.name}
          vendor={product.vendor}
          shortDescription={product.shortDescription}
          id={product.id}
          key={product.id}
        />
      )}
    </>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array
};