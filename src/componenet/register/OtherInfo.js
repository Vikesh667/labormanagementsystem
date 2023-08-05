import React from "react";
import style from "./SignUp.module.css";
const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className={style.OtherInfo}>
      <select
        name="category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="">Select category</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        {/* Add more options as needed */}
      </select>

      <select
        name="experience"
        value={formData.experience}
        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
      >
        <option value="">Select experience</option>
        <option value="Less than 1 year">Less than 1 year</option>
        <option value="1-3 years">1-3 years</option>
        <option value="3-5 years">3-5 years</option>
        {/* Add more options as needed */}
      </select>

      <select
        name="field"
        value={formData.field}
        onChange={(e) => setFormData({ ...formData, field: e.target.value })}
      >
        <option value="">Select field</option>
        <option value="Field 1">Field 1</option>
        <option value="Field 2">Field 2</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default OtherInfo;
