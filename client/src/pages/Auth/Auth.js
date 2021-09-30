import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/authContext";

const Auth = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const usernameInputRef = useRef();

  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const authContext = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let enteredFirstName = firstNameInputRef.current
      ? firstNameInputRef.current.value
      : "";
    let enteredLastName = lastNameInputRef.current
      ? lastNameInputRef.current.value
      : "";
    let enteredUsername = usernameInputRef.current
      ? usernameInputRef.current.value
      : "";
    let enteredEmail = emailInputRef.current.value;
    let enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    if (isLogin) {
      fetch("user/login", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          setIsLoading(false);
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then((data) => {
              let errorMessage = "Authentication Failed";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          authContext.login(data.payload.token);
          authContext.userDetail(data.payload);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      fetch("/user/", {
        method: "POST",
        body: JSON.stringify({
          firstName: enteredFirstName,
          lastName: enteredLastName,
          userName: enteredUsername,
          email: enteredEmail,
          password: enteredPassword,
          //   returnSecretToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          setIsLoading(false);
          if (response.ok) {
            return response.json().then((data) => {
              console.log(data);
            });
          } else {
            return response.json().then((data) => {
              let errorMessage = "Authentication Failed";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              alert(errorMessage);
            });
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <section className="auth">
      {isLogin ? (
        <>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
            <div className="auth__control">
              <label htmlFor="email" />
              <input
                type="email"
                placeholder="Enter Email Address"
                ref={emailInputRef}
                id="email"
                required
              />
            </div>
            <div className="auth__control">
              <label htmlFor="password" />
              <input
                type="password"
                placeholder="Enter password"
                ref={passwordInputRef}
                id="password"
                required
              />
            </div>
            <div className="auth__actions">
              {!isLoading && (
                <button>{isLogin ? "Login" : "Create Account"}</button>
              )}
              {isLoading && <p>Loading...</p>}
              <button
                type="button"
                className="auth__toggle"
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={submitHandler}>
            <div className="auth__control">
              <label htmlFor="firstName" />
              <input
                type="firstName"
                placeholder="Enter First name"
                ref={firstNameInputRef}
                id="firstName"
                required
              />
            </div>
            <div className="auth__control">
              <label htmlFor="last name" />
              <input
                type="lastName"
                placeholder="Enter Last name"
                ref={lastNameInputRef}
                id="lastName"
                required
              />
            </div>
            <div className="auth__control">
              <label htmlFor="username" />
              <input
                type="userName"
                placeholder="Enter Username"
                ref={usernameInputRef}
                id="userName"
                required
              />
            </div>
            <div className="auth__control">
              <label htmlFor="email" />
              <input
                type="email"
                placeholder="Enter Email Address"
                ref={emailInputRef}
                id="email"
                required
              />
            </div>
            <div className="auth__control">
              <label htmlFor="password" />
              <input
                type="password"
                placeholder="Enter Password"
                ref={passwordInputRef}
                id="password"
                required
              />
            </div>
            <div className="auth__actions">
              {!isLoading && (
                <button>{isLogin ? "Login" : "Create Account"}</button>
              )}
              {isLoading && <p>Loading...</p>}
              <button
                type="button"
                className="auth__toggle"
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default Auth;
