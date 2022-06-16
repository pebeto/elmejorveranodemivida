import React from 'react';
import logo from '../assets/images/EMVDMV__ISOTIPO.webp';
import { Col, Figure, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import './main.css';

class Main extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Row>
          <Col>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/album/5atwna2DVeRTYaSpfY3gi2?utm_source=generator"
              width="100%"
              height="250"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              title="bandcamp"
              style={{ border: 0, width: '100%', height: '120px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1828008601/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://elmejorveranodemivida.bandcamp.com/album/el-mejor-verano-de-mi-vida">
                El mejor verano de mi vida by El mejor verano de mi vida
              </a>
            </iframe>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/N50iT1cFQVw?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
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
