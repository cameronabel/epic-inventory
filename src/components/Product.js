import React from "react";
import PropTypes from "prop-types";
import kegImage from './../img/keg.png';


export default function Product(props){
  let color = "#1CFF2870";
  let level = 1;
  if (props.qty <= 100 && props.qty > 50) {
    color = "#D2FF2870";
    level = 0.75;
  } else if (props.qty <= 50 && props.qty > 10) {
    color = "#FF8A2870";
    level = 0.35;
  } else if (props.qty <= 10) {
    color = "#FF002890";
    level = 0.1
  }
  let sellDisabled = props.qty === 0;

  return (
    <>
      <div className="product" >
        <div className="detail-container" onClick={() => props.whenProductClicked(props.id)}>
          <h3>{props.vendor} - {props.name}</h3>
          <p><em>{props.shortDescription}</em></p>
          <p>{props.abv}%</p>
        </div>
        <div className="sell-container">
          <button onClick={() => props.whenSellButtonClicked(props.id)} className="btn sell" disabled={sellDisabled}>Sell</button>
        </div>
        <div className="keg-container">
          
          <div style={{position: "absolute", top:0, left:0}}>
            <img className="keg" src={kegImage} alt='keg' />
          </div>
          <div id="overlay" style={{position: 'absolute', zIndex: 9, bottom: 20, left:0, margin: 17, background: color, width: 50, height: 60 * level}} />
          
        </div>
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
  whenProductClicked: PropTypes.func,
  whenSellButtonClicked: PropTypes.func
};