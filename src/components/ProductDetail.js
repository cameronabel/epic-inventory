import React from "react";
import PropTypes from "prop-types";

export default function ProductDetail(props){
  const {product, onClickingDelete, onClickingEdit} = props;

  return (
    <>
      <div class="page">
        <h1>Product Detail</h1>
        <h3>{product.name} - {product.vendor}</h3>
        <p><em>{product.shortDescription}</em></p>
        <p>{product.abv}</p>
        <p>Qty: {product.qty}</p>
        <button onClick={onClickingEdit}>Edit Product</button>
        <button onClick={() => onClickingDelete(product.id)}>Delete</button>
      </div>
    </>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};