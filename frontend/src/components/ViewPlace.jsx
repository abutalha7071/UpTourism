import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewPlace = () => {

  const [places, setPlaces] = React.useState([]);
  const {location} = useParams();

  const fetchPlaces = async () => {
    const res = await fetch('http://localhost:5000/place/getbylocation/'+location);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setPlaces(data);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const displayPlaces = () => {
    return places.map((place, index) => (
      <div className="col-md-3">
        <div className="card" >
          <img src={'http://localhost:5000/'+ place.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="display-9 fw-bold text-center">{place.name}</h5>
            <p className="card-text">
              {place.description}
            </p>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className='div1'>
      
      <div className="container">
        <div className="row">
          {
            displayPlaces()
          }

          {/* <div className="col-md-3">
          <div className="card" >
             <img src="https://www.tourmyindia.com/socialimg/rumi-darwaza-lucknow.jpg" className="card-img-top" alt="..." />
             <div className="card-body">
             <h5 className="display-9 fw-bold text-center">Rumi Darwaza</h5>
             <p className="card-text">
             The Rumi Darwaza, in Lucknow, Uttar Pradesh, India, is an imposing gateway which was built by Nawab Asaf-Ud-Daula in 1784. It is an example of Awadhi architecture.The Rumi Darwaza, which stands sixty feet tall, was modeled after the Sublime Porte (Bab-iHümayun) in Istanbul.
             </p>
        </div>
      </div>
          </div>
          <div className="col-md-3">
          <div className="card" >
             <img src="https://lh3.googleusercontent.com/p/AF1QipNKJ9bZlaQETcCEDaHeq9P5CRPvVnlIS-8yEZ-f=s1360-w1360-h1020" className="card-img-top" alt="..." />
             <div className="card-body">
             <h5 className="display-9 fw-bold text-center">Chhatar Manzil</h5>
             <p className="card-text">
             The Chattar Manzil stand on the banks of the River Gomti. The Chattar Manzil consisted of a Bari Chattar Manzil and Chhoti Chattar Manzil, however only the larger one still exists. These two buildings were examples of the Indo-European-Nawabi architectural style, even though the Bari Chattar Manzil has been altered over the years.
             </p>
        </div>
      </div>
          </div>
          <div className="col-md-3">
          <div className="card" >
             <img src="https://gumlet.assettype.com/knocksense/import/29623287/origin.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" className="card-img-top" alt="..." />
             <div className="card-body">
             <h5 className="display-9 fw-bold text-center">Janeshwar Mishra Park</h5>
             <p className="card-text">
             The chief minister of Uttar Pradesh, Akhilesh Yadav (session 2012-2017) laid the foundation stone of the park on 6 August 2012. The park was a dream project of SP chief Mulayam Singh Yadav who had asked his son and UP CM Akhilesh Yadav to dedicate a park in the name of Janeshwar Mishra.
             </p>
        </div>
      </div>
          </div> */}
        </div>
      </div>
     {/* <div>
        <h1 className="display-3 fw-bold text-center">AGRA</h1>
        <p className="display-6 fw-bold text-center">TOP PLACES</p>
      </div>*/}
      {/*<div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/375px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-9 fw-bold text-center">Taj Mahal</h5>
                <p className="card-text">
                  The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Agra_03-2016_10_Agra_Fort.jpg/450px-Agra_03-2016_10_Agra_Fort.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-9 fw-bold text-center">Agra Fort</h5>
                <p className="card-text">
                  The Agra Fort is a historical fort in the city of Agra, and also known as Agra's Red Fort. Mughal emperor Humayun was crowned at this fort. It was later renovated by the Mughal emperor Akbar from 1565 and the present-day structure was completed in 1573. It served as the main residence of the rulers of the Mughal dynasty until 1638.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" >
              <img src="https://www.tutorialspoint.com/akbars_tomb/images/akbars_tomb.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-9 fw-bold text-center">Tomb of Akbar</h5>
                <p className="card-text">
                  Akbar's tomb is the tomb of the Mughal emperor Akbar. It was built in 1605–1613 by his son, Jahangir and is situated on 119 acres of grounds in Sikandra, a suburb of Agra, Uttar Pradesh, India. After Akbar's death, his son Jahangir planned and completed the construction of his father's tomb in 1605–1613. It cost 1,500,000 rupees to build and took 3 or 4 years to complete.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" >
              <img src="https://gumlet.assettype.com/knocksense/import/29623287/origin.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-9 fw-bold text-center">Jama Masjid(Agra)</h5>
                <p className="card-text">
                  The Jama Mosque is a 17th-century congregational mosque located in the historic core of Agra, Uttar Pradesh. It was built by Jahanara Begum, Padshah Begum of the Mughal Empire, during the reign of her father, Mughal Emperor Shah Jahan. It is one of the largest mosques in India.Today it is still in use, serving as the principal mosque for the city of Agra. It stands opposite to the Agra Fort, and overlooks the Agra Fort Railway Station.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>*/}
     {/* <div>
        <h1 className="display-3 fw-bold text-center">AYODHYA</h1>
        <p className="display-6 fw-bold text-center">TOP PLACES</p>
      </div>*/}
      {/*<div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Gulabbari.JPG/1024px-Gulabbari.JPG" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-9 fw-bold text-center">GULAB BARI</h5>
                <p className="card-text">
                  Gulab Bari is the Tomb of Nawab Shuja-ud-Daula, located in Ayodhya, Ayodhya district of Uttar Pradesh, India. This place has a good collection of roses of various varieties set by the sides of water fountains. Gulab Bari is the maqbara (Mausoleum) of Nawab Shuja-ud-Daula, the third Nawab of Oudh in the campus.The monument has declared to be of National Importance under the Ancient.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Maqbara_with_palm_trees.JPG/1024px-Maqbara_with_palm_trees.JPG" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-9 fw-bold text-center">Bahu Begum ka Maqbara</h5>
                <p className="card-text">
                  Bahu Begum ka Maqbara, the Tomb of the Queen Bride Begum Unmatuzzohra Bano alias Bahu Begum, is a memorial built for the queen of Nawab Shuja-ud-Daula. It is one of the tallest buildings in the Ayodhya district and is a notable example of non-Mughal Muslim architecture. Sadly, this monument is a victim of neglect and is depleting day by day.
                </p>
              </div>
            </div>
            The Parijaat tree is a sacred baobab tree in the village of Kintoor, near Barabanki, Uttar Pradesh, India, about which there are several legends.It is a protected tree situated in Barabanki district of Uttar Pradesh, India. By the order of local district magistrate, any kind of damage to the tree is strictly prohibited. The tree is known as baobab in modern science which is originated in Sub-sahara Africa and hence its presence in the fertile land of India makes it rare. Also the age of the tree is still not determined, which makes it quite possible that the tree may have been planted by someone who used to travel between India and Africa
          </div>
          <div className="col-md-3">
            <div className="card" >
              <img src="https://www.trawell.in/admin/images/upload/599531486Guptar_Ghat.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-9 fw-bold text-center">Guptar Ghat</h5>
                <p className="card-text">
                  The sacred ghat on the bank of River Saryu is believed to be the spot where Lord Rama took Jal Samadhi. It comprises a series of fine well-maintained Ghats built by Raja Darshan Singh in the first half of the 19th century. On the top of the Ghats there are the Sita-Ram Temple, the Chakrahari and the Guptahari shrines and Narasingh Temple.At a distance of 10 km from Ayodhya Junction, Guptar Ghat is a holy ghat situated on the banks of River Saryu in Faizabad near Ayodhya.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" >
              <img src="https://gumlet.assettype.com/knocksense/import/29623287/origin.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="display-9 fw-bold text-center">Jama Masjid(Agra)</h5>
                <p className="card-text">
                  he Jama Mosque is a 17th-century congregational mosque located in the historic core of Agra, Uttar Pradesh. It was built by Jahanara Begum, Padshah Begum of the Mughal Empire, during the reign of her father, Mughal Emperor Shah Jahan. It is one of the largest mosques in India.Today it is still in use, serving as the principal mosque for the city of Agra. It stands opposite to the Agra Fort, and overlooks the Agra Fort Railway Station.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>*/}

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

export default ViewPlace