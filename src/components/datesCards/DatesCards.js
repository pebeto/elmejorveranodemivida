import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import {
  getAllDates,
  getPastDates,
  getUpcomingDates,
} from '../../services/datesService';
import { getImageURL, getUniqueId } from '../../utils';
import './dates_cards.css';

class DatesCards extends React.Component {
  constructor(props) {
    super(props);
    switch (props.time) {
      case 'upcoming':
        this.state = { dates: getUpcomingDates() };
        break;
      case 'past':
        this.state = { dates: getPastDates() };
        break;
      case 'all':
        this.state = { dates: getAllDates() };
        break;
      default:
        this.state = { dates: getUpcomingDates() };
        break;
    }
  }

  render() {
    let cards = [];
    let dates = this.props.slice
      ? this.state.dates.slice(0, this.props.slice)
      : this.state.dates;

    for (let d of dates) {
      cards.push(
        <Col key={getUniqueId('card')}>
          <Card className="dates_card">
            <Card.Img
              className="dates_image"
              variant="top"
              src={getImageURL(d.source)}
            />
            <Card.Body>
              <Card.Title>{d.name}</Card.Title>
              <Card.Text>
                {d.location} - {d.date}
              </Card.Text>
              <Card.Link
                className="dates_link"
                href={d.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {this.props.t('dates.more_info')}
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    if (this.props.time === 'upcoming' && cards.length === 0)
      return this.props.t('dates.no_upcoming_dates');
    return <Row>{cards}</Row>;
  }
}

export default withTranslation()(DatesCards);
