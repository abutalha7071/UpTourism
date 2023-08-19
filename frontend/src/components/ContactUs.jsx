import React from 'react'

const ContactUs = () => {
    return (
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact us</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <div className='div1'>
  <div className="mycontainer">
    <div className="item">
      <div className="contact">
        <div className="first-text">Let's get in touch</div>
        <img
          src="https://vectorforfree.com/wp-content/uploads/2020/03/Working_Men_VectorForFree.png"
          alt=""
          className="image"
        />
        <div className="social links">
          <span className="secnd text" style={{ fontSize: "large" }}>
            Connect with us:
          </span>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="submit-form">
        <h4 className="third-text">Contact Us</h4>
        <form style={{ padding: "0 50px" }}>
          <div className="input-box">
            <input
              type="text"
              className="input"
              placeholder="Name"
              required=""
            />
            <label htmlFor="" />
          </div>
          <div className="input-box">
            <input type="email" className="input" placeholder="Email" />
            <label htmlFor="" />
          </div>
          <div className="input-box">
            <input type="tel" className="input" placeholder="Phone" />
            <label htmlFor="" />
          </div>
          <div className="input-box">
            <textarea
              name=""
              className="input"
              placeholder="Message"
              required=""
              id="message"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <label htmlFor="" />
          </div>
          <input type="submit" className="Submit" />
        </form>
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
</>

    
      );
    };
export default ContactUs