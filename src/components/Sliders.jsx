import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Redirect,
    useParams
  } from "react-router-dom";
import { Carousel, Container, Image, Row, Col } from 'react-bootstrap';
import Images from '../Images.js';
import '../Css/Sliders.css';

const Sliders = () => {
  return (
  <Row className='images'>
      {Images.map((img) => (
              <Col sm={12} md={6} lg={4} xl={3}>
              <Image src={img.img} alt='' />
              </Col>
      ))}
  </Row>
  );
};

export default Sliders;
