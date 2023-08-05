import React from "react";
import style from "./SignUp.module.css"
const PersonalInfo = () => {
  return (
    <div className={style.PersonalInfo}>
      <input type="text" placeholder="Name..." />
      <input type="text" placeholder="Age..." />

      <select
        name="gender"
        // value={formData.gender}
        // onChange={handleChange}
        // required
        // className={style.input}
      >
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default PersonalInfo;
