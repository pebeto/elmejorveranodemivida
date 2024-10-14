import {
    Nav,
    Navbar
} from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    faGithub,
    faSpotify,
    faTwitter,
    faYoutube,
    faBandcamp,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import i18n from '../../services/i18n';

import './header.css';

const changeLanguage = (language) => {
    i18n.changeLanguage(language);
};

const Header = () => {
    const { t } = useTranslation();
    return (
        <Navbar variant="light" collapseOnSelect expand="lg">
            <Navbar.Brand className="brand_name" as={Link} to="/">
                El mejor verano de mi vida
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="navbar_header" id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link className="link" as={Link} to="/merch">
                        {t('navbar.merch')}
                    </Nav.Link>
                    <Nav.Link className="link" as={Link} to="/presskit">
                        {t('navbar.press_kit')}
                    </Nav.Link>
                    <Nav.Link className="link" as={Link} to="/contact">
                        {t('navbar.contact')}
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="link" onClick={() => changeLanguage('es')}>
                        {t('spanish')}
                    </Nav.Link>
                    <Nav.Link className="link" onClick={() => changeLanguage('en')}>
                        {t('english')}
                    </Nav.Link>
                    <Nav.Link
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://www.instagram.com/emvdmvband/"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </Nav.Link>
                    <Nav.Link
                        href="https://twitter.com/emvdmv"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </Nav.Link>
                    <Nav.Link
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://elmejorveranodemivida.bandcamp.com/"
                    >
                        <FontAwesomeIcon icon={faBandcamp} size="lg" />
                    </Nav.Link>
                    <Nav.Link
                        href="https://open.spotify.com/artist/0eeLx3Q4FwreAyuPZLxR3n?si=_5ANYiUKTpWqUBI63Neq_g"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faSpotify} size="lg" />
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.youtube.com/channel/UCSyQLlL_7JyVbA_1mPyW5Sg"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </Nav.Link>
                    <Nav.Link
                        href="https://github.com/pebeto/elmejorveranodemivida/"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
