import React, { useEffect } from 'react';

const ViewPlace = () => {

  const [places, setPlaces] = React.useState([]);

  const fetchPlaces = async () => {
    const res = await fetch('http://localhost:5000/place/getall');
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
    <div className='div3'>
      <div>
        <h1 className="display-3 fw-bold text-center">LUCKNOW</h1>
        <p className="display-5 fw-bold text-center">TOP PLACES</p>
      </div>
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
                  he Jama Mosque is a 17th-century congregational mosque located in the historic core of Agra, Uttar Pradesh. It was built by Jahanara Begum, Padshah Begum of the Mughal Empire, during the reign of her father, Mughal Emperor Shah Jahan. It is one of the largest mosques in India.Today it is still in use, serving as the principal mosque for the city of Agra. It stands opposite to the Agra Fort, and overlooks the Agra Fort Railway Station.
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
    </div>
  )
}

export default ViewPlace