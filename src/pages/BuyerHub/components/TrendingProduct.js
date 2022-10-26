import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../../assets/styles/global.css";
import "../pages/Details/Details.css";

const TrendingProduct = ({ sectionTitle }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      axios.get("/product").then((response) => {
        setProduct(response.data.data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log("error loading products", error.response.data.erros);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // if (loading) {
  //   return <div className="loader mx-auto" align="center" id="loader"></div>;
  // }

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
          {!loading ? (
            <div className="p-container">
              {product &&
                product
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
                              style={{
                                width: "100%",

                                objectFit: "cover",
                              }}
                            />
                            <span className="badge bg-success">Updated</span>
                          </div>
                          <div className="product-card-info">
                            <h2 className="product-name">
                              {item && Capitalize(item.productName)}
                            </h2>
                            <h3 className="product-price">
                              <span className="p-currency">
                                {item.currency}
                              </span>{" "}
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
          ) : (
            <div class="gooey">
              <span class="dot"></span>
              <div class="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
