import React from 'react';
import About from '../Component/About/About';
import Banner from '../Component/Banner/Banner';
import Collections from '../Component/Collection/Collections';
import ExploreMore from '../Component/ExploreMore/ExploreMore';
import Frames from '../Component/Frames/Frames';
import State from '../Component/State/State';
import Blog from '../Pages/Blog/Blog';
import AllCategories from '../Pages/Categories/AllCategories';
import Categories from '../Pages/Categories/Categories';
const Home = () => {

    return (
        <div>
      
          <Banner></Banner>
          <AllCategories></AllCategories>
          <Collections></Collections>
          <Frames></Frames>
          <ExploreMore></ExploreMore>
          <About></About>
           <Blog></Blog>
          <State></State>   
        </div>
    );
};

export default Home;