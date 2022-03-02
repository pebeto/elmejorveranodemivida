import React from "react";
import logo from "../assets/images/EMVDMV__ISOTIPO.png";
import { Col, Figure, Row } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import "./main.css";

class Main extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Row>
          <Col>
            <iframe
              title="spotify"
              src="https://open.spotify.com/embed/track/0GMJC2dk7YzppZ0JJWPpPC?utm_source=generator"
              width="100%"
              height="80"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              title="bandcamp"
              style={{ border: 0, width: "100%", height: "120px" }}
              src="https://bandcamp.com/EmbeddedPlayer/track=441872570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://elmejorveranodemivida.bandcamp.com/track/richard-stallman-est-s-cancelado">
                Richard Stallman estás cancelado by El mejor verano de mi vida
              </a>
            </iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c57dMWJoQkY?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
          <Col>
            <Figure>
              <Figure.Image className="logo" src={logo}></Figure.Image>
            </Figure>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withTranslation()(Main);
