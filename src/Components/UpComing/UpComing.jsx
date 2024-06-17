import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./UpComing.css";
import { useSelector } from "react-redux";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { SelectUpComing } from "../../Store/Slices/UpComingData/UpComingData";
import { NavLink, useNavigate } from "react-router-dom";

const UpComing = () => {
  const { data } = useSelector(SelectUpComing);
  const splideRef = useRef(null);
  const navigate = useNavigate()

  const NavigateMovieDetails = (id) => {
    navigate(`/movies/${id}`)
  }

  useEffect(() => {
    if (splideRef.current && data.length > 0) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        autoScroll: {
          speed: 2,
        },
        extensions: { AutoScroll },
      });

      splide.mount();
    }
  }, [data]);
  return (
    <div className="UpComing">
      <div className="UpComing-top">
        <h1>Up Coming Movies</h1>
      </div>
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {data.length > 0 &&
              data.map((el, idx) => (
                <li className="splide__slide" key={el.id}>
                  <div className="TopSection-items">
                    <div className="TopSection-itemsIMG">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                        alt={el.original_title}
                      />
                    </div>
                    <div className="TopSection-itemsInfo">
                      <h2>{el.original_title}</h2>
                      <span>{el.popularity}</span>
                      <br />
                      <span>{el.release_date}</span>
                      <NavLink to={`/movies/${el.id}`} className="ShowMore-btn">
                        Show More
                      </NavLink>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
