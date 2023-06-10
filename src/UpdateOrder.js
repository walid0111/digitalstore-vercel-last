import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateOrder = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');


  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/index')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteOrder = (orderId) => {
    Swal.fire({
      icon: 'warning',
      title: 'Voulez-vous vraiment supprimer la commande ?',
      text: '',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler'
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`http://127.0.0.1:8000/api/orders/${orderId}`)
          .then(response => {
            console.log('Commande supprimée');
            Swal.fire({
              icon: 'info',
              title: 'Commande supprimer avec succès',
              text: '',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            })
            .then(() => {
              window.location.reload();
            });
            // Actualisez votre liste de commandes en effectuant une nouvelle requête GET ou en mettant à jour l'état des données
          })
          .catch(error => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Commande non supprimer',
              text: '',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            });
          });
      }
    });
  };
  console.log(filter)
  const filteredData = data.filter(order => {
    return order.id.toString().includes(filter);
  });

  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
      </head>
      <header>
        <div className="inner-width d-flex justify-content-center">
          <Link to="/home">
            <h1 className="logo" style={{ fontFamily: 'fantasy' }}>
              <i className="fas fa-store" style={{ color: '#008507' }} />
              <span style={{ color: '#008507' }}> D</span>igital <span style={{ color: '#008507' }}>S</span>tore{' '}
              <span style={{ color: '#008507' }}>Admin</span>
            </h1>
          </Link>
        </div>
      </header>

      <br />
      <br />
      <br />
      <br />
      <br />
      <body>
        <div className="container mt-5">

          <div className="table-responsive">
          <input
              type="text"
              placeholder="Filter by ID"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-control mb-3"
            />
            
            <table className="table table-bordered mt-4">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>STATUT</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.price}</td>
                    <td>{order.statut}</td>
                    <td>
                      <button
                        onClick={() =>
                          navigate('/updateSelectedOrder', {
                            state: { id: order.id, product: order.product, price: order.price, statut: order.statut }
                          })
                        }
                        className="btn btn-primary"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => deleteOrder(order.id)}
                        className="btn btn-danger ml-2"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </body >

      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <h1 className="logo" style={{ fontFamily: 'fantasy' }}>
                <span style={{ color: '#008507' }}>D</span>igital <span style={{ color: '#008507' }}>S</span>tore
              </h1>
            </div>
            <div className="media-icons">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/digitalstore_v2/">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.instagram.com/digitalstore_v1/">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://wa.me/+212637976257">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="#">Shopping</a>
              </li>
              <li>
                <a href="#">CV design</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">How to order ?</li>
              <li>
                <a href>1. Choose your product</a>
              </li>
              <li>
                <a href>2. Click Buy</a>
              </li>
              <li>
                <a href>3. Send us the WhatsApp message </a>
              </li>
              <li>
                <a href>4. Wait for our confirmation </a>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Report a bug</li>
              <li>
                <input type="text" placeholder="Your E-mail" />
              </li>
              <li>
                <input type="text" placeholder="Problem details.." />
              </li>
              <li>
                <input type="button" value="Send" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2023. All rights reserved
            </span>
            <span className="payment-methods">
              <img src="orange.png" style={{ height: '25px', paddingLeft: '8px' }} />
              <img src="cashplus.png" style={{ height: '25px', paddingLeft: '8px' }} />
              <img src="cih.png" style={{ height: '25px', paddingLeft: '8px' }} />
              <img src="paypal.png" style={{ height: '25px', paddingLeft: '8px' }} />
            </span>
            <span style={{ fontSize: '12px' }}>Powered By Digital Store</span>
            {/*<span class="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>*/}
          </div>
        </div>
      </footer>
    </div >
  );
};

export default UpdateOrder;
