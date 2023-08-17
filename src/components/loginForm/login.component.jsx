import React, { useState } from "react";
import FormInput from "../inputField/inputField.component";
import { LoginBtn, LoginPageContainer } from "./loginPage.styles";
import { useDispatch } from "react-redux";
import { emailSigninStart } from "../../store/user/user.action";

function LoginForm() {
  const defaultForm = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const [forminputs, setForminputs] = useState(defaultForm);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForminputs({ ...forminputs, [name]: value });
  };
  const { email, password } = forminputs;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSigninStart(email, password));
      setForminputs(defaultForm);
      alert("logged in");
    } catch (error) {
      alert(error.code);
    }
  };
  return (
    <LoginPageContainer>
      <h1>Login</h1>
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
        <LoginBtn label="Log In"></LoginBtn>
      </form>
    </LoginPageContainer>
  );
}

export default LoginForm;
