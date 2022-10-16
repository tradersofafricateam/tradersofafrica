import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../components/utils/GlobalState";

import "../../../assets/styles/global.css";
import "../pages/Details/Details.css";

const TrendingProduct = () => {
  const { product } = useContext(GlobalContext);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section id="b-trending">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>You might be interested in</h1>
          </div>
          <div className="col-lg-6" align="right">
            <Link className="subtitle" to="/">
              View more
            </Link>
          </div>
        </div>
        <div className="row main-container">
          <div className="p-container">
            {product
              .map((item) => ({ item, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ item }) => {
                return (
                  <Link
                    className="link"
                    to={`/details/${item.id}`}
                    key={item.id}
                  >
                    <div className="product-card">
                      <div className="product-card-img">
                        <img
                          src={
                            item.productImages &&
                            item.productImages.filter(
                              (image) => image.isMain === true
                            )[0].image
                          }
                          className="img-fluid product-img"
                          alt="..."
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                        <span className="badge bg-success">Updated</span>
                      </div>
                      <div className="product-card-info">
                        <h2 className="product-name">
                          {item && Capitalize(item.productName)}
                        </h2>
                        <h3 className="product-price">
                          <span className="p-currency">{item.currency}</span>{" "}
                          {item.minPricePerUnit} - {item.maxPricePerUnit}{" "}
                          <span className="p-unit">/ MT</span>
                        </h3>
                        <p className="product-spec-sum">
                          <span>Available Specs:</span>
                          <br />
                          Dried, Moisture 8%, Dark Red colour
                        </p>
                        <p className="product-link">View Product</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
