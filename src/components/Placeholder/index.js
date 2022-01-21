import React from "react";
import styles from "./styles.module.css";
const Loader = () => {
  const news = [...Array(10).keys()];
  return (
    <div className="card-body text-left">
      {news?.map((articl, i) => {
        return (
          <div key={i} className="row">
            <div className="col-sm-4 grid-margin">
              <div className="position-relative">
                <div
                  className={`${styles.animated_background} ${styles.placeholder_image} `}
                ></div>
              </div>
            </div>
            <div className="col-sm-8  grid-margin">
              <h2
                className={`mb-2 font-weight-600 ${styles.animated_background} ${styles.h2}`}
              ></h2>
              <div
                className={`$fs-13 mb-2 ${styles.animated_background} ${styles.description} `}
              ></div>
              <p
                className={`${styles.animated_background} ${styles.description} mb-0`}
              ></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
