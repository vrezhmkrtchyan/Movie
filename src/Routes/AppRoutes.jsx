import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Main from "../Pages/Main/Main";
import Movies from "../Pages/Movies/Movies";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import TVShows from "../Pages/TVShows/TVShows";
import Genres from "../Pages/Genres/Genres";
import Register from "../Pages/Register/Register";
import GenresDetails from "../Pages/GenresDetails/GenresDetails";
import PersonDetails from "../Pages/PersonDetails/PersonDetails";
import SerialDetails from "../Pages/SerialDetails/SerialDetails";
import GenresSerials from "../Pages/GenresSerials/GenresSerials";
import { useDispatch } from "react-redux";
import { fetchGetMovies } from "../Store/Slices/mainMoviesData/API";
import {
  fetchGetNowPlayingMovies,
  fetchGetPopularMovies,
  fetchGetTrendingMovies,
} from "../Store/Slices/TrendingMoviesData/API";
import { fetchGetGenresData, fetchGetGenresSerialsData } from "../Store/Slices/GenresData/API";
import { fetchGetMoviesDataWithVideos } from "../Store/Slices/MoviesDataWithVideos/API";
import { fetchTopSectionData } from "../Store/Slices/TopSectionData/API";
import { fetchUpComingData } from "../Store/Slices/UpComingData/API";
import { fetchCompanyData } from "../Store/Slices/CompanyData/API";
import {
  fetchAiringSeries,
  fetchOnTheAirSeries,
  fetchPopularSeries,
  fetchTopRatedSeries,
  fetchTrendingSeries,
} from "../Store/Slices/SeriesMainData/API";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetMovies());
    dispatch(fetchGetTrendingMovies());
    dispatch(fetchGetGenresData());
    dispatch(fetchGetGenresSerialsData());
    dispatch(fetchGetMoviesDataWithVideos());
    dispatch(fetchTopSectionData());
    dispatch(fetchUpComingData());
    dispatch(fetchCompanyData());
    dispatch(fetchGetPopularMovies());
    dispatch(fetchGetNowPlayingMovies());
    dispatch(fetchTrendingSeries());
    dispatch(fetchAiringSeries());
    dispatch(fetchOnTheAirSeries());
    dispatch(fetchPopularSeries());
    dispatch(fetchTopRatedSeries());
  }, [dispatch]);

  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="person/:id" element={<PersonDetails />} />
          <Route path="tv-serials" element={<TVShows />} />
          <Route path="tv-serials/:id" element={<SerialDetails />} />
          <Route path="genres" element={<Genres />} />
          <Route path="genres/tv-serials" element={<GenresSerials/>}/>
          <Route path="genres/:id" element={<GenresDetails />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
