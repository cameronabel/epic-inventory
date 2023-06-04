import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

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
      <form class="page" onSubmit={handleNewProductFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Product Name'
          required />
        <br />
        <input
          type='text'
          name='vendor'
          placeholder='Vendor'
          required />
        <br />
        <textarea
          name='shortDescription'
          placeholder="Product Description"
          required />
        <button class="btn addNewProduct" type="submit">Submit</button>
      </form>
    </>
  );
}

NewProductForm.propTypes = {onNewProductCreation: PropTypes.func};