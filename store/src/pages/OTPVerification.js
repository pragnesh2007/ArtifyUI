import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import "./OPTVerification.css";

const LOCKOUT_DURATION = 30000; // Lockout duration in milliseconds (30 seconds)

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [locked, setLocked] = useState(false); // Add a locked state
  const navigate = useNavigate();

  useEffect(() => {
    let unlockTimeout;

    // Check if the user is locked
    if (locked) {
      // Set a timeout to unlock the user after the specified duration
      unlockTimeout = setTimeout(() => {
        setLocked(false);
        setError(null); // Clear any previous errors
      }, LOCKOUT_DURATION);
    }

    return () => {
      // Clear the unlock timeout when the component unmounts
      clearTimeout(unlockTimeout);
    };
  }, [locked]);

  function validateForm() {
    return otp.length === 4;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (locked) {
      setError(`You are locked out. Try again in ${LOCKOUT_DURATION / 1000} seconds.`);
      return;
    }

    if (otp === "0000") {
      // Successful OTP verification, navigate to the store
      navigate("/store");
    } else {
      setError("Incorrect OTP. Please try again.");
      setLocked(true); // Lock the user after a failed attempt
    }
  }

  return (
    <div className="OTPVerification">
      <Form onSubmit={handleSubmit}>
        <h2>OTP Verification</h2>
        <p>Please check your email for the OTP.</p>
        <Form.Group controlId="otp">
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Form.Group>
        {error && <div className="error-message">{error}</div>}
        <Button
          variant="primary"
          block
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          Verify OTP
        </Button>
        <div className="login-link">
          Already registered? <Link to="/login">Login</Link>
        </div>
      </Form>
    </div>
  );
}
