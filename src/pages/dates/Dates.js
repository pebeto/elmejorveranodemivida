import React from "react";
import Figure from "react-bootstrap/Figure";
import { withTranslation } from "react-i18next";
import { getImageURL } from "../../utils";
import "./dates.css";
import DatesCards from "../../components/datesCards/DatesCards";

class Dates extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Figure>
          <Figure.Image
            fluid
            src={getImageURL("/images/photos/DSC03737.JPG")}
          ></Figure.Image>
        </Figure>
        <h1 className="dates_title">{this.props.t("dates.upcoming_dates")}</h1>
        <DatesCards time="upcoming" />
      </div>
    );
  }
}

export default withTranslation()(Dates);
