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
                            title="apple music"
                            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                            height="110%"
                            style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px', paddingBottom: '25px' }}
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                            src="https://embed.music.apple.com/us/album/el-mejor-verano-de-mi-vida-ep/1622251663"
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6}>
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
                            src="https://embed.tidal.com/albums/227354052"
                            style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
                            allow="encrypted-media"
                            sandbox="allow-same-origin allow-scripts allow-forms allow-popups" title="TIDAL Embed Player"
                        />
                        <iframe
                            title="spotify"
                            style={{ borderRadius: '12px', width: '100%', height: '50%' }}
                            src="https://open.spotify.com/embed/album/5atwna2DVeRTYaSpfY3gi2?utm_source=generator"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        />
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
                                src="https://www.youtube.com/embed/JySRK3UXp5c?controls=0"
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
                                src="https://www.youtube.com/embed/CaTFsaPv16Q?controls=0"
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
