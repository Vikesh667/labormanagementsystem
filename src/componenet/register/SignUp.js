import React from "react";
import style from "./SignUp.module.css";
const SignUp = ({ formData, setFormData }) => {
  return (
    <div className={style.signupContainer}>
      <input
        type="email"
        placeholder="Eamil..."
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password..."
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone..."
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
    </div>
  );
};

export default SignUp;
