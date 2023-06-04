import React from "react";
import PropTypes from "prop-types";


export default function Product(props){
  return (
    <>
      <div class="product" onClick={() => props.whenProductClicked(props.id)}>
        <h3>{props.vendor} - {props.name}</h3>
        <p><em>{props.shortDescription}</em></p>
        <p>{props.abv}%</p>
        <hr />
      </div>
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};