import { configureStore } from "@reduxjs/toolkit";
import { mainMoviesDataReducer } from "./Slices/mainMoviesData/mainMoviesData";
import { TredingMoviesDataReducer } from "./Slices/TrendingMoviesData/TrendingMoviesData";
import { GenresDataReducer } from "./Slices/GenresData/GenresData";
import { MoviesDataWithVideosReducer } from "./Slices/MoviesDataWithVideos/MoviesDataWithVideos";
import { TopSectionDataReducer } from "./Slices/TopSectionData/TopSectionData";
import { UpComingReducer } from "./Slices/UpComingData/UpComingData";
import { CompanyDataReducer } from "./Slices/CompanyData/CompanyData";
import { MovieDetailsReducer } from "./Slices/MovieDetails/MovieDetails";
import { SemilarMoviesReducer } from "./Slices/SemilarMoviesData/SemilarMoviesData";
import { GenresDetailsReducer } from "./Slices/GenresDetailsData/GenresDetailsData";

const Store = configureStore({
  reducer: {
    mainMoviesData: mainMoviesDataReducer,
    TredingMoviesData: TredingMoviesDataReducer,
    GenresData: GenresDataReducer,
    MoviesDataWithVideos: MoviesDataWithVideosReducer,
    TopSectionData: TopSectionDataReducer,
    UpComingData: UpComingReducer,
    CompanyData: CompanyDataReducer,
    MovieDetails: MovieDetailsReducer,
    SemilarMovies: SemilarMoviesReducer,
    GenresDetailsData: GenresDetailsReducer,
  },
});

export default Store