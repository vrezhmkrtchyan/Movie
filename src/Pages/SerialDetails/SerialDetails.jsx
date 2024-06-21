import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  fetchSeriesDetails,
  fetchSeriesDetailsCast,
  fetchSeriesDetailsEpisodes,
  fetchSeriesDetailsSimilar,
  fetchSeriesDetailsVideo,
} from "../../Store/Slices/SeriesMainData/API";
import "./SerialDetails.css";
import { NavLink, useParams } from "react-router-dom";
import pop from "../MovieDetails/MovieDetailIMG/popcorn-box.png";
import web from "../MovieDetails/MovieDetailIMG/website.png";
import play from "../MovieDetails/MovieDetailIMG/play-button-arrowhead.png";
import close from "../../Components/LoginSideBar/close.png";
import { useDispatch, useSelector } from "react-redux";
import { selectSeriesMainData } from "../../Store/Slices/SeriesMainData/SeriesMainData";
import Loading from "../../Components/Loading/Loading";

const SerialDetails = () => {
  const [isView, setIsView] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    dataSerialDetails,
    dataSerialDetailsVideo,
    dataSerialDetailsCast,
    dataSerialDetailsSimilar,
    dataSerialDetailsEpisodes,
    isLoading,
  } = useSelector(selectSeriesMainData);
  useEffect(() => {
    dispatch(fetchSeriesDetails(id));
    dispatch(fetchSeriesDetailsVideo(id));
    dispatch(fetchSeriesDetailsCast(id));
    dispatch(fetchSeriesDetailsSimilar(id));
    dispatch(fetchSeriesDetailsEpisodes(id));
  }, [dispatch, id]);

  console.log(dataSerialDetailsCast);
  
  const trailer = dataSerialDetailsVideo?.find(
    (video) => video.type === "Teaser"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="SerialDetails">
      <div className={`MovieDetails-bg ${isView ? "active" : ""}`}></div>
      <div className={`MovieDatailsTrailer ${isView ? "active" : ""}`}>
        <div
          className="MovieDatailsTrailer-close"
          onClick={() => setIsView(false)}
        >
          <img src={close} width={28} alt="Close" />
        </div>
        {trailer ? (
          <iframe
            src={`https://youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            title="Trailer"
            allowFullScreen
          ></iframe>
        ) : (
          <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
            Trailer Not Found
          </h1>
        )}
      </div>
      <div className="MoviesDetails-containerFluid">
        {isLoading ? (
          <div
            className="MoviesDetails-row"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${dataSerialDetails?.backdrop_path})`,
            }}
          >
            <div className="MoviesDetails-inner">
              <div className="MoviesDetails-innerImg">
                <img
                  src={`https://image.tmdb.org/t/p/original/${dataSerialDetails?.poster_path}`}
                  alt="Actor"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://static.displate.com/460x640/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.avif";
                  }}
                />
                <div className="MoviesDetails-innerImg-info">
                  <h2>{dataSerialDetails?.name}</h2>
                  <p>{dataSerialDetails?.tagline}</p>
                  <div className="MoviesDetails-innerImg-infoWatch">
                    <button onClick={() => setIsView(true)}>
                      <img src={play} alt="Play" />
                      Watch Trailer
                    </button>
                  </div>
                </div>
                <div className="MoviesDetails-innerImg-status">
                  <h2>Status: {dataSerialDetails?.status}</h2>
                </div>
                <div className="MoviesDetails-innerImg-vote">
                  <span>
                    Vote Average Rating: {dataSerialDetails?.vote_average}
                  </span>
                  <span>
                    Vote Rating Count: {dataSerialDetails?.vote_count}
                  </span>
                </div>
              </div>
              <div className="MoviesDetails-DetailsInfo">
                <h1>{dataSerialDetails?.name}</h1>
                <p>{dataSerialDetails?.overview}</p>
                <p>
                  <img src={pop} alt="Popularity" />
                  <span>{dataSerialDetails?.popularity}</span>
                </p>
                <p>
                  <img src={web} alt="Release Date" />
                  <span>{dataSerialDetails?.first_air_date}</span>
                </p>
                <p>
                  <span>
                    Category:{" "}
                    {dataSerialDetails?.genres
                      ?.map((genre) => genre.name)
                      .join(" / ")}
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
                {dataSerialDetailsCast.map((el, idx) => {
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
                          <span>
                            Character:{" "}
                            {el?.roles?.map((role, idx) => (
                              <span key={idx}>
                                {role.character}
                                {idx < el.roles.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </span>
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
          <h1>Semilar Serials</h1>
        </div>
        <div className="MoviesDetailsSemilar-bottom">
          {isLoading ? (
            dataSerialDetailsSimilar.map((el, idx) => {
              return (
                <div className="MoviesDetailsSemilar-items">
                  <div className="MoviesDetailsSemilar-img">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`}
                      alt={dataSerialDetailsSimilar?.title}
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
                      <h3>{el.original_name}</h3>
                      <p>{el.popularity}</p>
                      <NavLink
                        className="ShowMore-btn"
                        to={`/tv-serials/${el.id}`}
                      >
                        Show More
                      </NavLink>
                    </div>
                  </div>
                  <div className="MoviesDetailsSemilar-info">
                    <h2>{el?.original_name}</h2>
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

export default SerialDetails;
