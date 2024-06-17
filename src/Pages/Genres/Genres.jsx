import React, { useEffect } from "react";
import "./Genres.css";
import { useDispatch, useSelector } from "react-redux";
import { selectGenresData } from "../../Store/Slices/GenresData/GenresData";
import { selectGenresDetails } from "../../Store/Slices/GenresDetailsData/GenresDetailsData";
import { fetchGenresDetails } from "../../Store/Slices/GenresDetailsData/API";
import { NavLink } from "react-router-dom";

const Genres = () => {
  const { data } = useSelector(selectGenresData);
  const { dataG } = useSelector(selectGenresDetails);
  const dispatch = useDispatch();

  const handlerGenres = (id) => {
    dispatch(fetchGenresDetails(id));
  };

  useEffect(() => {
    dispatch(fetchGenresDetails(28));
  }, []);

  return (
    <div className="Genres">
      <div className="Genres-containerFluid">
        <div className="Genres-row">
          <div className="Genres-left">
            <div className="Genres-leftTop">
              <h2>Galactic Frontiers: Odyssey's Fate</h2>
              <p>
                Embark on an interstellar adventure in "Galactic Frontiers:
                Odyssey's Fate."
              </p>
            </div>
            <div className="Genres-leftBottom">
              {data.length > 0 &&
                data.map((el, idx) => {
                  return (
                    <div
                      key={idx}
                      className="Genres-title"
                      onClick={() => handlerGenres(el.id)}
                    >
                      <h4>{el.name}</h4>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="Genres-right">
            {dataG.length > 0 &&
              dataG.map((el, idx) => {
                return (
                  <div className="Genres-rightItems">
                    <div className="Genres-rightItems-img">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                        alt=""
                      />
                      <div className="Genres-rightItems-overlay">
                        <h3>{el.title}</h3>
                        <div className="Genres-rightItems-overlayBtn">
                            <NavLink to={`/movies/${el.id}`}>Show More</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
