// StripePayment.js
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import "../App.css"
                                                                           

const StripePayment = ({ formValid }) => {
    
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then(() => {
        alert(`We are in business`);
      });
    });
  };

  return (
    <StripeCheckout
      token={onToken}
      label='Book Now'
      stripeKey="pk_test_51OWWYDSE9A6ccImhLrhoPgP5a1mzIC5D66jAbGqPwVFyp24s06ILH0wqwNNPzptizODGOoYTe3Ea0kyLwBZfr2mG00WYTzDwrD"
      className='btn  w-100 mt-4'
      disabled={!formValid}
    />
  );
};

export default StripePayment;
