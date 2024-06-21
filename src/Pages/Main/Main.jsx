import React from 'react';
import MainSlider from '../../Components/mainSilder/mainSlider';
import TrendingMovies from '../../Components/TrendingMovies/TrendingMovies';
import GenresSection from '../../Components/GenresSection/GenresSection';
import TopSection from '../../Components/TopSection/TopSection';
import UpComing from '../../Components/UpComing/UpComing';
import Company from '../../Components/Company/Company';
import NowPlayingMovies from '../../Components/NowPlayingMovies/NowPlayingMovies';
import PopularMovies from '../../Components/PopularMovies/PopularMovies';

const Main = () => {
    return (
      <div className="Main">
        <MainSlider />
        <Company />
        <GenresSection />
        <TrendingMovies />
        <TopSection />
        <UpComing />
        <NowPlayingMovies/>
        <PopularMovies/>
      </div>
    );
}

export default Main;
