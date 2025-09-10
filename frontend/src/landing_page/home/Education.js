import React from 'react';

function EducationSection() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
       
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/images/education.svg" 
            alt="Varsity illustration"
            className="img-fluid"
          />
        </div>

        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h2 >Free and open market education</h2>
          
          <div className="mb-4">
            <p>
              Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="text-decoration-none">Varsity →</a>
          </div>
          
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a href="#" className="text-decoration-none">TradingQ&A →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;