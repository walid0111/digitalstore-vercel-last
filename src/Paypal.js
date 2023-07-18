import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      montantSouhaite: '',
      montantARecevoir: '',
    };
  }

  handleChangeMontantSouhaite = (event) => {
    const montantSouhaite = event.target.value;
    const montantARecevoir = Math.round(parseFloat(montantSouhaite) * 11 * 1.15);
    this.setState({ montantSouhaite, montantARecevoir });
  };

  render() {
    return (
      <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>
          <span style={{ color: 'red', margin: '5px' }}>Khasni PayPal USD </span>
          <input
            type="text"
            id="wanted"
            placeholder='Ch7al khask f paypal'
            value={this.state.montantSouhaite}
            onChange={this.handleChangeMontantSouhaite}
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginRight: '10px',
              maxWidth: '100%',
              width: '100%'
            }}
          />
          ={' '}
          <input
            type="text"
            id="received"
            placeholder='Ch7al ghadi tjik b orange'
            value={this.state.montantARecevoir}
            disabled
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginRight: '10px',
              maxWidth: '100%',
              width: '100%'
            }}
          /><span style={{ color: 'red', margin: '5px' }}>Orange / CIH Bank </span>
        </p>

        <button
          className="btn btn-primary"
          onClick={() => {
            if (this.state.montantSouhaite === '' || isNaN(parseFloat(this.state.montantSouhaite))) {
              alert('Error: Please verify the value..');
            }

            else {
              const montantSouhaiteValue = this.state.montantSouhaite
              const montantArecevoirValue = this.state.montantARecevoir
              const message = `Salam *Digital Store* khasni \n *---PAYPAL SERVICE---* \n  *⇾ SOLDE :* ${montantSouhaiteValue} $  \n *⇾ TOTAL :* ${montantArecevoirValue} DH  `;
              const encodedMessage = encodeURIComponent(message);
              const url = `https://wa.me/+212637976257?text=${encodedMessage}`;
              window.location.href = url;
            }
          }}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            marginTop: '10px',
            maxWidth: '100%',
            width: '100%'
          }}
        >
          CONVERT
        </button>
      </div>

    );
  }
}

export default Modal;
