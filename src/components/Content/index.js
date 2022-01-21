import React from "react";
import moment from "moment";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const fromNow = (value) => {
  if (!value) return "";
  return moment(value).fromNow();
};
const Content = ({ news }) => {
  return (
    <div className="card-body text-left">
      {news?.map((articl, i) => {
        return (
          <div key={i} className="row">
            <div className="col-sm-4 grid-margin">
              <div className="position-relative">
                <div>
                  <img
                    src={
                      articl?.urlToImage || "https://via.placeholder.com/150"
                    }
                    alt="thumb"
                    className={styles.news_image}
                  />
                </div>
                <div className="badge-positioned">
                  <span className="badge badge-danger font-weight-bold">
                    {articl?.source.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-8  grid-margin">
              <Link
                to={{
                  pathname: `/details/${articl?.title}`,
                  query: {
                    title: articl?.title,
                    content: articl?.content,
                  },
                }}
              >
                <h2 className="mb-2 font-weight-600">{articl?.title}</h2>
              </Link>

              <div className="fs-13 mb-2">{fromNow(articl?.publishedAt)}</div>
              <p className="mb-0">{articl?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
