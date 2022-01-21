import React, { useState, useContext } from "react";
import ContentDetail from "../components/Content_details";
import { AppContext } from "../context/NewContext";

const Details = (props) => {
  const { state } = useContext(AppContext);
  const [details, setDetails ] = useState({})
  const findByTitle = () => {
    const data = state?.find(
      (found) => found?.title === props?.match?.params?.title
    );
    setDetails(data)
  };
 
  React.useEffect(() => {
    findByTitle();
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container">
        <ContentDetail  details={details}  />
      </div>
    </div>
  );
};
export default Details;
