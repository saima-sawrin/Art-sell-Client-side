import React from 'react';
import bg1 from '../../Asset/bg1.png';
import bg2 from '../../Asset/bg2.jpg';
import bg3 from '../../Asset/bg3.jpg';
import Header from '../../Shared/Header/Header';
import './Banner.css';
const Banner = () => {
  
  return (
   <div className=" carousel mx-auto banner font-sans ">
    
  <div id="slide1" className="carousel-item relative w-full text-white  ">
   <div className='image1'> <img src={bg1}className="w-full h-full " /></div>
    
    <div className=" absolute flex flex-col-2   transform translate-y-1/2 left-5 right-5 sm:top-0 lg:top-1/4 ">
      <div className='slide-right content'>
 
        <div className='lg:mb-5'><h2 className=' uppercase  font-semibold   lg:text-6xl  '>FEMME <span className='text-primary lg:text-6xl'>FATALE</span> </h2>
       
       <h3 className='text-gray-400 lg:mb-5 decoration-slice'>BODY ART</h3></div>
        <p className='font-sans text-gray-300  '>And I always had this idea for making a movie  about <br />  a femme fatale, because I like these characters. They're a <br />  lot of fun,they're manipulative, they're dangerous. </p>
        <marquee behavior="scroll" direction="left"></marquee>
      </div>
      <div className='flex '>
      <a href="#slide1"><img src={bg1} alt="" className="btn btn-circle   ring hover:ring-primary ring-offset-2"/></a> 
  <a href="#slide2" ><img src={bg2} alt="" className="btn btn-circle ring hover:ring-primary ring-offset-2"/></a>
  <a href="#slide3" ><img src={bg3} alt="" className="btn btn-circle ring hover:ring-primary ring-offset-2"/></a>
      
      </div>
     </div>
     <div>
  
 
  </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full  ">
  <div className='bg-black bg-opacity-0 image2'>    <img src={bg2} className="w-full  " /></div>
    <div className="absolute flex justify-around  transform translate-y-1/2 left-5 right-5 sm:top-0 lg:top-1/4 ">
      <div className='slide-right '>
        <h2 className=' uppercase  lg:mb-2 font-semibold lg:text-6xl text-white '>LIVING IN <span className='text-primary'>COLOR</span> </h2>
       
        <h3 className='text-gray-300 lg:mb-5 decoration-slice'>FACE PAINTING</h3>
        <p className='font-sans text-gray-300  '>When you take a flower in your hand and really look at it, it's   your world <br /> for the moment.   I want to give that world to someone else. Most people  <br /> in the city rush around so, they have no time to look at a flower.  <br />  I want them to see it whether they want to or not.  lot of fun,they're <br /> manipulative, they're dangerous. </p>
      </div>
      <div className='flex '>

  <a href="#slide2" ><img src={bg2} alt="" className="btn btn-circle ring hover:ring-primary ring-offset-2"/></a>
  <a href="#slide3" ><img src={bg3} alt="" className="btn btn-circle ring hover:ring-primary ring-offset-2"/></a>
  <a href="#slide1"><img src={bg1} alt="" className="btn btn-circle   ring hover:ring-primary ring-offset-2"/></a>
      
      </div>
     </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
   <div className='image3'>
   <img src={bg3} className="w-full opacity-100" />
   </div>
    <div className="absolute flex justify-around  transform translate-y-1/2 left-5 right-5 sm:top-0 lg:top-1/4 ">
      <div className='slide-right'>
        <h2 className=' lg:text-6xl lg:mb-2 font-bold  text-white  '>WALLS <span className='text-primary'>n</span> VINES</h2>
       
        <h3 className='text-gray-300 lg:mb-5 decoration-slice'>NATURE ART</h3>
        <p className='font-sans text-gray-200  '>The dog can only become what's in your bubble. The dog is imitating <br /> the energy that is in your bubble. You are the source, <br /> the feast of energy. If you feel anxious, the dog becomes anxious with you. <br /> If you become nervous, the dog wakes up nervous with you.  </p>
      </div>
      <div className='flex '>
    
  <a href="#slide3" ><img src={bg3} alt="" className="btn btn-circle ring hover:ring-primary ring-offset-2"/></a>
  <a href="#slide1"><img src={bg1} alt="" className="btn btn-circle   ring hover:ring-primary ring-offset-2"/></a> 
  <a href="#slide2" ><img src={bg2} alt="" className="btn btn-circle ring hover:ring-primary ring-offset-2"/></a>
      
      </div>
     </div>
  </div> 

  
</div>
  );
};
  
export default Banner;