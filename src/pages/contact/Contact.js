import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import { withTranslation } from 'react-i18next';
import { getImageURL } from '../../utils';
import './contact.css';

class Contact extends React.Component {
  getContactCategories() {
    let contactCategories = '';
    let categories = ['press', 'booking', 'colaboration', 'other'];
    for (let category of categories) {
      contactCategories +=
        this.props.t('contact.email.category.' + category) + ', ';
    }
    return contactCategories.slice(0, -2);
  }

  render() {
    return (
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              fluid
              src={getImageURL('/images/photos/DSC01111.webp')}
            ></Figure.Image>
          </Figure>
        </Col>
        <Col>
          <div>
            <div className="contact_text">
              {this.props.t('contact.email.info1')}
              <div>
                <i>[{this.getContactCategories()}]</i>
              </div>
            </div>
            <div className="contact_text">
              <b>{this.props.t('contact.email')}:</b>{' '}
              <a
                className="contact_links"
                href="mailto:elmejorveranodemivida@tutanota.com"
              >
                elmejorveranodemivida@tutanota.com
              </a>
            </div>
            <div className="contact_text">
              {this.props.t('contact.email.info2')}
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default withTranslation()(Contact);
