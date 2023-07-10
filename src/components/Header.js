import React from "react";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { RiShoppingCartFill } from "react-icons/ri";
// reactstrap components
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useAuth } from "../Context/Globalstate";
import { auth } from "../firebase";

const Header = () => {
  const { user, basket } = useAuth();
  const handleauth = () => {
    auth.signOut();
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar">
        <NavLink to="/">
          <img src="images/header-logo.png" className="logo" alt="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <div className="deliver">
                <div>
                  <MdLocationOn className="delivericon" />
                </div>
                <div>
                  <h6>Deliver to</h6>
                  <h5>Egypt</h5>
                </div>
              </div>
            </Nav.Link>
            <InputGroup className="searchform">
              <Form.Control placeholder="Search" />
              <Button id="button-addon2" className="searchbtn">
                <BiSearch className="searchicon" />
              </Button>
            </InputGroup>
            <NavLink to={"/Signin"} className="signin" onClick={handleauth}>
              <h6>Hello, {user ? `${user.email}` : "Guest"}</h6>
              <h5> {user ? "Sign Out" : "Sign In"}</h5>
            </NavLink>
            <NavLink to={"#"} className="signin">
              <h6>Returns</h6>
              <h5>&Orders</h5>
            </NavLink>
            <NavLink to={"#"} className="signin">
              <h6>Your</h6>
              <h5>Prime</h5>
            </NavLink>
            <NavLink to={"/Checkout"} className="cart">
              <span className="carticon">
                <RiShoppingCartFill />
              </span>
              <span className="cartcount"> {basket?.length}</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
