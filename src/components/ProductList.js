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
            name={product.name}
            vendor={product.vendor}
            shortDescription={product.shortDescription}
            id={product.id}
            key={product.id}
          />
        )}
      </div>
    </>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array
};