import React, { useEffect } from "react";
import "./Genres.css";
import { useDispatch, useSelector } from "react-redux";
import { selectGenresData } from "../../Store/Slices/GenresData/GenresData";
import { selectGenresDetails } from "../../Store/Slices/GenresDetailsData/GenresDetailsData";
import { fetchGenresDetails } from "../../Store/Slices/GenresDetailsData/API";
import { NavLink } from "react-router-dom";
import Loading from '../../Components/Loading/Loading'

const Genres = () => {
  const { data, isLoading } = useSelector(selectGenresData);
  const { dataG, isLoading2} = useSelector(selectGenresDetails);
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
              <div className="Genres-leftTop-Link">
                <NavLink to=''>Movies</NavLink>
                <span>/</span>
                <NavLink to='tv-serials'>TV Serials</NavLink>
              </div>
              <h2>Galactic Frontiers: Odyssey's Fate</h2>
              <p>Embark on an interstellar adventure in "Galactic Frontiers: Odyssey's Fate."</p>
            </div>
            <div className="Genres-leftBottom">
              {isLoading ?
                data.map((el, idx) => {
                  return (
                    <div key={idx} className="Genres-title" onClick={() => handlerGenres(el.id)}>
                      <h4>{el.name}</h4>
                    </div>
                  );
                }) : <Loading/>}
            </div>
          </div>
          <div className="Genres-right">
            {isLoading2 ?
              dataG.map((el, idx) => {
                return (
                  <div className="Genres-rightItems">
                    <div className="Genres-rightItems-img">
                      <img src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt="" />
                      <div className="Genres-rightItems-overlay">
                        <h3>{el.title}</h3>
                        <div className="Genres-rightItems-overlayBtn">
                          <NavLink to={`/movies/${el.id}`}>Show More</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }) : <Loading/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
