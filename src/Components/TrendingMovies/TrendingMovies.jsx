import React, { useEffect, useRef } from "react";
import "./TrendingMovies.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useSelector } from "react-redux";
import { selectTredingMoviesData } from "../../Store/Slices/TrendingMoviesData/TrendingMoviesData";
import { NavLink, useNavigate } from "react-router-dom";

const TrendingMovies = () => {
  const TrendingMoviesArray = useSelector(selectTredingMoviesData);
  const TrendingMoviesArrayData = TrendingMoviesArray.data || [];
  const splideRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (splideRef.current && TrendingMoviesArrayData.length > 0) {
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
  }, [TrendingMoviesArrayData]);

  return (
    <div className="TrendingMovies">
      <div className="TrendingMovies-top">
        <h1>Trending Movies</h1>
      </div>
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {TrendingMoviesArrayData.map((movie, index) => (
              <li className="splide__slide" key={movie.id}>
                <div className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movieCardOverlay">
                    <div className="moveiCardOverlay-info">
                      <h2>{movie.original_title}</h2>
                      <p>{movie.overview}</p>
                      <NavLink
                        to={`/movies/${movie.id}`}
                        className="ShowMore-btn"
                      >
                        Show More
                      </NavLink>
                    </div>
                    <div className="movieCardOverlay-details">
                      <span>
                        <i class="fa-solid fa-language"></i>
                        {movie.original_language}
                      </span>
                      <span>
                        <i class="fa-regular fa-star"></i>
                        {movie.popularity}
                      </span>
                      <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        {movie.release_date}
                      </span>
                    </div>
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

export default TrendingMovies;
