import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {

  const navigate = useNavigate();

  const [selImage, setSelImage] = useState('');

  const signupForm = useFormik({
    initialValues: {
      name: '',
      image: '',
      description: ''
    },

    onSubmit: async (values) => { 
      values.image = selImage;
      console.log(values);

      // sending request to backend
      const res = await fetch('http://localhost:5000/place/add', {
        method: 'POST',
        body : JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Signup Success!!',
          text: 'Now Login to Continue'
        });
        // navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
        });
      }
    }
  })

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);
  };
  

  return (
    <>
    
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <div className="container">
      <div className="item">
        <div className="contact">
          <div className="first-text">Add Tourist Places</div>
          <img
            src="https://www.uptourism.gov.in/images/photos.jpg"
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
          <h4 className="third-text">Add Place</h4>

          <form style={{ padding: "0 50px" }} onSubmit={signupForm.handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                className="input"
                placeholder="Name"
                required=""
                name="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
              />
              <label htmlFor="" />
            </div>
           
           
            <div className="input-box">
              <textarea
                name="description"
                onChange={signupForm.handleChange}
                value={signupForm.values.description}
                className="input"
                placeholder="Discription"
                required=""
                cols={30}
                rows={10}
                defaultValue={""}
              />
              <label htmlFor="" />
            </div>
            <div>
            <label htmlFor="">Upload File</label>
            <input type="file" onChange={uploadFile} />
            </div>

            <button type="upload" className="Upload">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Signup;