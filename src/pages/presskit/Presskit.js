import {
    Col,
    Row,
    Card,
    Figure,
} from 'react-bootstrap';
import React from 'react';
import { withTranslation } from 'react-i18next';

import st_photo from '../../assets/images/photos/st.webp';
import martin_photo from '../../assets/images/photos/martin.webp'
import esparza_photo from '../../assets/images/photos/esparza.webp'
import rafa_santiago_photo from '../../assets/images/photos/rafa_santiago.webp'
import first_presentation_photo from '../../assets/images/photos/first_presentation.webp';
import computer_science_photo from '../../assets/images/photos/ciencias_de_la_computacion.webp';

import './presskit.css';

class Presskit extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <Figure>
                            <Figure.Image
                                fluid
                                src={first_presentation_photo}
                            ></Figure.Image>
                            <Figure.Caption>
                                {this.props.t('presskit.first_presentation_caption')}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <div className="presskit_text">
                            {this.props.t('presskit.text1')}
                        </div>
                    </Col>
                </Row>
                <Row fluid>
                    <Col xs={12} sm={12} md={4}>
                        <Figure>
                            <Figure.Image
                                fluid
                                src={rafa_santiago_photo}
                            ></Figure.Image>
                            <Figure.Caption>
                                {this.props.t('presskit.rafa_santiago_caption')}
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
                                src={esparza_photo}
                            ></Figure.Image>
                            <Figure.Caption>
                                {this.props.t('presskit.esparza_caption')}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="releases_title">
                            <h2>{this.props.t('presskit.releases')}</h2>
                        </div>
                    </Col>
                </Row>
                <Row xs={2}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={st_photo} />
                            <Card.Title>{this.props.t('presskit.st_title')}</Card.Title>
                            <Card.Text>{this.props.t('presskit.st_text')}</Card.Text>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={computer_science_photo} />
                            <Card.Title>{this.props.t('presskit.computer_science_title')}</Card.Title>
                            <Card.Text>{this.props.t('presskit.computer_science_text')}</Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="releases_title">
                            <h2>{this.props.t('presskit.gallery_title')}</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withTranslation()(Presskit);
