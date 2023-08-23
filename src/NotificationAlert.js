import React, { Component } from 'react';
import './MessageDisplay.css'; // Importez votre fichier CSS personnalisé si nécessaire
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez les styles Bootstrap

class MessageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { text: "someone just bought fif23", image: "fif23-image-url" },
        { text: "someone just bought forza", image: "forza-image-url" }
      ],
      currentMessageIndex: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeMessage, 6000); // Change le message toutes les 6 secondes (4 secondes de délai + 2 secondes de pause)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeMessage = () => {
    const { messages, currentMessageIndex } = this.state;
    const nextMessageIndex = (currentMessageIndex + 1) % messages.length;
    this.setState({ currentMessageIndex: nextMessageIndex });
  };

  render() {
    const { messages, currentMessageIndex } = this.state;
    const { text, image } = messages[currentMessageIndex];

    return (
      <div className="message-container">
        <div className="message-box">
          <img src={image} alt="Product" className="product-image" />
          <p className="message-text">{text}</p>
        </div>
      </div>
    );
  }
}

export default MessageDisplay;
