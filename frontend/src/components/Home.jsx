import React from 'react'

const Home = () => {
  return (
    <div className='div1'>
      <div id="carouselExample" className="carousel slide" >
        <div className="carousel-inner text-white">
          <div className="carousel-item active slide1">
            <h1 className='text-center'>Uttar Pradesh</h1>
            <p className='display-1 fw-bold text-center'>LUCKNOW</p>
          </div>
          <div className="carousel-item slide2">
            <h1 className='text-center'>Uttar Pradesh</h1>
            <p className='display-1 fw-bold text-center'>Barabanki</p>
          </div>
          <div className="carousel-item slide3">
            <h1 className='text-center'>Uttar Pradesh</h1>
            <p className='display-1 fw-bold text-center'>AGRA</p>
          </div>
          <div className="carousel-item slide4">
            <h1 className='text-center'>Uttar Pradesh</h1>
            <p className='display-1 fw-bold text-center'>AYODHYA</p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h1 className='display-3 fw-bold text-center'>UTTAR PRADESH</h1>
        <p className='display-5 fw-bold text-center'>TOP LOCATION</p>
      </div>
      
      <div className="container1">
        <div className="row">
          <div className="col-md-3">
            <div className="card" >
                <img src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/07/29/884668-beautiful-lucknow.jpg?im=FitAndFill=(1200,900)" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-6 fw-bold text-center">Lucknow</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" >
                <img src="https://static.toiimg.com/photo/31346158.cms" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-6 fw-bold text-center">Agra</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
          <div className="card" >
          <img src="https://imgk.timesnownews.com/story/Untitled_design_1488.png" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="display-6 fw-bold text-center">Ayodhya</h5>
         </div>
         </div>
          </div>
         <div className='col-md-3'>
         <div className="card" >
         <img src="https://chaloghumane.com/wp-content/uploads/2021/08/Dewa-Shareef-Barabanki.jpg" className="card-img-top" alt="..." />
         <div className="card-body">
          <h5 className="display-6 fw-bold text-center">Barabanki</h5>
          </div>
          </div>
           </div>
        </div>
      </div>
      <div>
      <h1 className='display-3 fw-bold text-center'>Ministers</h1>
      </div>
      <div className="container2">
        <div className="row">
          <div className="col-md-2">
            <div className="card" >
                <img src="https://www.uptourism.gov.in/site/writereaddata/siteContent/202203291644477335jaivir-singh.jpg" className="ms-1 rounded-circle" alt="..." />
              <div className="card-body">
                 <h5 className="display-7 fw-bold text-center">Shri Jaiveer Singh</h5>
                 <p className="card-text">Hon'ble Cabinet Minister Department of Tourism Uttar Pradesh</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card" >
                <img src="https://www.uptourism.gov.in/images/cm.jpg" className="ms-1 rounded-circle" alt="..." />
              <div className="card-body">
                 <h5 className="display-7 fw-bold text-center">Yogi Adityanath</h5>
                 <p className="card-text">Hon'ble Chief Minister Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              
               About Uttar Pradesh
            </h6>
            <p>
            Uttar Pradesh is a state in northern India. With over 241 million inhabitants, it is the most populated state in India as well as the most populous country subdivision in the world more populous than all but four countries accounting for 16.5% of the total population of India. It was established in 1950 after India had become a republic.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Location</h6>
            <p>
              <a href="#!" className="text-reset">
                Lucknow
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Agra
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Ayodhya
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Barabanki
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="http://localhost:3000/login" className="text-reset">
                Login
              </a>
            </p>
            <p>
              <a href="http://localhost:3000/contact#" className="text-reset">
                Contact Us
              </a>
            </p>
            <p>
              <a href="http://localhost:3000/addplace" className="text-reset">
                Add Place
              </a>
            </p>
            <p>
              <a href="http://localhost:3000/viewlocation" className="text-reset">
                View Location
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
               UP Tourism
            </p>
            <p>
            <a href="" className="text-reset">
                abutalhazakikhan12345@gmail.com
              </a>
            </p>
            <p>
               +91 9140477071
            </p>
            <p>
               +91 8948326837
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2023 Copyright:
      <a className="text-reset fw-bold" href="http://localhost:3000/home">
        UPTourism.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>
    </div>


  )
}

export default Home;

