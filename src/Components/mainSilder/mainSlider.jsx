import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import fire from "../Header-img/fire.png";
import date from "../Header-img/new-release.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./mainSlider.css";
import { useSelector } from "react-redux";
import { selectMainMoviesData } from "../../Store/Slices/mainMoviesData/mainMoviesData";
import Loading from "../../Components/Loading/Loading";

const MainSlider = () => {
  const { data, isLoading } = useSelector(selectMainMoviesData);

  return (
    <div className="MainSlider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {isLoading ? (
          (
          data.map((el, idx) => (
            <SwiperSlide key={idx}>
              <img src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`} alt={el.original_title} />
              <div className="Swiper-info">
                <h1>{el.original_title}</h1>
                <p>{el.overview}</p>
              </div>
              <div className="Swiper-pop">
                <img src={fire} alt="popularity icon" />
                <p>{el.popularity}</p>
              </div>
              <div className="Swiper-date">
                <img src={date} alt="release date icon" />
                <p>{el.release_date}</p>
              </div>
            </SwiperSlide>
          ))
        )
        ) : <Loading/>}
      </Swiper>
    </div>
  );
};

export default MainSlider;
