import {
    Nav,
    Navbar
} from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    faDeezer,
    faTiktok,
    faSpotify,
    faTwitter,
    faYoutube,
    faBandcamp,
    faInstagram,
    faItunesNote,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import i18n from '../../services/i18n';

import './header.css';
import { hardcorize } from '../../utils';

const changeLanguage = (language) => {
    i18n.changeLanguage(language);
};

const Header = () => {
    const { t } = useTranslation();
    return (
        <Navbar variant="light" collapseOnSelect expand="lg">
            <Navbar.Brand className="brand_name" as={Link} to="/">
                { hardcorize("elmejorveranodemivida") }
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
                <Navbar.Text>
                    <div>
                        [
                        <button className="language_switch" onClick={() => changeLanguage('es')}>
                            español
                        </button>
                        <button className="language_switch" onClick={() => changeLanguage('en')}>
                            english
                        </button>
                        ]

                    </div>
                    <div>
                        <a
                            className="social_icon"
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.instagram.com/emvdmvband/"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                            className="social_icon"
                            href="https://twitter.com/emvdmv"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a
                            className="social_icon"
                            href="https://www.youtube.com/channel/UCSyQLlL_7JyVbA_1mPyW5Sg"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        <a
                            className="social_icon"
                            href="https://www.tiktok.com/@elmejorveranodemivida"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </a>
                        <a
                            className="social_icon"
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://elmejorveranodemivida.bandcamp.com/"
                        >
                            <FontAwesomeIcon icon={faBandcamp} size="lg" />
                        </a>
                        <a
                            className="social_icon"
                            href="https://open.spotify.com/artist/0eeLx3Q4FwreAyuPZLxR3n?si=_5ANYiUKTpWqUBI63Neq_g"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faSpotify} size="lg" />
                        </a>
                        <a
                            className="social_icon"
                            href="https://deezer.page.link/mxiyXstox23TezwH7"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faDeezer} size="lg" />
                        </a>
                        <a
                            className="social_icon"
                            href="https://music.apple.com/pe/artist/el-mejor-verano-de-mi-vida/1611919913"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faItunesNote} size="lg" />
                        </a>
                    </div>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
