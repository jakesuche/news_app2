import React from 'react';
import moment from 'moment';

const SubHeader = () => {
    const formatDate = (value,  formatType = "LL") =>{
        if(!value)return ""
        return moment(value).format(formatType ="LL")
      }
      
    return (
        <div className="flash-news-banner">
        <div className="container">
          <div className="d-lg-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="badge badge-dark mr-3">Flash news</span>
              <p className="mb-0">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
            <div className="d-flex">
              <span className="mr-3 text-danger">{formatDate(new Date) }</span>
              <span className="text-danger">30°C, <span className="iconify" data-icon="emojione-v1:flag-for-nigeria"></span> Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SubHeader

