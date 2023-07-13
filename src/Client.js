import React, { Component } from 'react';
import './Client.css';
import Footer from './Footer';
import 'font-awesome/css/font-awesome.css';
import ReactPlayer from 'react-player/lazy'



class MyComponent extends Component {
  componentDidMount() {
    this.scrollContainer();
    this.addEventListeners();
  }

  scrollContainer = () => {
    const productContainer = document.querySelector('.client-product-container');
    let scrollAmount = 0;
    const scrollStep = 2;

    function scroll() {
      scrollAmount += scrollStep;

      if (scrollAmount >= productContainer.scrollWidth - productContainer.offsetWidth) {
        scrollAmount = 0;
      }

      productContainer.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    }

    scroll();
  };

  addEventListeners = () => {
    const productCards = document.querySelectorAll('.client-product-card');

    function stopScroll() {
      const productContainer = document.querySelector('.client-product-container');
      productContainer.style.animationPlayState = 'paused';
    }

    function resumeScroll() {
      const productContainer = document.querySelector('.client-product-container');
      productContainer.style.animationPlayState = 'running';
    }

    productCards.forEach((card) => {
      card.addEventListener('mouseenter', stopScroll);
      card.addEventListener('mouseleave', resumeScroll);
    });
  };

  render() {
    return (
      <>
        <section className="client-product">

          <h2 className="product-category  ">Our Satisfied <span style={{ color: '#008507' }}>Clients</span></h2>
          <button className="Client-pre-btn">
            <img src="images/arrow.png" alt="" />
          </button>
          <button className="Client-nxt-btn">
            <img src="images/arrow.png" alt="" />
          </button>
          <div className="client-product-container">
            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client1.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client2.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client3.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client4.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client5.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client6.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client7.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client8.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client9.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client10.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client11.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client12.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client13.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client14.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client15.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client16.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client17.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client18.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client19.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client20.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client21.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client22.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client23.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client24.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client25.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client26.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client27.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client28.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client29.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client30.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client31.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client32.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client33.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client34.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client35.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client36.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client37.jpeg" className="product-thumb" alt="" />
              </div>
            </div>

            <div className="client-product-card">
              <div className="product-image">
                <img src="/Client/client38.jpeg" className="product-thumb" alt="" />
              </div>
            </div>


          </div>
        </section>

        <h2 className="product-category  ">Review made by <span style={{ color: '#008507' }}>one of our  Clients</span></h2>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactPlayer url='https://www.youtube.com/watch?v=Nouq-NMY6U0' playing={false}
            width={'400px'}
            height={'200px'} />
        </div>


        <h2 className="product-category  ">Why  <span style={{ color: '#008507' }}>Choose</span> Us ?</h2>

        <div id="benefits-clients">

          <div style={{ marginRight: '100px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Fast Delivery </p>
            <p style={{ fontSize: '14px' }}>Fastest delivery on epin websites. </p>
          </div>
          <div style={{ marginRight: '100px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Live Support </p>
            <p style={{ fontSize: '14px' }}>It is at your service between 10.00 in the morning and 02.00 in the night.
            </p>
          </div>
          <div style={{ marginRight: '100px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>CD Key and Epin </p>
            <p style={{ fontSize: '14px' }}>We are at your service with CD Key and E-Pİn deliveries. </p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>100% Satisfaction </p>
            <p style={{ fontSize: '14px' }}>100% Satisfaction Guarantee to Our Customers
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MyComponent;
