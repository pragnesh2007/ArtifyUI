import React, { useState } from "react";
import axios from "axios";
import './Register.css'; // Import your custom CSS file
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleRegistration = () => {
    axios.post("https://ecommerce-registeration-service.azurewebsites.net/register", { email, password })
      .then((response) => {
        console.log(response.data);

        if (response.data.message === "Registration successful") {
          // Redirect to the login page after successful registration
          navigate("/login"); // Replace with the actual login route
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="register-container">
      <h1>Registration</h1>
      <div className="input-container">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="register-button" onClick={handleRegistration}>
        Register
      </button>
    </div>
  );
}

export default RegistrationForm;
