import {
    Col,
    Row,
    Badge,
    Figure,
} from 'react-bootstrap';
import React from 'react';
import { withTranslation } from 'react-i18next';

import logo from '../../assets/images/sun_logo.webp';
import cruz_presentation_photo from '../../assets/images/photos/cruz_presentation.webp';
import first_presentation_photo from '../../assets/images/photos/first_presentation.webp';

import './presskit.css';

class Presskit extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Image
                                fluid
                                src={first_presentation_photo}
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
                            title="spotify"
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/track/4R5GIXjXhvtCPj0O0LjOcV?utm_source=generator"
                            width="100%"
                            height="380"
                            allowFullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        ></iframe>
                    </Col>
                    <Col>
                        <Figure>
                            <Figure.Image
                                fluid
                                src={cruz_presentation_photo}
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
