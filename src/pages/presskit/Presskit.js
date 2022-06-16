import React from 'react';
import { Row, Col, Figure, Badge } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { getAllDates } from '../../services/datesService';
import { getImageURL } from '../../utils';
import './presskit.css';
import logo from '../../assets/images/EMVDMV__ISOTIPO.webp';
import DatesCards from '../../components/datesCards/DatesCards';

class Presskit extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state.dates = getAllDates();
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                fluid
                src={getImageURL('/images/photos/1636339063928.webp')}
              ></Figure.Image>
            </Figure>
          </Col>
          <Col>
            <div className="presskit_text">
              {this.props.t('presskit.text1')}
            </div>
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
        </Row>
        <Row>
          <Col>
            <div className="presskit_text">
              <h2>{this.props.t('presskit.releases')}</h2>
            </div>
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
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/4R5GIXjXhvtCPj0O0LjOcV?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                fluid
                src={getImageURL('/images/photos/DSC03900.webp')}
              ></Figure.Image>
            </Figure>
            <Row>
              <Col>
                <h2>{this.props.t('presskit.formation')}</h2>
              </Col>
              <Col>
                <div className="presskit_text.formation">
                  <h5>
                    {this.props.t('presskit.guitarbass1')}{' '}
                    <Badge bg="success">
                      {this.props.t('presskit.guitarbassbadge')}
                    </Badge>
                  </h5>
                  <h5>
                    {this.props.t('presskit.guitarbass2')}{' '}
                    <Badge bg="danger">
                      {this.props.t('presskit.guitarbassbadge')}
                    </Badge>
                  </h5>
                  <h5>
                    {this.props.t('presskit.voice')}{' '}
                    <Badge bg="warning" text="dark">
                      {this.props.t('presskit.voicebadge')}
                    </Badge>
                  </h5>
                  <h5>
                    {this.props.t('presskit.drums')}{' '}
                    <Badge bg="primary">
                      {this.props.t('presskit.drumsbadge')}
                    </Badge>
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="presskit_text">
              <h1>{this.props.t('presskit.lastdates')}</h1>
            </div>
            <DatesCards slice={5} time="all" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Figure>
              <Figure.Image fluid src={logo}></Figure.Image>
            </Figure>
          </Col>
          <Col>
            <div className="presskit_text">
              <h1>{this.props.t('presskit.credits')}</h1>
              <div>
                <b>{this.props.t('presskit.logodesign')}:</b>{' '}
                {this.props.t('presskit.logodesign.author')}{' '}
                <a
                  className="presskit_social"
                  href="https://www.instagram.com/jaquisieras_/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @jaquisieras_
                </a>
              </div>
              <div>
                <b>{this.props.t('presskit.webdesign')}:</b>{' '}
                {this.props.t('presskit.webdesign.author')}{' '}
                <a
                  className="presskit_social"
                  href="https://www.instagram.com/pebeto99/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @pebeto99
                </a>
              </div>
              <div>
                <b>{this.props.t('presskit.media')}:</b>{' '}
                {this.props.t('presskit.media.author')}{' '}
                <a
                  className="presskit_social"
                  href="https://www.instagram.com/imnotpunk.uwu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @imnotpunk.uwu
                </a>{' '}
                <a
                  className="presskit_social"
                  href="https://www.instagram.com/kar0shee/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @kar0shee
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withTranslation()(Presskit);
