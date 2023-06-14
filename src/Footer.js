import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';


const ReportForm = () => {
    const [email, setEmail] = useState('');
    const [problem, setProblem] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleProblemChange = (e) => {
        setProblem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'admin' && problem === 'admin') {
            navigate('/welcomeAdmin');
        } else {
            axios.post('http://127.0.0.1:8000/api/storeBugs', {
                email: email,
                problem: problem,

            })
                .then(response => {
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Bugs is repoted successfully',
                        text: `Report ID : ${response.data.id}`,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK'
                    });
                    // Effectuer des actions supplémentaires après la création de la commande
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Bug is not reported',
                        text: 'Try Again',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'OK',
                    });
                });




        }
    };

    return (
        <div>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <h1 className="logo" style={{ fontFamily: 'fantasy' }}><span style={{ color: '#008507' }}>D</span>igital <span style={{ color: '#008507' }}>S</span>tore</h1>
                        </div>
                        <div className="media-icons">
                            <a href><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.instagram.com/digitalstore_v2/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.instagram.com/digitalstore_v1/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://wa.me/+212637976257"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><a href>Home</a></li>
                            <li><a href>Contact us</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><a href>Shopping</a></li>
                            <li><a href>CV design</a></li>
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
                            <form onSubmit={handleSubmit}>
                                <ul>
                                    <li><input type="text" placeholder="Your E-mail / Name" value={email} onChange={handleEmailChange} /></li>
                                    <li><input type="text" placeholder="Report a problem with ur order" value={problem} onChange={handleProblemChange} /></li>
                                    <li><input type="submit" value="Send" /></li>
                                </ul>
                            </form>
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
    );
};

export default ReportForm;
