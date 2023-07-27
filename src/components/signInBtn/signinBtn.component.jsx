import React from "react";
import "./signinBtn.styles.scss";
function SignInBtn({ label, ...otherProps }) {
  return (
    <div>
      <button type="submit" className="signin-btn" {...otherProps}>
        {label}
      </button>
    </div>
  );
}

export default SignInBtn;
