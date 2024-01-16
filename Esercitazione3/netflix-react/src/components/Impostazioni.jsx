import React from 'react'

export default function Impostazioni() {
  return (
    <div className="account-page px-5">
    <div className="container p-5">
      <h3>Account</h3>
      <hr />

      <div className="row">
        <div className="col-md-3">
          <h6 className="">MEMBERSHIP & BILLING</h6>
          <button className=" btn btn-outline-secondary mt-2">Cancel Membership</button>
        </div>
        <div className="col-md-9">
          <div className="d-flex align-items-center justify-content-between mt-2">
            <strong>emailbella@mapopobella.com</strong>
            <a href="#" className="">Change account email</a>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-2">
            <span className="">Password : ********</span>
            <a href="#" className="">Change password</a>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-2">
            <span className="">Phone : 321 044 1279</span>
            <a href="#" className="">Change phone number</a>
          </div>
          <hr />

          <div className="d-flex align-items-center justify-content-between mt-2">
            <span>
              <img src="./assets/paypal_logo.png" width="80px" alt="PayPal Logo" />
              <strong className="ms-2">emailbella@mapopobella.com</strong>
            </span>
            <a href="#" className="">Update payment info</a>
          </div>
          <div className="d-flex align-items-center justify-content-end mt-2">
            <a href="#" className="">Billing details</a>
          </div>
          <div className="d-flex align-items-center justify-content-end mt-2">
            <a href="#" className="">Redeem gift card or promo code</a>
          </div>
          <div className="d-flex align-items-center justify-content-end mt-2">
            <a href="#" className="">Where to buy gift cards?</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <h6 className=" mb-0">PLAN DETAILS</h6>
        </div>
        <div className="col-md-9">
          <div className="d-flex align-items-center justify-content-between">
            <span>
              <strong className='me-2'>Standard</strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-badge-hd" viewBox="0 0 16 16">
                <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z" />
                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
              </svg>
            </span>
            <a href="#" className="">Change plan</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <h6 className="">SETTINGS</h6>
        </div>
        <div className="col-md-9">
          <p>
            <a href="#" className="">Parent Controls</a>
          </p>
          <p>
            <a href="#" className="">Test Participation</a>
          </p>
          <p>
            <a href="#" className="">Manage download devices</a>
          </p>
          <p>
            <a href="#" className="">Activate a device</a>
          </p>
          <p>
            <a href="#" className="">Recent device streaming activity</a>
          </p>
          <p>
            <a href="#" className="">Sign out all devices</a>
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <h6 className="">MY PROFILE</h6>
        </div>
        <div className="col-md-9">
          <div className="d-flex align-items-center justify-content-between mt-2">
            <span>
              <img src="./assets/avatar.png" width="36px" alt="User Avatar" />
              <strong className="ms-2">Profilo 1</strong>
            </span>
            <div className="d-flex flex-column">
              <a href="#" className="mb-1">Manage profiles</a>
              <a href="#" className="">Add profile email</a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <p>
                <a href="#" className="">Language</a>
              </p>
              <p>
                <a href="#" className="">Playback settings</a>
              </p>
              <p>
                <a href="#" className="">Subtitle appearance</a>
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <a href="#" className="">Viewing activity</a>
              </p>
              <p>
                <a href="#" className="">Ratings</a>
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
  )
}
