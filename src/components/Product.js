import React from "react";
import PropTypes from "prop-types";

export default function Product(props){
  return (
    <>
      <h3>{props.name} - {props.vendor}</h3>
      <p>{props.shortDescription}</p>
      <hr />
    </>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired
};