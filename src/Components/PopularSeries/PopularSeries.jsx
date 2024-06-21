import React, { useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "./PopularSeries.css";
import Loading from "../Loading/Loading";
import { selectSeriesMainData } from "../../Store/Slices/SeriesMainData/SeriesMainData";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const PopularSeries = () => {
  const splideRef = useRef(null);
  const { dataPopular, isLoading } = useSelector(selectSeriesMainData);

  useEffect(() => {
    if (splideRef.current && dataPopular.length > 0) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        autoScroll: {
          speed: 1,
        },
        extensions: { AutoScroll },
      });

      splide.mount();
    }
  }, [dataPopular]);

  return (
    <div className="OnTheAir">
      <div className="OnTheAir-top">
        <h1>Popular Serials</h1>
      </div>
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {isLoading ? (
              dataPopular.map((serial, index) => (
                <li className="splide__slide" key={serial.id}>
                  <div className="movie-card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
                      alt={serial.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
                      }}
                    />
                    <div className="movieCardOverlay">
                      <div className="moveiCardOverlay-info">
                        <h2>{serial.name}</h2>
                        <p>{serial.overview}</p>
                        <NavLink
                          to={`/tv-serials/${serial.id}`}
                          className="ShowMore-btn"
                        >
                          Show More
                        </NavLink>
                      </div>
                      <div className="movieCardOverlay-details">
                        <span>
                          <i class="fa-solid fa-language"></i>
                          {serial.original_language}
                        </span>
                        <span>
                          <i class="fa-regular fa-star"></i>
                          {serial.popularity}
                        </span>
                        <span>
                          <i class="fa-solid fa-calendar-days"></i>
                          {serial.first_air_date}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <Loading />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularSeries;
