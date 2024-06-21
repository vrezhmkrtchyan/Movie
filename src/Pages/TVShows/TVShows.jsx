import React from 'react';
import TrendingSeries from '../../Components/TrendingSeries/TrendingSeries';
import AiringToday from '../../Components/AiringToday/AiringToday';
import OnTheAir from '../../Components/OnTheAir/OnTheAir';
import PopularSeries from '../../Components/PopularSeries/PopularSeries';
import TopRatedSeries from '../../Components/TopRatedSeries/TopRatedSeries';
import './TVShows.css'

const TVShows = () => {
    return (
      <div className="TVShows">
        <TrendingSeries />
        <PopularSeries />
        <AiringToday />
        <OnTheAir />
        <TopRatedSeries />
      </div>
    );
}

export default TVShows;
