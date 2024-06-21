import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import fire from "../Header-img/fire.png";
import date from "../Header-img/new-release.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TrendingSeries.css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useSelector } from 'react-redux';
import { selectSeriesMainData } from '../../Store/Slices/SeriesMainData/SeriesMainData';
import Loading from '../Loading/Loading';

const TrendingSeries = () => {
    const { dataTreding, isLoading } = useSelector(selectSeriesMainData);
    return (
      <div className="TrendingSeries">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {isLoading ? (
            dataTreding.map((el, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                  alt={el.original_title}
                />
                <div className="Swiper-infoSeries">
                  <h1>{el.original_name}</h1>
                  <p>{el.overview}</p>
                </div>
                <div className="Swiper-popSeries">
                  <img src={fire} alt="popularity icon" />
                  <p>{el.popularity}</p>
                </div>
                <div className="Swiper-dateSeries">
                  <img src={date} alt="release date icon" />
                  <p>{el.first_air_date}</p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <Loading />
          )}
        </Swiper>
      </div>
    );
}

export default TrendingSeries;
