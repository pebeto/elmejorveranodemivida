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
    const [open, setOpen] = React.useState(false);
    const closeMenu = () => setOpen(false);
    return (
        <div className="navbar-header-bg">
            <div className="navbar-header-inner">
                <Link to="/" className="brand_name" onClick={closeMenu}>
                    {hardcorize("elmejorveranodemivida")}
                </Link>
                <button
                    type="button"
                    className="navbar-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                >
                    <span className="navbar-toggle-bar" />
                    <span className="navbar-toggle-bar" />
                    <span className="navbar-toggle-bar" />
                </button>
                <div className={`navbar-center${open ? ' is-open' : ''}`}>
                    <nav className="nav-links">
                        <Link to="/merch" className="nav-link" onClick={closeMenu}>
                            {t('navbar.merch')}
                        </Link>
                        <Link to="/presskit" className="nav-link" onClick={closeMenu}>
                            {t('navbar.press_kit')}
                        </Link>
                        <Link to="/contact" className="nav-link" onClick={closeMenu}>
                            {t('navbar.contact')}
                        </Link>
                    </nav>
                    <div className="right-side">
                        <div className="language-row">
                            <button className="language_switch" onClick={() => changeLanguage('es')}>
                                español
                            </button>
                            <button className="language_switch" onClick={() => changeLanguage('en')}>
                                english
                            </button>
                        </div>
                        <div className="social-icons">
                            <a className="social_icon" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/emvdmvband/">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a className="social_icon" href="https://twitter.com/emvdmv" rel="noreferrer noopener" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a className="social_icon" href="https://www.youtube.com/channel/UCSyQLlL_7JyVbA_1mPyW5Sg" rel="noreferrer noopener" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} size="lg" />
                            </a>
                            <a className="social_icon" href="https://www.tiktok.com/@elmejorveranodemivida" rel="noreferrer noopener" target="_blank">
                                <FontAwesomeIcon icon={faTiktok} size="lg" />
                            </a>
                            <a className="social_icon" target="_blank" rel="noreferrer noopener" href="https://elmejorveranodemivida.bandcamp.com/">
                                <FontAwesomeIcon icon={faBandcamp} size="lg" />
                            </a>
                            <a className="social_icon" href="https://open.spotify.com/artist/0eeLx3Q4FwreAyuPZLxR3n?si=_5ANYiUKTpWqUBI63Neq_g" rel="noreferrer noopener" target="_blank">
                                <FontAwesomeIcon icon={faSpotify} size="lg" />
                            </a>
                            <a className="social_icon" href="https://deezer.page.link/mxiyXstox23TezwH7" rel="noreferrer noopener" target="_blank">
                                <FontAwesomeIcon icon={faDeezer} size="lg" />
                            </a>
                            <a className="social_icon" href="https://music.apple.com/pe/artist/el-mejor-verano-de-mi-vida/1611919913" rel="noreferrer noopener" target="_blank">
                                <FontAwesomeIcon icon={faItunesNote} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
