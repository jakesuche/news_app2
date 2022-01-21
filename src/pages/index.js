import { useState, useEffect, useContext } from "react";

import "../assets/css/boostrap.css";
import { applyFilters } from "../utils/helper";

import moment from "moment";
import axios from "axios";

import Content from "../components/Content";
import Category from "../components/Category";
import Placeholder from "../components/Placeholder";
import Pagination from "../components/Pagination";
import { AppContext } from '../context/NewContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [news, setNews] = useState([]);
  const [filters, setFilters] = useState({
    country: "ng",
    category: "politics",
   // apiKey:'d1a500167c624d5d8a8b0381d3c979af',
    apiKey: "de02f70a9e814ad493b024e4761f91ad",
    sortBy: "publishedAt",
    pageSize: 10,
    page: 1,
  });
  const {state, setState} = useContext(AppContext)
  
  const [total, setTotal] = useState(null)

  const [loading, setLoading] = useState(true);
  const getNewHeadlines = () => {
    setLoading(true);
    const link = "https://newsapi.org/v2/top-headlines";
    const url = applyFilters(link, filters);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        if (res.data.status === "ok") {
          setNews(res.data.articles);
          setState(res.data.articles)
          setTotal(res?.data?.totalResults)
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  };

  useEffect(() => {
    getNewHeadlines();
  }, [filters?.category,filters?.page]);
  return (
  
 
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <Category filters={filters} setFilters={setFilters} />
            <div className="col-lg-9 stretch-card grid-margin">
              <div className="card">
                <div className="card-body text-left">
                  {!loading ? <Content news={news} /> : <Placeholder />}
                </div>
                <Pagination setFilters={setFilters} total={total}  currentPage={filters.page} pageSize={filters.pageSize} />
              </div>
            </div>
          </div>
        </div>
      </div>
 
   
  );
}

export default App;
