import './Order.css';
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Table extends Component {
    state = {
        data: [],
        dataFiltred: [],
        inputId: null,
        message: null,


    };
    componentDidMount() {
        this.fetchData();
        setInterval(this.fetchData, 5000); // fetch data every 5 seconds
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
            this.setState({ dataFiltred: filteredData, message: null });
            // Scroll to the element with ID "here" after the state has been updated
            const hereElement = document.getElementById('here');
            if (hereElement) {
                hereElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            this.setState({ message: 'There is no order with this ID', dataFiltred: [] });
        }
    }

    handleInputChange = (event) => {
        this.setState({ inputId: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchFilteredData();
    };





    render() {
        return (
            <div>
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" charset="utf-8"></script>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"></link>
                </head >

                <header>
                    <div className="inner-width">
                        <h1 className="logo" style={{ fontFamily: 'fantasy' }}> <i className="fas fa-store" style={{ color: '#008507' }} />
                            <span style={{ color: '#008507' }}> D</span>igital <span style={{ color: '#008507' }}>S</span>tore
                        </h1>
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
                            <input type="text" name="input-text" id="input-text" required spellCheck="false" onChange={this.handleInputChange} />
                            <span className="placeholder">Command ID..</span>
                            <div style={{ color: 'red', fontWeight: 'bold', marginTop: '8px' }}> {this.state.message}</div>
                            <div className="button-container">
                                <button type="submit" onClick={() => this.setState({ inputId: document.getElementById('input-text').value })}>search</button>
                                <button type="reset" onclick="document.getElementById('input-text').value='';">reset</button>
                            </div>{console.log(this.state.inputId)}
                        </div>

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
                            <h4>PLEASE, AFTER RECEIVING YOUR ORDER DON'T FORGET TO GIVE US A <span>TRUSTPILOTE REVIEW </span> </h4> <br />
                        </div>
                        {/*order details*/}


                        {this.state.dataFiltred.map(record =>



                            <div style={{ dispay: 'none' }} className="container" id='here' ref={this.myDivRef}>


                                <div className="card-body">
                                    <h6>Order ID: OD45345345435</h6>
                                    <article className="card">
                                        <div className="card-body row">
                                            <div className="col"> <strong>Estimated Delivery time:</strong> <br />29 nov 2019 </div>
                                            <div className="col"> <strong>Shipping BY:</strong> <br /> BLUEDART, | <i className="fa fa-phone" /> +1598675986 </div>
                                            <div className="col"> <strong>Status:</strong> <br /> Picked by the courier </div>
                                            <div className="col"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
                                        </div>
                                    </article>
                                    <div className="track">
                                        <div className="step active"> <span className="icon"> <i className="fa fa-check" /> </span> <span className="text">Order confirmed</span> </div>
                                        <div className="step active"> <span className="icon"> <i className="fa fa-user" /> </span> <span className="text"> Picked by courier</span> </div>
                                        <div className="step"> <span className="icon"> <i className="fa fa-truck" /> </span> <span className="text"> On the way </span> </div>
                                        <div className="step"> <span className="icon"> <i className="fa fa-box" /> </span> <span className="text">Ready for pickup</span> </div>
                                    </div>
                                    <hr />
                                    <ul className="row">
                                        <li className="col-md-4">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src="https://i.imgur.com/iDwDQ4o.png" className="img-sm border" /></div>
                                                <figcaption className="info align-self-center">
                                                    <p className="title">Dell Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$950 </span>
                                                </figcaption>
                                            </figure>
                                        </li>
                                        <li className="col-md-4">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src="https://i.imgur.com/tVBy5Q0.png" className="img-sm border" /></div>
                                                <figcaption className="info align-self-center">
                                                    <p className="title">HP Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$850 </span>
                                                </figcaption>
                                            </figure>
                                        </li>
                                        <li className="col-md-4">
                                            <figure className="itemside mb-3">
                                                <div className="aside"><img src="https://i.imgur.com/Bd56jKH.png" className="img-sm border" /></div>
                                                <figcaption className="info align-self-center">
                                                    <p className="title">ACER Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$650 </span>
                                                </figcaption>
                                            </figure>
                                        </li>
                                    </ul>
                                    <hr />
                                    <a href="#" className="btn btn-warning" data-abc="true"> <i className="fa fa-chevron-left" /> Back to orders</a>
                                </div>

                            </div>

                        )}
                    </form>
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

            </div>
        )
    };
}


export default Table;
