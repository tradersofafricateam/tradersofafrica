import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../components/utils/GlobalState";

import "../../../assets/styles/global.css";
import "../pages/Details/Details.css";

const TrendingProduct = ({ sectionTitle }) => {
  const { product, userLoading } = useContext(GlobalContext);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (userLoading) {
    return (
      <div
        className="loader mx-auto"
        align="center"
        id="loader"
        style={{
          position: "absolute",
          top: "calc(50% - 60px)",
          left: "calc(50% - 60px)",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      ></div>
    );
  }

  return (
    <section id="b-trending">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>{sectionTitle}</h1>
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
