import "../../index.css";
import { Button, TextInput } from "../../components";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please add a task");
      return;
    }
    if (!password) {
      alert("Please enter password");
      return;
    }
    console.log(email);
  };

  return (
    <div className="layout">
      <form className="form">
        <div className="header">Login</div>
        <TextInput
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="submit__button">
          <Button text="Submit" onClick={onSubmit} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
