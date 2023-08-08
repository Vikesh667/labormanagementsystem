import React, { useState } from "react";
import style from "./Form.module.css";
import SignUp from "./SignUp";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { Link, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [page, setPage] = useState(1);
 const [formData,setFormData]=useState({
  email:"",
  phone:"",
  phone:"",
  name:"",
  age:"",
  gender:"",
  category:"",
  experience:"",
  field:""
 })
  const FormTitles = ["Sing Up", "Personal Info", "Other"];
  const navigate=useNavigate()
  const PageDisplay = () => {
    if (page === 0) {
      return <SignUp formData={formData} setFormData={setFormData}/>;
    } else if (page == 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData}/>;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData}/>;
    }
  };


  const handleSubmin = async (formData) => {
    // try {
    //   const res = await fetch("http://localhost:8080/user", {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: {
    //       'content-type': 'application/json'
    //     }
    //   });
  
    //   if (!res.ok) {
    //     throw new Error('Network response was not ok.');
    //   }
  
    //   const responseText = await res.text();
    //   alert("Form submitted successfully!")
    //   console.log('Response:', responseText); 
    //   navigate('/dashboard')
      
    // } catch (error) {
    //   console.error('Error:', error.message);
    // }
    try {
      localStorage.setItem("user",JSON.stringify(formData))
      alert("Form submitted successfully!")
    } catch (error) {
       alert("failed to submited")
        navigate('/dashboard')
    }
  };
  
  
  return (
    <div className={style.signup}>
      <div className={style.formContainer}>
        <div className={style.leftcontainer}>
          <img src="https://t3.ftcdn.net/jpg/05/82/81/52/240_F_582815230_nwRKXbisW0R5XiNAoJXBfYJJdV7Ms7O3.jpg" />
        </div>
        <div className={style.rightcontainer}>
          <div className={style.progressbar}>
            <div
              style={{
                width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <div className={style.header}>
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className={style.body}>{PageDisplay()}</div>
          <div className={style.footer}>
            <button
              className={`${style.button} ${style.buttonprev}`}
              disabled={page === 0}
              onClick={() => setPage((currPage) => currPage - 1)}
            >
              Prev
            </button>
            <button
              className={`${style.button} ${style.buttonnext}`}
              i
              onClick={() => {
                if(page===FormTitles.length-1){
                     handleSubmin(formData)
                }else{
                  setPage((currPage) => currPage + 1)}
                }
               
              
              }
            >
              {page==FormTitles.length-1 ? "Submit" :"Next"}
            </button>
          </div>
          <div className={style.link}>
            <p>
              If you have an account <Link to="/sigin">Sig In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
