import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateSelectedOrder = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { id, product, price, statut } = location.state || {};
  const [showSelect, setShowSelect] = useState(false);
  
  const [updatedProduct, setUpdatedProduct] = useState(product || '');
  const [updatedPrice, setUpdatedPrice] = useState(price || '');
  const [updatedStatut, setUpdatedStatut] = useState(statut || '');

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

  const handleStatutClick = () => {
    setShowSelect(true);
  };

  const handleProductChange = (event) => {
    setUpdatedProduct(event.target.value);
  };

  const handlePriceChange = (event) => {
    setUpdatedPrice(event.target.value);
  };

  const handleStatutChange = (event) => {
    setUpdatedStatut(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/orders/${id}`, {
      product: updatedProduct,
      price: updatedPrice,
      statut: updatedStatut
    })
      .then(response => {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Commande mise a jour avec succès',
          text: 'La commande a bien été modifier.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        // Handle success or display a success message
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Verifier les champs',
          text: `La commande n'a pas été modifier.`,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        // Handle error or display an error message
      });
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
              Modifier commande
            </h3>
            <div className="form-group">
              <label htmlFor="product" style={{ fontWeight: 'bold' }} >ID :</label>
              <input disabled type="text" value={id} className="form-control" id="price" />

            </div>
            <div className="form-group">
              <label htmlFor="product" style={{ fontWeight: 'bold' }} >Product :</label>
              <input type="text" value={updatedProduct} className="form-control" id="product" onChange={handleProductChange} />

            </div>

            <div className="form-group">
              <label htmlFor="price" style={{ fontWeight: 'bold' }}>Price :</label>
              <input type="number" value={updatedPrice} className="form-control" id="price" onChange={handlePriceChange} />
            </div>

            <div className="form-group">
              <label htmlFor="status" style={{ fontWeight: 'bold' }}>Statut :</label>
              {showSelect ? (
                <select value={updatedStatut} className="form-control" id="status" onChange={handleStatutChange}>
                  <option value="Choose a new statut">Choose a new statut</option>
                  <option value="pending">pending</option>
                  <option value="processing">processing</option>
                  <option value="completed">completed</option>
                  <option value="received">received</option>
                </select>
              ) : (
                  <input type="text" value={updatedStatut} className="form-control" id="status" onClick={handleStatutClick} />
                )}

            </div>

            <div className="d-flex justify-content-center mt-4">
              <input type="submit" value="Modifer" className="btn btn-primary" />
            </div>
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

export default UpdateSelectedOrder;
