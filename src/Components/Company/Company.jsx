import React from "react";
import Marquee from "react-fast-marquee";
import "./Company.css";
import { useSelector } from "react-redux";
import { selectCompanyData } from "../../Store/Slices/CompanyData/CompanyData";

const Company = () => {
  const { data } = useSelector(selectCompanyData);

  return (
    <div className="Company">
      <div className="Company-top">
        <h1>Most Popular Studios</h1>
      </div>
      <Marquee className="marquee">
        {data.length > 0 &&
          data.map((el, idx) => (
            <div key={idx} className="child">
              <div className="gradient">
                <img src={el.image} alt="" />
              </div>
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default Company;
