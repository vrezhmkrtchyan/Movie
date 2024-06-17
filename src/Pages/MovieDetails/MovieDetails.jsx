import React, { useEffect, useState, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import pop from "./MovieDetailIMG/popcorn-box.png";
import web from "./MovieDetailIMG/website.png";
import play from "./MovieDetailIMG/play-button-arrowhead.png";
import close from "../../Components/LoginSideBar/close.png";
import "./MovieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, fetchMovieDetailsVideo } from "../../Store/Slices/MovieDetails/API";
import { selectMoveDetails } from "../../Store/Slices/MovieDetails/MovieDetails";
import { selectSemilarMovies } from "../../Store/Slices/SemilarMoviesData/SemilarMoviesData";
import { fetchSemilarMovies } from "../../Store/Slices/SemilarMoviesData/API";

const MovieDetails = () => {
  const [isView, setIsView] = useState(false);
  const { id } = useParams();
  const { data, videoData } = useSelector(selectMoveDetails);
  const { dataS } = useSelector(selectSemilarMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchSemilarMovies(id));
    dispatch(fetchMovieDetailsVideo(id));
  }, [id, dispatch]);

  const trailer = videoData.find((video) => video.type === "Trailer");


  return (
    <div className="MovieDetails">
      <div className={`MovieDetails-bg ${isView ? "active" : ""}`}></div>
      <div className={`MovieDatailsTrailer ${isView ? "active" : ""}`}>
        <div className="MovieDatailsTrailer-close" onClick={() => setIsView(false)}>
          <img src={close} width={28} alt="Close" />
        </div>
        {trailer && <iframe src={`https://youtube.com/embed/${trailer.key}`} frameBorder="0" title="Trailer" allowFullScreen></iframe>}
      </div>
      <div className="MoviesDetails-containerFluid">
        <div
          className="MoviesDetails-row"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
          }}
        >
          <div className="MoviesDetails-inner">
            <div className="MoviesDetails-innerImg">
              <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} alt={data?.title} />
              <div className="MoviesDetails-innerImg-info">
                <h2>{data?.title}</h2>
                <p>{data?.tagline}</p>
                <div className="MoviesDetails-innerImg-infoWatch">
                  <button onClick={() => setIsView(true)}>
                    <img src={play} alt="Play" />
                    Watch Trailer
                  </button>
                </div>
              </div>
              <div className="MoviesDetails-innerImg-status">
                <h2>Status: {data?.status}</h2>
              </div>
              <div className="MoviesDetails-innerImg-vote">
                <span>Vote Average Rating: {data?.vote_average}</span>
                <span>Vote Rating Count: {data?.vote_count}</span>
              </div>
            </div>
            <div className="MoviesDetails-DetailsInfo">
              <h1>{data?.original_title}</h1>
              <p>{data?.overview}</p>
              <p>
                <img src={pop} alt="Popularity" />
                <span>{data?.popularity}</span>
              </p>
              <p>
                <img src={web} alt="Release Date" />
                <span>{data?.release_date}</span>
              </p>
              <p>
                <span>Category: {data?.genres?.map((genre) => genre.name).join(" / ")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="MoviesDetailsSemilar">
        <div className="MoviesDetailsSemilar-top">
          <h1>Semilar Movie</h1>
        </div>
        <div className="MoviesDetailsSemilar-bottom">
          {dataS.length > 0 &&
            dataS.map((el, idx) => {
              return (
                <div className="MoviesDetailsSemilar-items">
                  <div className="MoviesDetailsSemilar-img">
                    <img src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`} alt={data?.title} />
                    <div className="MoviesDetailsSemilar-squaresRows">
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                    </div>
                    <div className="MoviesDetailsSemilar-squaresRows">
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                    </div>
                    <div className="MoviesDetailsSemilar-squaresRows">
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                      <div className="MoviesDetailsSemilar-squares"></div>
                    </div>
                    <div className="MoviesDetailsSemilar-items-overlay">
                      <h3>{el.title}</h3>
                      <p>{el.popularity}</p>
                      <NavLink className="ShowMore-btn" to={`/movies/${el.id}`}>
                        Show More
                      </NavLink>
                    </div>
                  </div>
                  <div className="MoviesDetailsSemilar-info">
                    <h2>{el?.original_title}</h2>
                    <p>{el?.overview}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
