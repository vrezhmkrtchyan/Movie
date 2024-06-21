import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import "./GenresSerials.css";
import { selectGenresData } from "../../Store/Slices/GenresData/GenresData";


import { selectGenresDetails } from "../../Store/Slices/GenresDetailsData/GenresDetailsData";
import { fetchGenresSerialsDetails } from "../../Store/Slices/GenresDetailsData/API";

const GenresSerials = () => {
  const { dataSerials, isLoading } = useSelector(selectGenresData);
  const {dataSG} = useSelector(selectGenresDetails);
  const dispatch = useDispatch();

    console.log(dataSG);
  const handlerGenres = (id) => {
    dispatch(fetchGenresSerialsDetails(id));
  };

   useEffect(() => {
     dispatch(fetchGenresSerialsDetails(37));
   }, []);
  return (
    <div className="GenresSerials">
      <div className="Genres-containerFluid">
        <div className="Genres-row">
          <div className="Genres-left">
            <div className="Genres-leftTop">
              <div className="Genres-leftTop-Link">
                <NavLink to="/genres">Movies</NavLink>
                <span>/</span>
                <NavLink to="/genres/tv-serials">TV Serials</NavLink>
              </div>
              <h2>Galactic Frontiers: Odyssey's Fate</h2>
              <p>
                Embark on an interstellar adventure in "Galactic Frontiers:
                Odyssey's Fate."
              </p>
            </div>
            <div className="Genres-leftBottom">
              {isLoading ? (
                dataSerials.map((el, idx) => {
                  return (
                    <div
                      key={idx}
                      className="Genres-title"
                      onClick={() => handlerGenres(el.id)}
                    >
                      <h4>{el.name}</h4>
                    </div>
                  );
                })
              ) : (
                <Loading />
              )}
            </div>
          </div>
          <div className="Genres-right">
            {isLoading ? (
              dataSG.map((el, idx) => {
                return (
                  <div className="Genres-rightItems">
                    <div className="Genres-rightItems-img">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                        alt=""
                      />
                      <div className="Genres-rightItems-overlay">
                        <h3>{el.name}</h3>
                        <div className="Genres-rightItems-overlayBtn">
                          <NavLink to={`/tv-serials/${el.id}`}>
                            Show More
                          </NavLink>
                        </div>
                      </div>
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
    </div>
  );
};

export default GenresSerials;
