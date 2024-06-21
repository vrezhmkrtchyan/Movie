import React, { useEffect, useRef } from "react";
import "./NowPlayingMovies.css";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { selectTredingMoviesData } from "../../Store/Slices/TrendingMoviesData/TrendingMoviesData";

const NowPlayingMovies = () => {
  const { dataN, isLoading } = useSelector(selectTredingMoviesData);

  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current && dataN.length > 0) {
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
  }, [dataN]);

  return (
    <div className="TrendingMovies">
      <div className="TrendingMovies-top">
        <h1>Now Playing Movies</h1>
      </div>
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {isLoading ? (
              dataN.map((movie, index) => (
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

export default NowPlayingMovies;
