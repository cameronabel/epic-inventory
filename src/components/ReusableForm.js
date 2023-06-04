import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props){

  return (
    <>
      <form class="page" onSubmit={props.formSubmissionHandler}>
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
        <button class="btn addNewProduct" type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};