import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "./Homee.css";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import shortid from "shortid";

// import images
import ProductImg1 from "./imagess/products/1.png";
import ProductImg2 from "./imagess/products/2.png";
import ProductImg3 from "./imagess/products/3.png";
import ProductImg4 from "./imagess/products/4.png";
import ProductImg5 from "./imagess/products/5.png";
import ProductImg6 from "./imagess/products/6.png";
import ProductImg7 from "./imagess/products/7.png";
import ProductImg8 from "./imagess/products/8.png";
import ProductImg9 from "./imagess/products/9.png";
import ProductImg10 from "./imagess/products/10.png";
import ProductImg11 from "./imagess/products/11.png";
import ProductImg12 from "./imagess/products/12.png";
import ProductImg13 from "./imagess/products/13.png";
import ProductImg14 from "./imagess/products/14.png";
import ProductImg15 from "./imagess/products/15.png";
import ProductImg16 from "./imagess/products/16.png";
import ProductImg17 from "./imagess/products/17.png";

import { Navigation } from "swiper";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <section className="Homesec1">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src="./images/home1.jpg" alt="home1" className="imgswiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/home2.jpg" alt="home2" className="imgswiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/home3.jpg" alt="home3" className="imgswiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/home4.jpg" alt="home4" className="imgswiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/home5.jpg" alt="home5" className="imgswiper" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="Homesec2">
        <Container>
          <Row>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg1}
                price={230}
                Rating={2}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg6}
                price={400}
                Rating={4}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg5}
                price={620}
                Rating={5}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
          </Row>
          <Row>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg17}
                price={140}
                Rating={2}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg2}
                price={190}
                Rating={5}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg3}
                price={750}
                Rating={3}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
          </Row>
          <Row>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg13}
                price={605}
                Rating={3}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg8}
                price={756}
                Rating={4}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg7}
                price={135}
                Rating={1}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
          </Row>
          <Row>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg9}
                price={361}
                Rating={5}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg10}
                price={129}
                Rating={1}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg11}
                price={952}
                Rating={1}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
          </Row>
          <Row>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg16}
                price={384}
                Rating={3}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg14}
                price={660}
                Rating={4}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg15}
                price={36}
                Rating={2}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
          </Row>
          <Row>
            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg17}
                price={300}
                Rating={1}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>

            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg4}
                price={147}
                Rating={5}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>

            <Col className="HomesecCol" xs={12} md={6} lg={4}>
              <Product
                id={shortid.generate()}
                image={ProductImg12}
                price={226}
                Rating={4}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
