import React, { useEffect } from "react";
import "./GenresDetails.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectGenresData } from "../../Store/Slices/GenresData/GenresData";
import { fetchGenresDetails } from "../../Store/Slices/GenresDetailsData/API";
import { selectGenresDetails } from "../../Store/Slices/GenresDetailsData/GenresDetailsData";
import Loading from "../../Components/Loading/Loading";

const GenresDetails = () => {
  const { data } = useSelector(selectGenresData);
  const { dataG, isLoading2 } = useSelector(selectGenresDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const FindedGenres = data.find((el, idx) => el?.id == id);

  useEffect(() => {
    dispatch(fetchGenresDetails(id));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="GenresDetails">
      <div className="GenresDetails-top">
        <h1>{FindedGenres?.name} Movies</h1>
      </div>
      <div className="GenresDetails-bottom">
        {isLoading2 ? (
          dataG.map((el, idx) => {
            return (
              <div className="Genres-items" key={idx}>
                <div
                  className="Genres-img"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${el?.backdrop_path})`,
                  }}
                >
                  <div className="GenresInner-img">
                    <img src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`} alt={el?.title} />
                  </div>
                  <div className="GenresShowMore-btn">
                    <NavLink to={`/movies/${el.id}`}>Show More</NavLink>
                  </div>
                </div>
                <div className="Genres-info">
                  <h2>{el.title}</h2>
                  <p>{el.overview}</p>
                  <span>Release Date: {el.release_date}</span>
                  <span>Popularity: {el.popularity}</span>
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default GenresDetails;
