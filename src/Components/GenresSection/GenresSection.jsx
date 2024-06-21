import React from 'react';
import "./GenresSection.css";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectGenresData} from '../../Store/Slices/GenresData/GenresData'
import Loading from '../Loading/Loading'

const GenresSection = () => {
    const {data, isLoading} = useSelector(selectGenresData);

    return (
      <div className="GenresSection">
        <div className="GenresSection-top">
          <h1>Explore a World of Cinema: Discover Your Favorite Genres</h1>
        </div>
        <div className="GenresSection-bottom">
          <div className="GenresSection-row">
            {isLoading ? data.map((el, idx) => {
              return (
                <div className="Generes-items" key={idx}>
                  <NavLink to={`/genres/${el.id}`}>{el.name}</NavLink>
                </div>
              );
            }): <Loading/>}
          </div>
        </div>
      </div>
    );
}

export default GenresSection;
