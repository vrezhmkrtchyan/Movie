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
import { ActorsDataReducer } from "./Slices/ActorsData/ActorsData";
import { RegisterDataReducer } from "./Slices/RegisterData/RegisterData";
import { SeriesMainDataReducer } from "./Slices/SeriesMainData/SeriesMainData";
import { SearchDataReducer } from "./Slices/SearchData/SearchData";

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
    ActorsData: ActorsDataReducer,
    RegisterData: RegisterDataReducer,
    SeriesMainData: SeriesMainDataReducer,
    SearchData: SearchDataReducer,
  },
});

export default Store