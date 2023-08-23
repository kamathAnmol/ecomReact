import  { useState } from "react";
import FormInput from "../inputField/inputField.component";
import { loginWithEmailPassword } from "../../utils/firebase/firebase";
import { LoginBtn, LoginPageContainer } from "./loginPage.styles";

function LoginForm() {
  const defaultForm = {
    email: "",
    password: "",
  };

  const [forminputs, setForminputs] = useState(defaultForm);
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForminputs({ ...forminputs, [name]: value });
  };
  const { email, password } = forminputs;
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginWithEmailPassword(email, password);
      setForminputs(defaultForm);
      alert("logged in");
    } catch (error:any) {
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
