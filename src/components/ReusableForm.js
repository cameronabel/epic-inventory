import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props){

  return (
    <>
      <form className="page" onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='vendor'
          placeholder='Vendor'
          required />
        <br />
        <input
          type='text'
          name='name'
          placeholder='Product Name'
          required />
        <br />
        <input
          type='number'
          name='abv'
          placeholder="ABV %"
          required />
        <br />
        <input
          type='number'
          name='qty'
          placeholder='Servings'
          required />
        <br />
        <textarea
          name='shortDescription'
          placeholder="Product Description"
          required />
        <button className="btn addNewProduct" type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};