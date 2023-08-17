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
    </div>


  )
}

export default Home;

