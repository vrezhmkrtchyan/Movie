import React from "react";
import "./MoviesVideosSlider.css";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { selectMoviesDataWithVideos } from "../../Store/Slices/MoviesDataWithVideos/MoviesDataWithVideos";

const MoviesVideosSlider = () => {
  const { data } = useSelector(selectMoviesDataWithVideos);
  return (
    <div className="MoviesVideosSlider">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        className="mySwiper"
      >
        {data.length > 0 &&
          data.map((el, idx) => (
            <SwiperSlide key={idx}>
              <div className="MovieVideo-item">
                <video autoPlay loop muted>
                  <source src={el.key} type="video/mp4" />
                </video>
              </div>
              <div className="MovieVideo-info">
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <span>Release Date: {el.release_date}</span>
                <span>Duration: {el.duration}</span>
                <span>Genre: {el.genre}</span>
                <span>Cast: {el.cast}</span>
                <span>Director: {el.director}</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MoviesVideosSlider;
