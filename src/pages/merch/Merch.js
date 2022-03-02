import React from "react";
import { withTranslation } from "react-i18next";
import "./merch.css";

class Merch extends React.Component {
  state = {};

  render() {
    return this.props.t("coming_soon");
  }
}

export default withTranslation()(Merch);
