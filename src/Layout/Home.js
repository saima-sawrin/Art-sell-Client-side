import React from 'react';
import About from '../Component/About/About';
import Banner from '../Component/Banner/Banner';
import Collections from '../Component/Collection/Collections';
import ExploreMore from '../Component/ExploreMore/ExploreMore';
import Frames from '../Component/Frames/Frames';
const Home = () => {

    return (
        <div>
          <Banner></Banner>
          <Collections></Collections>
          <Frames></Frames>
          <ExploreMore></ExploreMore>
          <About></About>
          
        </div>
    );
};

export default Home;