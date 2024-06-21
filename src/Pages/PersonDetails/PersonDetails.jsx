import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  fetchActorDetailsData,
  fetchActorMoviesData,
} from "../../Store/Slices/ActorsData/API";
import { selectActorsData } from "../../Store/Slices/ActorsData/ActorsData";
import drama from "./PersonDetailsIMG/drama (1).png";
import location from "./PersonDetailsIMG/location.png";
import pop from "./PersonDetailsIMG/popular.png";
import cake from "./PersonDetailsIMG/birthday-cake.png";
import "./PersonDetails.css";

const PersonDetails = () => {
  const { dataD, dataM } = useSelector(selectActorsData);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(dataM);

  useEffect(() => {
    dispatch(fetchActorDetailsData(id));
    dispatch(fetchActorMoviesData(id));
  }, [dispatch, id]);

  return (
    <div className="PersonDetails">
      <div className="PersonDetails-containerFluid">
        <div className="PersonDetails-row">
          <div className="PersonDetails-top">
            <div className="PersonDetails-left">
              <div className="PersonDetails-leftImg">
                <img
                  src={`https://image.tmdb.org/t/p/original/${dataD?.profile_path}`}
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://ucarecdn.com/c4e7a105-ec1f-4889-83e1-e783253d9e0b/-/preview/1000x562/";
                  }}
                />
                <div className="ProfileDetails-leftOverlay">
                  {dataD?.also_known_as && dataD.also_known_as.length > 0 ? (
                    dataD.also_known_as.map((el, idx) => (
                      <span key={idx}>Also Known As {el}</span>
                    ))
                  ) : (
                    <span>No alternate names available</span>
                  )}
                </div>
              </div>
              <div className="PersonDetails-leftInfo">
                <h1>{dataD?.name}</h1>
                <span>
                  <img src={drama} width={28} alt="" />{" "}
                  {dataD?.known_for_department}
                </span>
                <p>{dataD?.biography}</p>
                <span>
                  <img src={cake} width={28} alt="" />
                  {dataD?.birthday}
                </span>
                <span>
                  <img src={location} width={28} alt="" />{" "}
                  {dataD?.place_of_birth}
                </span>
                <span>
                  <img src={pop} width={28} alt="" /> {dataD?.popularity}
                </span>
              </div>
            </div>
          </div>
          <div className="PersonDetails-bottom">
            <h1 style={{ marginBottom: "1rem" }}>Actor's Movies And Serials Portfolio</h1>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {dataM?.map((el) => (
                <SwiperSlide key={el.id}>
                  <div className="PersonDetailsMovies-items">
                    <div className="PersonDetailsMovies-itemsImg">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                        alt="picture"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
                        }}
                      />
                      <div className="PersonDetailsMovies-itemsInfo">
                        <h1>{el.original_title}</h1>
                        <div className="PersonDetails-btn">
                          <NavLink to={`/movies/${el.id}`}>Show More</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
