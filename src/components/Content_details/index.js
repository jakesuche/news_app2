import React from "react";
import styles from "./styles.module.css";
import { withRouter } from 'react-router-dom'
import moment from 'moment'
const src =
  "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80";

const Content = ({details}) => { 
    const fromNow = (value) => {
        if (!value) return "";
        return moment(value).fromNow();
      };
  return (
    <div className={`${styles.wrapper}`}>
      <div className="d-flex justify-content-center">
        <div className="position-relative">
          <img className={styles.image} src={details?.urlToImage || src} />
          <div className={`position-absolute ${styles.overlay}`}></div>
          <h4 className={`position-absolute  ${styles.h2}`}>{details?.title}</h4>
          <h5 className={`position-absolute  ${styles.h5}`}>{fromNow(details?.publishedAt )}</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
       {details?.content}
      </div>
    </div>
  );
};

export default withRouter(Content)
