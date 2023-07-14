import React from 'react';
import './Giveaway.css'

function NewsletterForm() {
  return (
    <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }}
>
    <div style={{ alignContent:'center', alignItems:'center' }}>
      {/* intro section */}
      <section className="intro">
        <h1 className="title">Black Friday Deals</h1>
        <p>Get up to 50% off on all our products and services. Hurry up, the offer ends in 24 hours.</p>
      </section>

      {/* sign-up section */}
      <section className="sign-up">
        <p className="sign-up-para">Sign up for our newsletter and get 10% off your first purchase</p>
        {/* the form itself */}
        <form className="sign-up-form">
          <div className="form-input">
            <input type="text" name="first-name" id="first-name" placeholder="First Name" required />
            <span>!</span>
            <p className="warning">First name cannot be empty</p>
          </div>

          <div className="form-input">
            <input type="text" name="last-name" id="last-name" placeholder="Last Name" required />
            <span>!</span>
            <p className="warning">Last name cannot be empty</p>
          </div>

          <div className="form-input">
            <input type="email" name="email" id="email" placeholder="Email Address" required />
            <span>!</span>
            <p className="warning">Looks like this is not an email</p>
          </div>

          <div className="form-input">
            <input type="password" name="password" id="password" placeholder="Password" required />
            <span>!</span>
            <p className="warning">Password cannot be empty</p>
          </div>

          <input className="submit-btn" type="submit" value="Claim your offer" />
          <p className="form-term">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </form>
      </section>
    </div>
    </div >
  );
}

export default NewsletterForm;
