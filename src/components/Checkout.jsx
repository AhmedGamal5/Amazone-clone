import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Checkout.css";
import { useAuth } from "../Context/Globalstate";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const {user , basket} = useAuth();
  return (
    <>
     <section >
      <Container fluid className="fsecincheckout">
        <Row>
          <Col className="" xs={12} md={7} lg={9}>           
            <img src="./images/checkoutAd.jpg" alt="ads" className="ads" />
            <h4> Hello,{user?.email}</h4>
          </Col>
          <Col className="checkout-right" xs={12} md={5} lg={3}>
          <Subtotal />
          </Col>
        </Row>       
      </Container>
    </section>
    <section>
    <Container fluid className="secondsecincheckout">
        <Row>
          <Col className="" xs={12} md={7} lg={9}>  
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
          )}
          </Col>
        </Row>       
      </Container>   
    </section>
    </>
   
   
  );
};

export default Checkout;
