import React from "react";
import "./inputFields.styles.scss";
function FormInput({ label, ...otherProps }) {
  return (
    <div className="form__group field">
      <input {...otherProps} className="form__field" placeholder="Name" />
      <label htmlFor="name" className="form__label">
        {label}
      </label>
    </div>
  );
}

export default FormInput;
