import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
import Loading from '../../Components/Loading/Loading'
import { selectActorsData } from "../../Store/Slices/ActorsData/ActorsData";
import { fetchActorsData, fetchProducersData } from "../../Store/Slices/ActorsData/API";

const MovieDetails = () => {
  const [isView, setIsView] = useState(false);
  const { id } = useParams();
  const { data, videoData } = useSelector(selectMoveDetails);
  const { dataS, isLoading } = useSelector(selectSemilarMovies);
  const { dataA, dataR } = useSelector(selectActorsData); 
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchSemilarMovies(id));
    dispatch(fetchMovieDetailsVideo(id));
    dispatch(fetchActorsData(id));
    dispatch(fetchProducersData(id));
  }, [id, dispatch]);

  const trailer = videoData.find((video) => video.type === "Trailer");

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className="MovieDetails">
      <div className={`MovieDetails-bg ${isView ? "active" : ""}`}></div>
      <div className={`MovieDatailsTrailer ${isView ? "active" : ""}`}>
        <div
          className="MovieDatailsTrailer-close"
          onClick={() => setIsView(false)}
        >
          <img src={close} width={28} alt="Close" />
        </div>
        {trailer && (
          <iframe
            src={`https://youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            title="Trailer"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="MoviesDetails-containerFluid">
        {isLoading ? (
          <div
            className="MoviesDetails-row"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
            }}
          >
            <div className="MoviesDetails-inner">
              <div className="MoviesDetails-innerImg">
                <img
                  src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                  alt="Actor"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://static.displate.com/460x640/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.avif";
                  }}
                />
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
                  <span>
                    Category:{" "}
                    {data?.genres?.map((genre) => genre.name).join(" / ")}
                  </span>
                </p>
              </div>
            </div>
            <div className="MoviesDetails-actors">
              <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                className="mySwiper"
              >
                {dataA.map((el, idx) => {
                  return (
                    <SwiperSlide>
                      <div className="MoviesDetails-actorsItems">
                        <div className="MoviesDetails-actorsItems-img">
                          <img
                            src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                            alt="Profile"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://ucarecdn.com/c4e7a105-ec1f-4889-83e1-e783253d9e0b/-/preview/1000x562/";
                            }}
                          />
                          <div className="MoviesDetails-actorsItems-showMore">
                            <NavLink to={`/person/${el.id}`}>+</NavLink>
                          </div>
                        </div>
                        <div className="MoviesDetails-actorsItems-info">
                          <h3>{el.name}</h3>
                          <span>Character: {el.character}</span>
                          <span>{el.known_for_department}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <div className="MoviesDetailsSemilar">
        <div className="MoviesDetailsSemilar-top">
          <h1>Semilar Movie</h1>
        </div>
        <div className="MoviesDetailsSemilar-bottom">
          {isLoading ? (
            dataS.map((el, idx) => {
              return (
                <div className="MoviesDetailsSemilar-items">
                  <div className="MoviesDetailsSemilar-img">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`}
                      alt={data?.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
                      }}
                    />
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
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
