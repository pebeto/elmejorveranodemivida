import React from 'react';
import { Nav } from 'react-bootstrap';
import { hardcorize } from '../../utils';

const Footer = () => {
    return (
        <Nav fill>
            <Nav.Item className="brand_name">
                { hardcorize("elmejorveranodemivida") } - {new Date().getFullYear()}
            </Nav.Item>
        </Nav>
    );
};

export default Footer;
