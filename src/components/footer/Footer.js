import React from 'react';
import { Nav } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <Nav fill>
      <Nav.Item className="brand_name">
        El mejor verano de mi vida - {new Date().getFullYear()}
      </Nav.Item>
    </Nav>
  );
};

export default Footer;
