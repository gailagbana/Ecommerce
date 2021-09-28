import "../../index.css";
import PropTypes from "prop-types";
import { TextInput, Button } from "../../components";
import { useRef, useState } from "react";

async function userLogin(credentials) {
  return fetch("http://10.10.100.32/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const inputRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   // if (!email) {
  //   //   alert("Email is required.");
  //   // }
  //   // if (!password) {
  //   //   alert("Password is required.");
  //   // }

  //   console.log(email);

  //   const inputValue = inputRef.current.value;
  //   console.log(inputValue);
  //};

  const submitHandler = async (e) => {
    e.preventDefault();
    const token = await userLogin({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <div className="layout">
      <form className="form" onSubmit={submitHandler}>
        <div className="header">Login</div>
        <TextInput
          width={"100%"}
          placeholder="email@gmail.com"
          value={email}
          ref={inputRef}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          width={"100%"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="submit__button">
          <Button text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
