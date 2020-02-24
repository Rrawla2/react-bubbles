import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  })

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(response => {
        console.log(response)
        localStorage.setItem("token", response.data.payload)
        setCredentials({
          username: "",
          password: ""
        })
        props.history.push("/protected")
      })
      .catch(err => {
        localStorage.removeItem("token")
        console.log("Error", err)
      })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          onChange={handleChange}
          value={credentials.username}
        />
        <input 
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
