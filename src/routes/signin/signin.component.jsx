import React from "react";
import { popup, createUserDoc } from "../../utils/firebase/firebase";

function Signin() {
  const googleLogin = async () => {
    const { user } = await popup();
    const userDocRef = await createUserDoc(user);
  };

  return (
    <div>
      <button onClick={googleLogin}>Sign in with google</button>
    </div>
  );
}

export default Signin;
