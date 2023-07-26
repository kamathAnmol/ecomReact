import React from "react";
import "./signinBtn.styles.scss";
function SignInBtn({ label }) {
  return (
    <div>
      <button type="submit" className="signin-btn">
        {label}
      </button>
    </div>
  );
}

export default SignInBtn;
