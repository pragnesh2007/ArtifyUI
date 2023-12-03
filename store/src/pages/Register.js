import React, { useState, useEffect } from "react";
import axios from "axios";
import './Register.css';
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://ecommerce-registeration-service.azurewebsites.net/getUsersData")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRegistration = () => {
    axios.post("https://ecommerce-registeration-service.azurewebsites.net/register", { email, password })
      .then((response) => {
        console.log(response.data);

        if (response.data.message === "Registration successful") {
          setUsers(response.data.users);
          navigate("/login");
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

      <div className="user-list">
        <h2>Registered Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RegistrationForm;
