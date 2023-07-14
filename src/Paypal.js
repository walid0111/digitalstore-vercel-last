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
    const montantARecevoir = Math.round(parseFloat(montantSouhaite) * 11 * 1.08);
    this.setState({ montantSouhaite, montantARecevoir });
  };

  render() {
    return (
        <div className="">
          <p>
            <h5>I need :</h5>
            Khasni {' '}
            <input
              type="text"
              id="wanted"
              value={this.state.montantSouhaite}
              onChange={this.handleChangeMontantSouhaite}
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginRight: '10px'
              }}
            />
            Ghadi tjini{' '}
            <input
              type="text"
              id="received"
              value={this.state.montantARecevoir}
              disabled
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginRight: '10px'
              }}
            />

            <button
              className="btn btn-primary"
              onClick={() => {
                if (document.querySelector('#paypalSolde').value === '-') {
                  alert('Error: Please select an option before clicking buy..');
                }
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none'
              }}
            >
              CONVERT
            </button>
          </p>
        </div>
    );
  }
}

export default Modal;
