import React, { useEffect, useState } from "react";
import { selectSearchData } from "../../Store/Slices/SearchData/SearchData";
import close from '../LoginSideBar/close.png'
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMulti } from "../../Store/Slices/SearchData/API";
import { NavLink } from "react-router-dom";
import Loading from '../Loading/Loading'

const SearchBar = ({ search, setIsSearch, isSearch }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(selectSearchData);

  const SearchItem = (e) => {
    setQuery(e.target.value);
    if (query.trim().toLowerCase) {
      dispatch(fetchSearchMulti(query));
    }
  };

  return (
    <div className={`SearchBar ${isSearch ? "active" : ""}`}>
      <div className="SearchBar-close" onClick={() => setIsSearch(false)}>
        <img src={close} width={28} alt="" />
      </div>
      <div className="SearchBar-container">
        <div className="SearchBar-row">
          <div className="SearchBar-top">
            <div className="SearchBar-item">
              <input
                type="text"
                required
                value={query}
                onChange={(e) => SearchItem(e)}
              />
              <img src={search} width={28} alt="" />
              <label>Search for movies or TV shows or Person</label>
              <span className="focus-border"></span>
            </div>
          </div>
          <div className="SearchBar-bottom">
            { data.map((el, idx) => {
              if (el.media_type === "person") {
                return (
                  <div className="SearchBar-itemsPerson">
                    <div className="SearchBar-itemsPerson-img">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el?.profile_path}`}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://ucarecdn.com/c4e7a105-ec1f-4889-83e1-e783253d9e0b/-/preview/1000x562/";
                        }}
                      />
                      <div className="SearchBar-itemsPerson-overlay">
                        <NavLink
                          to={`/person/${el.id}`}
                          onClick={() => setIsSearch(false)}
                        >
                          +
                        </NavLink>
                      </div>
                    </div>
                    <div className="SearchBar-itemsPerson-info">
                      <h3>{el?.name}</h3>
                    </div>
                  </div>
                );
              } else if (el.media_type === "movie") {
                return (
                  <div className="SearchBar-itemsMovie">
                    <div className="SearchBar-itemsMovie-img">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
                        }}
                      />
                      <div className="SearchBar-itemsMovie-info">
                        <h3>{el?.original_title}</h3>
                        <p>Popularity: {el?.popularity}</p>
                        <div className="SearchBar-itemsMovie-btn">
                          <NavLink
                            to={`/movies/${el.id}`}
                            onClick={() => setIsSearch(false)}
                          >
                            Show More
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (el.media_type === "tv") {
                return (
                  <div className="SearchBar-itemsMovie">
                    <div className="SearchBar-itemsMovie-img">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${el?.poster_path}`}
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
                        }}
                      />
                      <div className="SearchBar-itemsMovie-info">
                        <h3>{el?.name}</h3>
                        <p>Popularity: {el?.popularity}</p>
                        <div className="SearchBar-itemsMovie-btn">
                          <NavLink
                            to={`/tv-serials/${el.id}`}
                            onClick={() => setIsSearch(false)}
                          >
                            Show More
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
