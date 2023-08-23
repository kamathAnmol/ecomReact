import React, { useState } from "react";
import { emailPassword, createUserDoc } from "../../utils/firebase/firebase";
import FormInput from "../inputField/inputField.component";
import { SignUpBtn } from "./signupForm.styles";
import { UserCredential, UserInfo } from "firebase/auth";

interface formFieldInterface{
  displayName:string; 
  email:string; 
  password:string; 
  confirmPassword:string;
}
const formFields:formFieldInterface = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formInput, setFormInput] = useState<formFieldInterface>(formFields );
  const { displayName, email, password, confirmPassword }:formFieldInterface = formInput;
  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput({ ...formInput, [name]: value });
  };
  const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords Dont Match");
      return;
    }
    try {
      const response:UserCredential|undefined = await emailPassword(email, password, displayName);
      const user:UserInfo|undefined = response?.user;
      await createUserDoc(user, { displayName });
      alert("registered Successfully");
      setFormInput(formFields);
    } catch (error:any) {
      alert(error.code);
    }
  };
  return (
    <div>
      <h1>Sign Up </h1>
      <form onSubmit={submitHandler}>
        <FormInput
          required
          label="Name"
          type="text"
          name="displayName"
          onChange={changeHandler}
          value={displayName}
        />
        <FormInput
          required
          label="Email"
          type="email"
          name="email"
          onChange={changeHandler}
          value={email}
        />
        <FormInput
          required
          label="Password"
          type="password"
          name="password"
          onChange={changeHandler}
          value={password}
        />
        <FormInput
          required
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={changeHandler}
          value={confirmPassword}
        />
        <SignUpBtn label="Sign Up"></SignUpBtn>
      </form>
    </div>
  );
}

export default SignUpForm;
