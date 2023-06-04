import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "react";


export default function EditProductForm(props){

  const {product} = props;
  function handleEditFormSubmission(e){
    e.preventDefault();
    props.onClickingEdit({
      name: e.target.name.value,
      vendor: e.target.vendor.value,
      shortDescription: e.target.shortDescription.value
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