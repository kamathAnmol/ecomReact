import React from "react";
import { SigninBtnStyles } from "./signinBtn.styles";
function SignInBtn({ label, ...otherProps }) {
  return (
    <div>
      <SigninBtnStyles type="submit" {...otherProps}>
        {label}
      </SigninBtnStyles>
    </div>
  );
}

export default SignInBtn;
