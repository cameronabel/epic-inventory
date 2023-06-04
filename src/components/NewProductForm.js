import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

export default function NewProductForm(props){
  function handleNewProductFormSubmission(e){
    e.preventDefault();
    props.onNewProductCreation({
      name: e.target.name.value,
      vendor: e.target.vendor.value,
      shortDescription: e.target.shortDescription.value,
      id: v4()
    });
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Submit" />
    </>
  );
}

NewProductForm.propTypes = {onNewProductCreation: PropTypes.func};