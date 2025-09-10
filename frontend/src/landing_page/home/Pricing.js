import React from 'react';

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left column for text and link */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h3>Unbeatable pricing</h3>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="#" className="text-decoration-none">See pricing →</a>
        </div>
        
        {/* Right column for the pricing cards */}
        <div className="col-12 col-md-8">
          <div className="row justify-content-center">
            {/* Card 1: Free Account Opening */}
            <div className="col-12 col-sm-4 text-center mb-4 mb-sm-0">
              <img src="media/images/pricing0.svg" alt="Free account opening icon" className="img-fluid mb-2" style={{ height: '100px' }} />
              <p>Free account opening</p>
            </div>
            
            {/* Card 2: Free Equity Delivery */}
            <div className="col-12 col-sm-4 text-center mb-4 mb-sm-0">
              <img src="media/images/pricing0.svg" alt="Free equity delivery icon" className="img-fluid mb-2" style={{ height: '100px' }} />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            
            {/* Card 3: ₹20 Intraday and F&O */}
            <div className="col-12 col-sm-4 text-center">
              <img src="media/images/Gemini_Generated_Image_mojsbhmojsbhmojs.png" alt="Intraday and F&O icon" className="img-fluid mb-2" style={{ height: '100px' }} />
              <p>₹20 Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;