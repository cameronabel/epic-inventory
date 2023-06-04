import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";


export default function ProductList(props){
  return (
    <>
      <div class="page">
        <hr />
        {props.productList.map((product) =>
          <Product
            whenProductClicked={props.onProductSelection}
            vendor={product.vendor}
            name={product.name}
            shortDescription={product.shortDescription}
            abv={product.abv}
            qty={product.qty}
            id={product.id}
            key={product.id}
          />
        )}
      </div>
    </>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};