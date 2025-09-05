import React from 'react'

function Hero() {
  return (
    <div className="container">
  <div className="row text-center">
    <img className='mb-5' src='media/images/homeHero.png' alt='heroimage'/> 

    <h1 className='mb-5' style={{ fontSize: "3rem", fontWeight: "500", color: "#333" }}>
      Invest in everything
    </h1>
    <p style={{ fontSize: "1.25rem", fontWeight: "300", color: "#555" }}>
      Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
    </p>
    <button className="btn" style={{ backgroundColor: "#2b70f0", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "5px", width: "30%", margin: "0 auto" }}>
      Sign up for free
    </button>
  </div>
</div>
  )
}

export default Hero
