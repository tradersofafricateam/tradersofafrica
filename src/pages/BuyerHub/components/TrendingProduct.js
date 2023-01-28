import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../../assets/styles/global.css";
import "../pages/Details/Details.css";
import { Iconly } from "react-iconly";

const TrendingProduct = ({ sectionTitle }) => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    try {
      axios.get("/product").then((response) => {
        setProduct(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const ref = React.useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <section id="b-trending">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>{sectionTitle}</h1>
          </div>
          <div className="col-lg-6" align="right">
            <Iconly
              onClick={() => scroll(-1070)}
              className="scroll-icon me-4"
              name="ChevronLeftCircle"
              set="two-tone"
              size="large"
              color="#282828"
            />
            <Iconly
              onClick={() => scroll(1070)}
              className="scroll-icon"
              name="ChevronRightCircle"
              set="two-tone"
              size="large"
              color="#282828"
            />
          </div>
        </div>
        <div className="row main-container">
          <div className="p-container" ref={ref}>
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
                            <span className="p-currency">{item.currency}</span>{" "}
                            {item.minPricePerUnit} - {item.maxPricePerUnit}{" "}
                            <span className="p-unit">/ MT</span>
                          </h3>
                          <p className="product-spec-sum">
                            <span>Available Specs:</span>
                            <br />
                            {Capitalize(
                              Object.entries(item.productSpecification)[0][1]
                            )}
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
