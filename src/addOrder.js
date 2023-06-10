import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import { faCopy } from "@fortawesome/free-solid-svg-icons";


const AddOrder = () => {
  const [data, setData] = useState([]);
  const [commandId, setCommandId] = useState();
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/index')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Récupérer les valeurs des champs du formulaire
    const product = document.getElementById("product").value;
    const price = document.getElementById("price").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const status = document.getElementById("status").value;
    const currentDate = new Date().toISOString().slice(0, 10);
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const currentTimeWithSecond = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const id = parseInt(currentDate.replace(/-/g, '') + currentTimeWithSecond.replace(/:/g, ''), 10);


    //console.log(currentDate, currentTime, status, paymentMethod, price, product)

    axios.post('http://127.0.0.1:8000/api/storeOrder', {
      id: id,
      product: product,
      price: price + ' ' + currency,
      orangeTax: paymentMethod,
      statut: status,
      date: currentDate,
      hour: currentTime,
      // Ajoutez d'autres champs de la table si nécessaire
    })
      .then(response => {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Commande créée avec succès',
          text: 'La commande a été ajoutée avec succès.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        setCommandId(id)
        // Effectuer des actions supplémentaires après la création de la commande
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Commande non ajoute',
          text: 'Verifier les champs',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        });
      });
  };


  const handleCopyClick = () => {
    navigator.clipboard.writeText(`Nous avons bien reçu votre commande ID : ${commandId} pour plus de détails, suivez votre commande en accédant à ce lien et en saisissant cet ID : ${commandId}`);
    Swal.fire({
      icon: 'success',
      title: 'ID copié',
      text: 'L\'ID de la commande a été copié.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
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
      </head>

      <header>
        <div className="inner-width d-flex justify-content-center">
          <Link to="/home">
            <h1 className="logo" style={{ fontFamily: 'fantasy' }}>
              <i className="fas fa-store" style={{ color: '#008507' }} />
              <span style={{ color: '#008507' }}> D</span>igital <span style={{ color: '#008507' }}>S</span>tore <span style={{ color: '#008507' }}></span>Admin
            </h1>
          </Link>
        </div>
      </header>

      <br /><br /><br /><br /><br />
      <body>
        <div className="d-flex justify-content-center mt-5">
          <form onSubmit={handleSubmit}>
            <h3 style={{ margin: '0 80px 50px 80px', fontWeight: 'bold' }}>
              Ajout d'une nouvelle commande
            </h3>
            <div className="form-group">
              <label htmlFor="product" style={{ fontWeight: 'bold' }} >Product :</label>
              <select id="product" className="form-control" >
                <option value={'spotify'}>Spotify</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="price" style={{ fontWeight: 'bold' }}>Price :</label>
              <input type="number" className="form-control" id="price" />
            </div>

            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    value="MAD"
                    name="currency"
                    onChange={handleCurrencyChange}
                    className="form-check-input"
                    required
                  />
                  <strong>MAD</strong>
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    value="EUR"
                    name="currency"
                    onChange={handleCurrencyChange}
                    className="form-check-input"
                    required
                  />
                  <strong>EUR</strong>
                </label>
              </div>
            </div>




            <div className="form-group">
              <label htmlFor="paymentMethod" style={{ fontWeight: 'bold' }}>Paiement methode :</label>
              <select id="paymentMethod" className="form-control">
                <option value={'12'}>Orange</option>
                <option value={'0'}>Others</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status" style={{ fontWeight: 'bold' }}>Statut :</label>
              <select id="status" className="form-control">
                <option value={'pending'}>pending</option>
                <option value={'processing'}>processing</option>
                <option value={'completed'}>completed</option>
              </select>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <input type="submit" value="Créer la commande" className="btn btn-primary" />
            </div>
            {commandId &&
              <>
                <h5 style={{ margin: '40px 80px 20px 80px', fontWeight: 'bold', textAlign: 'center' }}>
                  Commande ajoutée sous l'ID:</h5>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" value={commandId} readOnly />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleCopyClick}>
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                  </div>
                </div>
              </>
            }
          </form>
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
              <img src="orange.png" style={{ height: '25px', paddingLeft: '8px' }} alt="orange" />
              <img src="cashplus.png" style={{ height: '25px', paddingLeft: '8px' }} alt="cashplus" />
              <img src="cih.png" style={{ height: '25px', paddingLeft: '8px' }} alt="cih" />
              <img src="paypal.png" style={{ height: '25px', paddingLeft: '8px' }} alt="paypal" /></span>
            <span style={{ fontSize: '12px' }}>Powered By Digital Store</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AddOrder;
