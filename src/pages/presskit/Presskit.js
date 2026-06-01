import React from "react";
import { withTranslation } from "react-i18next";

import martin_photo from "../../assets/images/photos/martin.webp";
import rafa_photo from "../../assets/images/photos/rafa.webp";
import santiago_photo from "../../assets/images/photos/santiago.webp";
import at_birthday_screaming_photo from "../../assets/images/photos/at_birthday_screaming.webp";

import "./presskit.css";
import { shuffleArray } from "../../utils";

const galleryContext = require.context(
  "../../assets/images/photos/gallery",
  false,
  /\.webp$/
);
const galleryImages = shuffleArray(galleryContext.keys().map(galleryContext));

class Presskit extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-full">
            <figure>
              <img
                className="w-full"
                src={at_birthday_screaming_photo}
                alt="at birthday screaming"
              />
              <figcaption>
                {this.props.t("presskit.at_birthday_screaming_caption")}
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-full">
            <div className="presskit_text">{this.props.t("presskit.text1")}</div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-full sm:w-1/2 md:w-1/3">
            <figure>
              <img className="w-full" src={rafa_photo} alt="Rafa" />
              <figcaption>
                {this.props.t("presskit.rafa_caption")}
              </figcaption>
            </figure>
          </div>
          <div className="px-2 w-full sm:w-1/2 md:w-1/3">
            <figure>
              <img className="w-full" src={martin_photo} alt="Martin" />
              <figcaption>
                {this.props.t("presskit.martin_caption")}
              </figcaption>
            </figure>
          </div>
          <div className="px-2 w-full sm:w-1/2 md:w-1/3">
            <figure>
              <img className="w-full" src={santiago_photo} alt="Santiago" />
              <figcaption>
                {this.props.t("presskit.santiago_caption")}
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-full">
            <div className="presskit_text">{this.props.t("presskit.text2")}</div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-full md:w-1/2">
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
          </div>
          <div className="px-2 w-full md:w-1/2">
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
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 w-full md:w-1/2">
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
          </div>
          <div className="px-2 w-full md:w-1/2">
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
          </div>
        </div>
        {galleryImages
          .reduce(
            (rows, key, index) =>
              (index % 3 === 0
                ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows,
            []
          )
          .map((row, index) => (
            <div key={index} className="flex flex-wrap -mx-2">
              {row.map((image, index) => (
                <div key={index} className="px-2 w-full sm:w-1/2 md:w-1/3">
                  <figure>
                    <img className="w-full" src={image} alt="" />
                  </figure>
                </div>
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default withTranslation()(Presskit);
