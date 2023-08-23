import React from "react";
import { SigninBtnStyles } from "./signinBtn.styles";
interface signInBtnInterface{
  label:string;
  onClick?:()=>void;
}
function SignInBtn({ label, ...otherProps }:signInBtnInterface) {
  return (
    <div>
      <SigninBtnStyles type="submit" {...otherProps}>
        {label}
      </SigninBtnStyles>
    </div>
  );
}

export default SignInBtn;
