import React from 'react';

const Stats = () => {
  return (
    <div className="container mt-5">
      {/* "Trust with confidence" heading */}
      

      {/* Main content row */}
      <div className="row align-items-center">
        {/* Left column for text content */}
        <div className=" col-md-6 mb-4 mb-md-0">
          <div className="p-3 p-md-0">
            {/* Customer-first always */}

            <h3 >Trust with confidence</h3>
            <h4 >Customer-first always</h4>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.
            </p>

            {/* No spam or gimmicks */}
            <h4 >No spam or gimmicks</h4>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a>
            </p>

            {/* The Zerodha universe */}
            <h4 >The Zerodha universe</h4>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
            </p>

            {/* Do better with money */}
            <h4 >Do better with money</h4>
            <p>
              With initiatives like **Nudge** and **Kill Switch**, we don't just facilitate transactions, but actively help you do better with your money.
            </p>
           
          </div>
        </div>

        {/* Right column for the diagram image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/images/ecosystem.png" // Replace with the actual path to your combined image
            alt="Zerodha apps ecosystem diagram"
            className="img-fluid"
          />

           <div className="d- flex gap-3 mt-4">
              <a href="#">Explore our products →</a>
              <a href="#">Try Kite demo →</a>
            </div>
        </div>

        
      </div>

      
    </div>
  );
};

export default Stats;