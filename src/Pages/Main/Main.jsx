import React from 'react';
import MainSlider from '../../Components/mainSilder/mainSlider';
import TrendingMovies from '../../Components/TrendingMovies/TrendingMovies';
import GenresSection from '../../Components/GenresSection/GenresSection';
import TopSection from '../../Components/TopSection/TopSection';
import UpComing from '../../Components/UpComing/UpComing';
import Company from '../../Components/Company/Company';

const Main = () => {
    return (
      <div className="Main">
        <MainSlider />
        <Company />
        <GenresSection />
        <TrendingMovies />
        <TopSection />
        <UpComing />
      </div>
    );
}

export default Main;
