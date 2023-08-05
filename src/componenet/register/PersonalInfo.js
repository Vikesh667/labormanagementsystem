import React from "react";
import style from "./SignUp.module.css";
const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className={style.PersonalInfo}>
      <input
        type="text"
        placeholder="Name..."
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age..."
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />

      <select name="gender" value={formData.gender}
      
      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default PersonalInfo;
