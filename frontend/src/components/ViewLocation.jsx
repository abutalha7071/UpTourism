import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewLocation = () => {

  const { index } = useParams();

  const fetchPlaces = async () => {
    const res = await fetch('http://localhost:5000/place/getall');
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);




  return (
    <div className='div1'>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" >
              <img src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/07/29/884668-beautiful-lucknow.jpg?im=FitAndFill=(1200,900)" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lucknow</h5>
                <p className="card-text">
                  Lucknow, the capital of Uttar Pradesh, lies in the middle of the Heritage Arc. This bustling city, famed for its Nawabi era finesse and amazing food, is a unique mix of the ancient and the modern. It is home to extraordinary monuments depicting a fascinating blend of ancient, colonial and oriental architecture.
                </p>
                <Link to="/viewplace/Lucknow" className="btn btn-primary">
                  View Places
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" >
              <img src="https://static.toiimg.com/photo/31346158.cms" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Agra</h5>
                <p className="card-text">
                  Agra is a city on the banks of the river Yamuna in the northern state of Uttar Pradesh. It is 378 kilometres west of the state capital ,Lucknow, 206 kilometres south of the national capital New Delhi, 58 kilometres south from Mathura and 125 kilometres north of Gwalior. Agra is one of the most populous cities in Uttar Pradesh.
                </p>
                <Link to="/viewplace/Agra" className="btn btn-primary">
                  View Places
                </Link>
              </div>

            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" >
              <img src="https://imgk.timesnownews.com/story/Untitled_design_1488.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ayodhya</h5>
                <p className="card-text">
                  Many eminent kings such as Ikshvaku, Prithu, Mandhata, Harishchandra, Sagar, Bhagirath, Raghu, Dileep, Dashrath and Ram ruled the capital city of Kosaldesh. It was during their reign, that the grandeur of the kingdom reached its pinnacle and epitomized Ram Rajya. Ayodhya is the birthplace of Lord Ram and setting of the great epic Ramayana. It is a city of ancient historical, cultural and religious important situated on the banks of the river Saryu (Ghagra).
                </p>
                <Link to="/viewplace/Ayodhya" className="btn btn-primary">
                  View Places
                </Link>
              </div>

            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" >
              <img src="https://chaloghumane.com/wp-content/uploads/2021/08/Dewa-Shareef-Barabanki.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Barabanki</h5>
                <p className="card-text">
                  The land of Barabanki district possesses a rich heritage in keeping with its glorious past. This district since its inception has been the meditorium for numerous saints and ascetics, sanctum sanctorum of ‘Sadhna’ for the literary intellectuals and battlefield for the freedom fighters. The contribution of the freedom fighters of Barabanki in the first war of independence (1857) was recorded to be of a high order.
                </p>
                <Link to="/viewplace/Barabanki" className="btn btn-primary">
                  View Places
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0MuefdG01JpZURjDOsiVwiUhGFmhYT0ErGdHCAX_2xlS2RSBlOtln55LfzFxI8yYyxA&usqp=CAU" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Varanasi</h5>
                <p className="card-text">
                Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva.
                </p>
                <Link to="/viewplace/Varanasi" className="btn btn-primary">
                  View Places
                </Link>
              </div>

            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" >
              <img src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/07/29/884668-beautiful-lucknow.jpg?im=FitAndFill=(1200,900)" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mathura</h5>
                <p className="card-text">
                  Lakhimpur Kheri is the largest district in Uttar Pradesh, India, on the border with Nepal. Its administrative capital is the city of Lakhimpur. Lakhimpur Kheri district is a part of Lucknow division, with a total area of 7,680 square kilometres (2,970 sq mi).
                </p>
                <Link to="/viewplace/Mathura" className="btn btn-primary">
                  View Places
                </Link>
              </div>

            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" >
              <img src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/07/29/884668-beautiful-lucknow.jpg?im=FitAndFill=(1200,900)" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lucknow</h5>
                <p className="card-text">
                  Lucknow, the capital of Uttar Pradesh, lies in the middle of the Heritage Arc. This bustling city, famed for its Nawabi era finesse and amazing food, is a unique mix of the ancient and the modern. It is home to extraordinary monuments depicting a fascinating blend of ancient, colonial and oriental architecture.
                </p>
                <a href="#" className="btn btn-primary">
                  View Places
                </a>
              </div>

            </div>
          </div>
          <div className='col-md-3'>
            <div className="card" >
              <img src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/07/29/884668-beautiful-lucknow.jpg?im=FitAndFill=(1200,900)" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lucknow</h5>
                <p className="card-text">
                  Lucknow, the capital of Uttar Pradesh, lies in the middle of the Heritage Arc. This bustling city, famed for its Nawabi era finesse and amazing food, is a unique mix of the ancient and the modern. It is home to extraordinary monuments depicting a fascinating blend of ancient, colonial and oriental architecture.
                </p>
                <a href="#" className="btn btn-primary">
                  View Places
                </a>
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

export default ViewLocation