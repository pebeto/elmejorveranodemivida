import {
    Col,
    Row,
} from 'react-bootstrap';
import React from 'react';
import { withTranslation } from 'react-i18next';

class Main extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <iframe
                            title="bandcamp"
                            style={{ border: 0, width: '100%', height: '100%' }}
                            src="https://bandcamp.com/EmbeddedPlayer/album=1828008601/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                            seamless
                        >
                            <a href="https://elmejorveranodemivida.bandcamp.com/album/el-mejor-verano-de-mi-vida">
                                El mejor verano de mi vida by El mejor verano de mi vida
                            </a>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <iframe
                            title="spotify"
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/album/5atwna2DVeRTYaSpfY3gi2?utm_source=generator"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        ></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/0A7rYzvOLQM?controls=0"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                    <Col>
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/NjRlKZEWtLc?controls=0"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withTranslation()(Main);
