import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div>
      <Skeleton height={50} />

      {/* Trending Products */}
      <section id="b-trending">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>
                <Skeleton count={2} />
              </h1>
            </div>
          </div>
          <div className="row main-container">
            <div className="p-container">
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Advert Space */}
      <section id="ad-space">
        <div className="container">
          <Skeleton height={200} />
        </div>
      </section>

      {/* Trending Products */}
      <section id="b-trending">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>
                <Skeleton />
              </h1>
            </div>
          </div>
          <div className="row main-container">
            <div className="p-container">
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
              <div className="product-card">
                <div className="product-card-img">
                  <Skeleton height={200} />
                </div>
                <div className="product-card-info">
                  <h2 className="product-name">
                    <Skeleton count={5} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skeleton height={100} />
    </div>
  );
};

export default CardSkeleton;
