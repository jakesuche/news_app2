import { useState, useEffect } from "react";

import "./App.css";
import "./assets/css/styles.css";
// import Header from '../src/components/Header/index'
import Header from "./components/Header/index.jsx";
import SubHeader from "./components/subHeader";
import moment from "moment";
import axios from "axios";
const fromNow = (value) => {
  if (!value) return "";
  return moment(value).fromNow();
};
function App() {
  const [news, setNews] = useState([]);
  const getNewHeadlines2 = () => {
    axios
      .get(
        "http://api.mediastack.com/v1/news?access_key=ce9626b23d615e59aa2fd9fcac3cd220&limit=100&offset=0&sort=published_desc&country=ni&categories=wars&sources=cnn,bbc"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getNewHeadlines = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=de02f70a9e814ad493b024e4761f91ad"
      )
      .then((res) => {
        
        if (res.data.status === "ok") {
          setNews(res.data.articles);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNewHeadlines();
    getNewHeadlines2()
  }, []);
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <div className="content-wrapper">
        <div className="container">
          <div className="row aos-init aos-animate" data-aos="fade-up">
            <div className="col-lg-3 stretch-card grid-margin">
              <div className="card">
                <div className="card-body text-left">
                  <h2>Category</h2>
                  <ul className="vertical-menu ">
                    <li>
                      <a >Politics</a>
                    </li>
                    <li>
                      <a >International</a>
                    </li>
                    <li>
                      <a >Finance</a>
                    </li>
                    <li>
                      <a >Health care</a>
                    </li>
                    <li>
                      <a >Technology</a>
                    </li>
                    <li>
                      <a >Jobs</a>
                    </li>
                    <li>
                      <a >Media</a>
                    </li>
                    <li>
                      <a >Administration</a>
                    </li>
                    <li>
                      <a >Sports</a>
                    </li>
                    <li>
                      <a >Game</a>
                    </li>
                    <li>
                      <a >Art</a>
                    </li>
                    <li>
                      <a >Kids</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 stretch-card grid-margin">
              <div className="card">
                <div className="card-body text-left">
                  {news?.map((articl, i) => {
                    return (
                      <div key={i} className="row">
                        <div className="col-sm-4 grid-margin">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <img
                                src={articl?.urlToImage}
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                            <div className="badge-positioned">
                              <span className="badge badge-danger font-weight-bold">
                                Flash news
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8  grid-margin">
                          <h2 className="mb-2 font-weight-600">
                            {articl?.title}
                          </h2>
                          <div className="fs-13 mb-2">
                            <span className="mr-2">Photo </span>
                            {fromNow(articl?.publishedAt)}
                          </div>
                          <p className="mb-0">{articl?.description}</p>
                        </div>
                      </div>
                    );
                  })}

                  <div className="row">
                    <div className="col-sm-4 grid-margin">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="assets/images/dashboard/home_5.jpg"
                            alt="thumb"
                            className="img-fluid"
                          />
                        </div>
                        <div className="badge-positioned">
                          <span className="badge badge-danger font-weight-bold">
                            Flash news
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8  grid-margin">
                      <h2 className="mb-2 font-weight-600">
                        No charges over 2017 Conservative battle bus cases
                      </h2>
                      <div className="fs-13 mb-2">
                        <span className="mr-2">Photo </span>10 Minutes ago
                      </div>
                      <p className="mb-0">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-4">
                      <div className="position-relative">
                        <div className="rotate-img">
                          <img
                            src="assets/images/dashboard/home_6.jpg"
                            alt="thumb"
                            className="img-fluid"
                          />
                        </div>
                        <div className="badge-positioned">
                          <span className="badge badge-danger font-weight-bold">
                            Flash news
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <h2 className="mb-2 font-weight-600">
                        Kaine: Trump Jr. may have committed treason
                      </h2>
                      <div className="fs-13 mb-2">
                        <span className="mr-2">Photo </span>10 Minutes ago
                      </div>
                      <p className="mb-0">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

