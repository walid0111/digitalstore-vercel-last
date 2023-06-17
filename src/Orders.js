import './Order.css';
import axios from 'axios';
import Footer from './Footer';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";



class Table extends Component {
  state = {
    data: [],
    dataFiltred: [],
    inputId: null,
    message: null,
    messageScroll: null,


  };
  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData, 5000); // fetch data every 5 seconds


    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src = "https://embed.tawk.to/648a2360cc26a871b02293eb/1h2tpkdrr";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.getElementsByTagName("head")[0].appendChild(script);
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.fetchFilteredData();
    }
  }

  fetchData = () => {
    axios.get('http://127.0.0.1:8000/api/index')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchFilteredData = () => {
    const { inputId } = this.state;
    const { data } = this.state;
    const filteredData = data.filter(item => item.id == inputId);
    if (filteredData.length > 0) {
      this.setState({
        dataFiltred: filteredData, message: ' Check for the Order details bellow', messageScroll: (
          <div className='jump'>
            <i className="fas fa-arrow-down jump"></i> Scroll Down <i className="fas fa-arrow-down jump"></i>
          </div>
        )
      });

      // Scroll to the element with ID "here" after the state has been updated

    } else {

      this.setState({ messageScroll: null, message: 'There is no order with this ID', dataFiltred: [] });
    }
  }

  /* handleInputChange = (event) => {
    this.setState({ inputId: event.target.value });
  }; */

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchFilteredData();
  };





  render() {
    return (
      <div >
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="trustpilot-one-time-domain-verification-id" content="672a6854-e560-4596-b310-7f409f718210" />
          <title>Document</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" charset="utf-8"></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"></link>
        </head >

        <header>
          <div className="inner-width">
            <Link to="/home"><h1 className="logo" style={{ fontFamily: 'fantasy' }}> <i className="fas fa-store" style={{ color: '#008507' }} />
              <span style={{ color: '#008507' }}> D</span>igital <span style={{ color: '#008507' }}>S</span>tore
            </h1></Link>
            <i className="menu-toggle-btn fas fa-bars" />
            <nav className="navigation-menu">



              <Link to="/home" className="aj_btn"><i className="fas fa-home" /> HOME </Link>

            </nav>
          </div>
        </header>



        <body>
          <form onSubmit={this.handleSubmit}>
            <div className="titleOrders">
              <h4>FOLLOW YOUR ORDER BY ENTERING BELOW THE <span>COMMAND ID</span> </h4> <br />
            </div>
            <div className="input-block">
              <input type="text" name="input-text" id="input-text" required spellCheck="false" /* onChange={this.handleInputChange} */ />
              <span className="placeholder">Command ID..</span>
              <div style={{ color: 'red', fontWeight: 'bold', marginTop: '8px' }}> {this.state.message}</div>
              <div className="button-containerr">
                <button type="submit" onClick={() => this.setState({ inputId: document.getElementById('input-text').value })}>
                  <FontAwesomeIcon icon={faSearch} /> SEARCH
                </button>
                <button type="reset" onclick="document.getElementById('input-text').value='';">
                  <FontAwesomeIcon icon={faTimes} /> RESET
                </button>

              </div>{console.log(this.state.inputId)}
            </div>
            <div style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', marginTop: '12px' }}> {this.state.messageScroll}</div>

            <div style={{ textAlign: 'center', padding: '20px', marginTop: '70px' }}>
              <i className="fa fa-question-circle"></i>
              <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>HOW IT WORKS ?</span>
            </div>

            <div className="order-status">
              <div className="status-item">
                <div className="status-icon pending" />
                <div className="status-label">Pending</div>
                <div>We are waiting for the paiement validation</div>
              </div>
              <div className="status-item">
                <div className="status-icon processing" />
                <div className="status-label">Processing</div>
                <div>We are working on your order</div>
              </div>
              <div className="status-item">
                <div className="status-icon completed" />
                <div className="status-label">Completed</div>
                <div>The order was completed and it will be sent to the client soon </div>
              </div>
              <div className="status-item">
                <div className="status-icon received" />
                <div className="status-label">Received</div>
                <div>The order was sent</div>
              </div>
            </div>
            <div className="titleOrders">
              <h4>PLEASE, AFTER RECEIVING YOUR ORDER DON'T FORGET TO GIVE US A <span>TRUSTPILOTE REVIEW </span>BELLOW :) </h4> <br />
              <div class="flex items-center justify-center" style={{margin:'20px'}}>
                <a href="https://www.trustpilot.com/evaluate/digitalstore.ma" class="flex items-center justify-center bg-green-700 hover:bg-green-600 hover:no-underline text-white font-bold py-2 px-4 rounded">
                  <i class="fas fa-star fa-lg mr-2"></i>
                  Leave a Review
                </a>
              </div>

            </div>
            {/*order details*/}


            {this.state.dataFiltred.map(record =>



              <div style={{ dispay: 'none' }} className="containerr" id='here' ref={this.myDivRef}>
                <article className="card">
                  <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px', fontSize: '22px' }}>THANK YOU FOR YOU ORDER :)
                  </p>
                  <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px', fontSize: '18px', color: '#008507' }}>
                    <span style={{ fontWeight: 'bold' }}>Order Number : #</span>{record.id}

                  </p>

                  <div className="card-body">
                    <article className="card">
                      <div className="card-body row">
                        <div className="col"> <strong>Estimated Delivery time:</strong> <br />3 Hours Maximum </div>
                        <div className="col"> <strong>SHIPPED VIA :</strong> <br /> WHATSAPP | INSTAGRAM
                        </div>
                        <div className="col"> <strong>STATUS :</strong> <br /> {record.statut} </div>
                        <div className="col"> <strong>PRODUCT : </strong> <br /> {record.product} </div>
                      </div>
                    </article>
                    <div className="track">
                      <div className={`step ${record.statut === 'pending' || record.statut === 'processing' || record.statut === 'completed' || record.statut === 'received' ? 'active' : ''}`} id='pending'> <span className="icon"> <i className="fa fa-check" /> </span> <span className="textt">PENDING</span> </div>
                      <div className={`step ${record.statut === 'processing' || record.statut === 'completed' || record.statut === 'received' ? 'active' : ''}`}> <span className="icon"> <i className="fa fa-user" /> </span> <span className="textt">
                        PROCESSING</span> </div>
                      <div className={`step ${record.statut === 'completed' || record.statut === 'received' ? 'active' : ''}`}> <span className="icon"> <i className="fa fa-truck" /> </span> <span className="textt">
                        COMPLETED </span> </div>
                      <div className={`step ${record.statut === 'received' ? 'active' : ''}`} id='received'> <span className="icon"> <i className="fa fa-box" /> </span> <span className="textt">
                        RECEIVED</span> </div>
                    </div>
                    <hr />
                    <ul className="row " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <li className="col-md-4 ">
                        <figure className="itemside mb-4">
                          <div className="aside"><i className="fas fa-info" /></div>
                          <figcaption className="info align-self-center">
                            <p /* className="title" */>ORDER INFORMATION <br /> </p>
                            <hr />
                            <p className="title"><i className="fas fa-calendar" /> INVOICE DATE : {record.date} <br /><i className="fas fa-clock" /> INVOICE HOUR : {record.hour} <br /></p>
                          </figcaption>
                        </figure>
                      </li>
                      <li className="col-md-4">
                        <figure className="itemside mb-3">
                          <div className="aside"><i className="fas fa-file" /></div>
                          <figcaption className="info align-self-center">
                            <p /* className="title" */>ORDER SUMMARY <br /> </p>
                            <hr />
                            <p className="title"><i className="fas fa-arrow-right" /> PRICE : {record.price}  <br /><i className="fas fa-arrow-right" /> ORANGE TAX : {record.orangeTax} % <br /></p>
                            <span className="text-muted"> TOTAL : {record.price}   </span>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                    <hr />
                    {record.statut === 'pending' || record.statut === 'processing' || record.statut === 'completed' ? (
                      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="#" className="warning">
                        PLEASE WAIT, WE ARE WORKING ON YOUR ORDER
                      </p>
                    ) : null}

                    {record.statut === 'received' &&
                      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="#" className="warning2">THE COMMAND HAS ALREADY BE SENT  </p>
                    }

                  </div></article>
              </div>

            )}
          </form>
        </body>

        <Footer />


      </div>
    )
  };
}


export default Table;
