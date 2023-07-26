import React from "react";
import "./inputFields.styles.scss";
function FormInput({ label, ...otherProps }) {
  return (
    <div class="form__group field">
      <input
        {...otherProps}
        className="form__field"
        placeholder="Name"
        required
      />
      <label htmlFor="name" class="form__label">
        {label}
      </label>
    </div>
    // <div className="input-container">
    //   <label>{label}</label>
    //   <input {...otherProps} />
    // </div>
  );
}

export default FormInput;
