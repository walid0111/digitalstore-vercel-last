import React, { useState, useEffect } from 'react';
import axios from 'axios';

class Table2 extends Component {
  state = {
    data: [],
    inputId: null,
    message: null
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/index')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange = (event) => {
    this.setState({ inputId: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const filteredData = this.state.data.filter(item => item.id == this.state.inputId);
    if (filteredData.length > 0) {
      this.setState({ data: filteredData, message: null });
    } else {
      this.setState({ message: 'There is no order' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="titleOrders">
            <h4>FOLLOW YOUR ORDER BY ENTERING BELOW THE <span>COMMAND ID</span> </h4>
            <br />
          </div>
          <div className="input-block">
            <input
              type="text"
              name="input-text"
              id="input-text"
              required
              spellCheck="false"
              onChange={this.handleInputChange}
            />
            <span className="placeholder">Command ID..</span>
            <div
              style={{
                color: "red",
                fontWeight: "bold",
                marginTop: "8px",
              }}
            >
              {this.state.message}
            </div>
            <div className="button-container">
              <button
                type="reset"
                onClick={() =>
                  (document.getElementById("input-text").value = "")
                }
              >
                reset
              </button>
              <button type="submit">search</button>
            </div>
          </div>
        </form>
        {this.state.data.map((record) => (
          <div key={record.id} className="container">
            <article className="card">
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "20px",
                  fontSize: "22px",
                }}
              >
                THANK YOU FOR YOU ORDER
              </p>
              <div className="card-body">
                <h6>
                  <span style={{ fontWeight: "bold" }}>Order ID:</span>{" "}
                  {record.id}{" "}
                </h6>
                <article className="card">
                  <div className="card-body row">
                    <div className="col">
                      {" "}
                      <strong>Estimated Delivery time:</strong> <br />
                      {"{ }"}
                    </div>
                    <div className="col">
                      {" "}
                      <strong>SHIPPED VIA :</strong> <br /> WHATSAPP | INSTAGRAM{" "}
                    </div>
                    <div className="col">
                      {" "}
                      <strong>STATUS:</strong> <br /> {record.status}{" "}
                    </div>
                    <div className="col">
                      {" "}
                      <strong>PRODUCT : </strong> <br /> {record.product}{" "}
                    </div>
                  </div>
                </article>
                <div className="track">
                  <div className="step active">
                    {" "}
                    <span className="icon"> <i className="fa fa-check" /> </span>{" "}
                    <span className="text">PENDING</span>{" "}
                  </div>
                  <div className="step ">
                    {" "}
                    <span className="icon"> <i className="fa fa-user" /> </span>{" "}
                    <span className="text">PROCESSING</span>{" "}
                  </div>
                  <div className="step">
                    {" "}
                    <span className="icon"> <i className="fa fa-truck" /> </span>{" "}
                    <span className="text">COMPLETED </span>{" "}
                  </div>
                  <div className="step">
                    {" "}
                    <span className="icon"> <i className="fa fa-box" /> </span>{" "}
                    <span className="text">RECEIVED</span>{" "}
                  </div>
                </div>
                <hr />
                <ul
                  className="row "
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <li className="col-md-4 ">





                  <figure className="itemside mb-4">
                    <div className="aside"><i className="fas fa-info" /></div>
                    <figcaption className="info align-self-center">
                      <p lassName="title">ORDER INFORMATION <br /> </p>
                      <hr />
                      <p className="title"><i className="fas fa-calendar" /> INVOICE DATE : {'{'}{'{'}{'}'}{'}'} <br /><i className="fas fa-clock" /> INVOICE HOUR : {'{'}{'{'}{'}'}{'}'} <br /></p>
                    </figcaption>
                  </figure>
                </li>
                <li className="col-md-4">
                  <figure className="itemside mb-3">
                    <div className="aside"><i className="fas fa-file" /></div>
                    <figcaption className="info align-self-center">
                      <p lassName="title">ORDER SUMMARY <br /> </p>
                      <hr />
                      <p className="title"><i className="fas fa-arrow-right" /> PRICE : {'{'}{'{'}{'}'}{'}'} <br /><i className="fas fa-arrow-right" /> ORANGE TAX : {'{'}{'{'}{'}'}{'}'} <br /></p>
                      <span className="text-muted"> TOTAL : {'{'}{'{'}{'}'}{'}'} </span>
                    </figcaption>
                  </figure>
                </li>
              </ul>
              
              
            </article>
      


      </div>
      </body>

      


      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <h1 className="logo" style={{ fontFamily: 'fantasy' }}><span style={{ color: '#008507' }}>D</span>igital <span style={{ color: '#008507' }}>S</span>tore</h1>
            </div>
            <div className="media-icons">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.instagram.com/digitalstore_v2/"><i className="fab fa-instagram" /></a>
              <a href="https://www.instagram.com/digitalstore_v1/"><i className="fab fa-instagram" /></a>
              <a href="https://wa.me/+212637976257"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li><a href="#">Shopping</a></li>
              <li><a href="#">Buy without bank card</a></li>
              <li><a href="#">CV design</a></li>
            </ul>
            <ul className="box">
              <li className="link_name">How to order ?</li>
              <li><a href>1. Choose your product</a></li>
              <li><a href>2. Click Buy</a></li>
              <li><a href>3. Send us the WhatsApp message </a></li>
              <li><a href>4. Wait for our confirmation </a></li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Report a bugs</li>
              <li><input type="text" placeholder="Your E-mail" /></li>
              <li><input type="text" placeholder=" Problem details.." /></li>
              <li><input type="button" defaultValue="Send" /></li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">Copyright © 2023. All rights reserved </span>
            <span className="copyright_text">
              <img src="orange.png" style={{ height: '25px', paddingLeft: '8px' }} />
              <img src="cashplus.png" style={{ height: '25px', paddingLeft: '8px' }} />
              <img src="cih.png" style={{ height: '25px', paddingLeft: '8px' }} />
              <img src="paypal.png" style={{ height: '25px', paddingLeft: '8px' }} /></span>
            <span style={{ fontSize: '12px' }}>Powered By Digital Store</span>
            {/*<span class="policy_terms">
                <a href="#">Privacy policy</a>
                <a href="#">Terms & condition</a>
            </span>*/}
          </div>
        </div>
      </footer>

    



export default Table2;

                  

