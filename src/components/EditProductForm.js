import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


export default function EditProductForm(props){
  const {product} = props;

  function handleEditFormSubmission(e){
    e.preventDefault();
    props.onClickingEdit({
      name: e.target.name.value,
      vendor: e.target.vendor.value,
      shortDescription: e.target.shortDescription.value,
      abv: parseFloat(e.target.abv.value),
      qty: parseInt(e.target.qty.value, 10),
      id: product.id
    })
  }
  return (
    <>
    <ReusableForm
      formSubmissionHandler={handleEditFormSubmission}      
      buttonText="Update Product" />
    </>
  )
}

EditProductForm.propTypes = {
  product: PropTypes.object,
  onClickingEdit: PropTypes.func
}