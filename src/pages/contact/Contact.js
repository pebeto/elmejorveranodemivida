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
          <Form
            action="https://send.pageclip.co/DC6zvjqGA84zn3uLzjnMgD1ohL7Qjy9e"
            className="pageclip-form"
            method="post"
          >
            <Form.Group>
              <Form.Label>{this.props.t('contact.form.youremail')}</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder={this.props.t('contact.form.youremail.required')}
                required
              />
              <Form.Control.Feedback type="invalid">
                {this.props.t('contact.form.youremail.invalid')}
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                {this.props.t('contact.form.youremail.extra')}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>{this.props.t('contact.form.name')}</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder={this.props.t('contact.form.name.empty')}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{this.props.t('contact.form.subject')}</Form.Label>
              <Form.Select name="subject" defaultValue={this.props.t('contact.form.subject.other')}>
                <option>{this.props.t('contact.form.subject.press')}</option>
                <option>{this.props.t('contact.form.subject.booking')}</option>
                <option>{this.props.t('contact.form.subject.colaboration')}</option>
                <option>{this.props.t('contact.form.subject.other')}</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>{this.props.t('contact.form.message')}</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder={this.props.t('contact.form.message.placeholder')}
                required
              />
            </Form.Group>
            <Button
              variant="link"
              type="submit"
              className="pageclip-form__submit"
            >
              {this.props.t('contact.form.send')}
            </Button>
          </Form>
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
