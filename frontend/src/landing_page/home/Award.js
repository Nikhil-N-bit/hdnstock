import React from 'react';

function Award() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* The image column */}
        <div className="col-12 col-md-6 mb-3">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" className="img-fluid" />
        </div>

        {/* The content column */}
        <div className="col-12 col-md-6">
          <h1 className="text-center text-md-start">Largest Stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Future and Option</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual Funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-3">
            <img src="media/images/pressLogos.png" alt="Press Logos" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;