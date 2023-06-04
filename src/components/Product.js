import React from "react";
import PropTypes from "prop-types";


export default function Product(props){
  return (
    <>
      <div class="product" onClick={() => props.whenProductClicked(props.id)}>
        <h3>{props.name} - {props.vendor}</h3>
        <p>{props.shortDescription}</p>
        <hr />
      </div>
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};