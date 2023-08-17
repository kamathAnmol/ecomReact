import React from "react";
import { useState } from "react";
import FormInput from "../inputField/inputField.component";
import { SignUpBtn } from "./signupForm.styles";
import { useDispatch } from "react-redux";
import { signupStart } from "../../store/user/user.action";
const formFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUpForm() {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({ formFields });
  const { displayName, email, password, confirmPassword } = formInput;
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput({ ...formInput, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords Dont Match");
    }
    try {
      dispatch(signupStart(email, password, displayName));
      setFormInput(formFields);
    } catch (error) {
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
