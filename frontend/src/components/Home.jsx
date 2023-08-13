import React from 'react'

const Home = () => {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner text-white">
    <div className="carousel-item active slide1">
      <h1 className='text-center'>Uttar Pradesh</h1>
      <p className='display-1 fw-bold text-center'>LUCKNOW</p>
    </div>
    <div className="carousel-item slide2">
      <h1 className='text-center'>Uttar Pradesh</h1>
      <p className='display-1 fw-bold text-center'>AYODHYA</p>
    </div>
    <div className="carousel-item slide3">
    <h1 className='text-center'>Uttar Pradesh</h1>
      <p className='display-1 fw-bold text-center'>AGRA</p>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Home;

