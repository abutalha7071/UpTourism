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
    <div className='div2'>
      <div className="container">
        <div className="row1">
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
                <a href="#" className="btn btn-primary">
                  View Places
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row2">
          <div className="col-md-3">
            <div className="card" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0MuefdG01JpZURjDOsiVwiUhGFmhYT0ErGdHCAX_2xlS2RSBlOtln55LfzFxI8yYyxA&usqp=CAU" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Kanpur</h5>
                <p className="card-text">
                  Kanpur is a major industrial town of Uttar Pradesh, the northern state of India. This town is situated on the south bank of river Ganga,located 80 km west of Lucknow, the state capital. It is also known as the industrial capital of the state.
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
                <h5 className="card-title">Lakhimpur Kheri</h5>
                <p className="card-text">
                  Lakhimpur Kheri is the largest district in Uttar Pradesh, India, on the border with Nepal. Its administrative capital is the city of Lakhimpur. Lakhimpur Kheri district is a part of Lucknow division, with a total area of 7,680 square kilometres (2,970 sq mi).
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
      <div className="container">
        <div className="row2">
          <div className="col-md-3">
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


    </div>

  )
}

export default ViewLocation