import React, { useState } from "react";
import FormInput from "../inputField/inputField.component";
import SignInBtn from "../signInBtn/signinBtn.component";
import { loginWithEmailPassword } from "../../utils/firebase/firebase";

function LoginForm() {
  const defaultForm = {
    email: "",
    password: "",
  };

  const [forminputs, setForminputs] = useState(defaultForm);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForminputs({ ...forminputs, [name]: value });
  };
  const { email, password } = forminputs;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmailPassword(email, password);
      setForminputs(defaultForm);
      alert("logged in");
    } catch (error) {
      alert(error.code);
    }
  };
  return (
    <div className="login-container">
      <h1 className="login-head">Login ➡️</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        ></FormInput>
        <SignInBtn label="Log In"></SignInBtn>
      </form>
    </div>
  );
}

export default LoginForm;
