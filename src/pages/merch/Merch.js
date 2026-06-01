import React from "react";
import { withTranslation } from "react-i18next";

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

        <div className="flex flex-wrap -mx-2">
          {products.map((product) => {
            const currentLanguage = this.props.i18n.language || "en";

            return (
              <div key={product.id} className="px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                <div className="bg-white rounded-[15px] overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                  <div className="merch-image-placeholder overflow-hidden">
                    <div className="image-text">Image</div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-xl font-medium mb-2">{product.name[currentLanguage]}</h3>
                    <p className="mb-2">{product.summary[currentLanguage]}</p>
                    <p className="price font-bold text-black text-lg">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withTranslation()(Merch);
