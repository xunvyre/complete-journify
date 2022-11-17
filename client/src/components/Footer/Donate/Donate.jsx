import React from 'react';

const Donate = () =>
{
  return (
    <section id="donate">
      <p>Love our site? Support the team:</p>
      <div class="card donate">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
          <div class="input-group-append">
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="input-group input-group-sm">
          <input type="text" name="name" id="name" class="form-control" placeholder="Cardholder Name"/>
          <input type="text" name="ccn" id="ccn" class="form-control" placeholder="1111-2222-3333-4444"/>
        </div>
        <div class="input-group input-group-sm">
          <input type="text" name="expDate" id="expDate" class="form-control" placeholder="Exp. Date"/>
          <input type="text" name="cvv" id="cvv" class="form-control" placeholder="CVV"/>
          <input type="text" name="zip" id="zip" class="form-control" placeholder="Zip Code"/>
        </div>
        <button type="button" class="btn btn-info btn-sm donate-btn">Thank you!</button>
      </div> 
    </section>
  )
};

export default Donate;