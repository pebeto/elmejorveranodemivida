import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBandcamp,
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import "./header.css";
import i18n from "../../assets/translations/handler";

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
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link className="link" as={Link} to="/dates">
            {t("navbar.dates")}
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/merch">
            {t("navbar.merch")}
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/presskit">
            {t("navbar.press_kit")}
          </Nav.Link>
        </Nav>
        <Container />
        <Nav>
          <Nav.Link className="link" onClick={() => changeLanguage("es")}>
            {t("spanish")}
          </Nav.Link>
          <Nav.Link className="link" onClick={() => changeLanguage("en")}>
            {t("english")}
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/xelmejorveranodemividax/"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
