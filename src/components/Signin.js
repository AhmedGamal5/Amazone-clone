import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Signin.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../Context/Globalstate";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, Password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, Password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <Row className="signin">
        <Col xs={12} md={12} lg={12} className="signinlogo">
          <Link to="/">
            <img src="images/login-logo.png" alt="logo" className="imglogo" />
          </Link>
        </Col>
        <Col xs={12} md={12} lg={12} className="signinform">
          <div>
            <h1>Sign In</h1>
            <form>
              <h3>Email</h3>
              <input
                type="Email"
                placeholder="Username"
                required
                className="inputkind"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3>Password</h3>
              <input
                type="Password"
                placeholder="Password"
                required
                className="inputkind"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button type="submit" className="btnsubmit" onClick={signIn}>
                Sign In
              </button>
              <p>
                By continuing, you agree to Amazon's Fake Clone Conditions of
                Use and Privacy Notice.
              </p>
              <Link to="/signup" className="signup">
                <button type="submit" className="btnsubmit2" onClick={register}>
                  Don't have an account? Sign Up
                </button>
              </Link>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
