import React, { useState } from "react";
import style from "./SignUp.module.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    category: "",
    gender: "",
    experience: "",
    field: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log(formData);
   
  };

  return (
    <div className={style.container}>
      <form className={style.formcontainer} onSubmit={handleSubmit}>
        <div className={style.heading}>
          <h2>Sign Up </h2>
        </div>
        <div className={style.leftForm}>
          <div className={style.formgroup}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formgroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formgroup}>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.formgroup}>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={style.rigthForm}>
          <div className={style.formgroup}>
            <label>Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={style.formgroup}>
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={style.formgroup}>
            <label>Experience:</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select experience</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={style.formgroup}>
            <label>Field:</label>
            <select
              name="field"
              value={formData.field}
              onChange={handleChange}
              required
            >
              <option value="">Select field</option>
              <option value="Field 1">Field 1</option>
              <option value="Field 2">Field 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className={style.btn}>
          <button>submit</button>
          <p>
            if you an account <Link>SigIn</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
