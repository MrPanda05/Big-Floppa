import React from 'react';
import { Container } from 'react-bootstrap';
import '../Css/Header.css';



const Header = () => {
  return (
  <header>
      <Container fluid className='Header'>
        <h1>Big Floppa</h1>
      </Container>
  </header>
  );
};

export default Header;
