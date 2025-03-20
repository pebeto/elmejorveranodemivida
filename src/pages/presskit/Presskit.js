import {
    Col,
    Row,
    Figure,
} from 'react-bootstrap';
import React from 'react';
import { withTranslation } from 'react-i18next';

import martin_photo from '../../assets/images/photos/martin.webp'
import rafa_photo from '../../assets/images/photos/rafa.webp'
import santiago_photo from '../../assets/images/photos/santiago.webp'
import at_birthday_screaming_photo from '../../assets/images/photos/at_birthday_screaming.webp';

import './presskit.css';
import { shuffleArray } from '../../utils';

const galleryContext = require.context('../../assets/images/photos/gallery', false, /\.webp$/);
const galleryImages = shuffleArray(galleryContext.keys().map(galleryContext));

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
                                src={at_birthday_screaming_photo}
                            ></Figure.Image>
                            <Figure.Caption>
                                {this.props.t('presskit.at_birthday_screaming_caption')}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col className="presskit_text">
                        {this.props.t('presskit.text1')}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={4}>
                        <Figure>
                            <Figure.Image
                                fluid
                                src={rafa_photo}
                            ></Figure.Image>
                            <Figure.Caption>
                                {this.props.t('presskit.rafa_caption')}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <Figure>
                            <Figure.Image
                                fluid
                                src={martin_photo}
                            ></Figure.Image>
                            <Figure.Caption>
                                {this.props.t('presskit.martin_caption')}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <Figure>
                            <Figure.Image
                                fluid
                                src={santiago_photo}
                            ></Figure.Image>
                            <Figure.Caption>
                                {this.props.t('presskit.santiago_caption')}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col className="presskit_text">
                        {this.props.t('presskit.text2')}
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
                {
                    galleryImages.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []).map((row, index) => (
                        <Row key={index}>
                            {
                                row.map((image, index) => (
                                    <Col key={index} xs={12} sm={4}>
                                        <Figure>
                                            <Figure.Image
                                                src={image}
                                            ></Figure.Image>
                                        </Figure>
                                    </Col>
                                ))
                            }
                        </Row>
                    ))
                }
                <Row className="presskit_credits_text">
                    <Col>
                        {this.props.t('presskit.credits')}
                        <ul>
                            <li>
                                Jhonatan Zapata (<a className="presskit_links" href="https://www.instagram.com/jack_zeat/" target="_blank" rel="noreferrer noopener">@jack_zeat</a>)
                            </li>
                            <li>
                                Charli Zapata (<a className="presskit_links" href="https://www.instagram.com/cafecito_fugazzz/" target="_blank" rel="noreferrer noopener">@cafecito_fugazzz</a>)
                            </li>
                            <li>
                                Karl Zelada Reynoso (<a className="presskit_links" href="https://www.instagram.com/bedthofukmaxi/" target="_blank" rel="noreferrer noopener">@bedthofukmaxi</a>)
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withTranslation()(Presskit);
