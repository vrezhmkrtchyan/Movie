import React, { useEffect, useRef } from "react";
import "./PopularMovies.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { selectTredingMoviesData } from "../../Store/Slices/TrendingMoviesData/TrendingMoviesData";

const PopularMovies = () => {
  const { dataP, isLoading } = useSelector(selectTredingMoviesData);

  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current && dataP.length > 0) {
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
  }, [dataP]);

  return (
    <div className="TrendingMovies">
      <div className="TrendingMovies-top">
        <h1>Popular Movies</h1>
      </div>
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {isLoading ? (
              dataP.map((movie, index) => (
                <li className="splide__slide" key={movie.id}>
                  <div className="movie-card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
                      }}
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

export default PopularMovies;

