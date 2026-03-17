import React from "react";
import { withTranslation } from "react-i18next";
import { Row, Col, Card } from "react-bootstrap";

import "./merch.css";
import products from "../../data/products.json";

class Merch extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <div className="merch-container">
        <h1>{t("merch_title")}</h1>

        <div className="shipping-note">
          <p>{t("merch_shipping_note")}</p>
        </div>

        <Row>
          {products.map((product) => {
            // Get current language from i18n context
            const currentLanguage = this.props.i18n.language || "en";

            return (
              <Col key={product.id} xs={12} sm={6} md={3} className="mb-4">
                <Card className="rounded">
                  <div className="merch-image-placeholder">
                    <div className="image-text">Image</div>
                  </div>
                  <Card.Body>
                    <Card.Title>{product.name[currentLanguage]}</Card.Title>
                    <Card.Text>{product.summary[currentLanguage]}</Card.Text>
                    <Card.Text className="price">
                      ${product.price.toFixed(2)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default withTranslation()(Merch);
