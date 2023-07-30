import React, { Component } from 'react';

const TrustBox = ({ trustBoxRef }) => (


    <div
        ref={trustBoxRef}
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="648a2cfeb25254004f719655"
        data-style-height="24px"
        data-style-width="100%"
        data-theme="dark"
        data-min-review-count="1"
        data-without-reviews-preferred-string-id="3"
        data-style-alignment="center"
    >
        <a
            href="https://www.trustpilot.com/review/digitalstore.ma"
            target="_blank"
            rel="noopener"
        >
            Trustpilot
        </a>
    </div>
);

class TrustBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.trustBoxRef = React.createRef();
    }

    componentDidMount() {
        // Si window.Trustpilot est disponible, cela signifie que nous devons charger le TrustBox à partir de notre référence.
        // S'il ne l'est pas, cela signifie que le script que vous avez collé dans <head /> n'est pas encore chargé.
        // Quand il le sera, il chargera automatiquement le TrustBox.
        if (window.Trustpilot) {
            window.Trustpilot.loadFromElement(this.trustBoxRef.current, true);
        }
    }

    render() {
        return <TrustBox trustBoxRef={this.trustBoxRef} />;
    }
}

export default TrustBoxContainer;
