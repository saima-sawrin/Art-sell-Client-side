import React from 'react';
import bg1 from '../../Asset/all/blog-img1.jpg';
import bg2 from '../../Asset/all/blog-img2.jpg';
import bg3 from '../../Asset/all/blog-img3.jpg';
import bg4 from '../../Asset/all/blog-img4.jpg';
import bg5 from '../../Asset/all/blog-img10.jpg';
import bg6 from '../../Asset/all/blog-img5.jpg';
import bg7 from '../../Asset/all/blog-img6.jpg';
import bg8 from '../../Asset/all/blog-img7.jpg';
import bg9 from '../../Asset/all/blog-img8.jpg';

import line from '../../Asset/title-line.png';
const Blog = () => {
    return (
       <div className='my-5 bg-gray-100 pt-3'>
         <div className='justify-center items-center my-5'>
         <h1 className=' font-thin text-6xl text-primary text-center'>BLOG</h1>
            <p className='text-center text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={line} alt="" className='items-center mx-auto' />
         </div>
         <div className='grid lg:grid-cols-2  '>
         <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={bg1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn bg-gray-200 border-0 btn-square text-primary">❮</a> 
      <a href="#slide2" className="btn bg-gray-200 border-0 btn-square text-primary">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={bg2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn bg-gray-200 border-0 btn-square text-primary">❮</a> 
      <a href="#slide3" className="btn bg-gray-200 border-0 btn-square text-primary ">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={bg3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-square bg-gray-200 border-0  text-primary">❮</a> 
      <a href="#slide1" className="btn btn-square bg-gray-200 border-0  text-primary">❯</a>
    </div>
  </div> 
  
        </div>
            
            <div className='mx-auto text-center items-center my-10'>
                <h1 className='text-6xl mb-3'>ACRYLIC</h1>
                <p><b>Acrylic painting,</b> technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.</p>
            </div>
        </div>
 
        <div className='grid lg:grid-cols-2 mx-auto'>
               <div className='mx-auto text-center my-10'>
                <h1 className='text-6xl mb-3 '>OIL PAINTING</h1>
                <p><b>Oil Painting,</b> technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.</p>
            </div>
            <div className="carousel w-full">
  <div id="slide4" className="carousel-item relative w-full">
    <img src={bg4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn bg-gray-200 border-0 btn-square text-primary">❮</a> 
      <a href="#slide5" className="btn bg-gray-200 border-0 btn-square text-primary">❯</a>
    </div>
  </div> 
  <div id="slide5" className="carousel-item relative w-full">
    <img src={bg5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn bg-gray-200 border-0 btn-square text-primary">❮</a> 
      <a href="#slide6" className="btn bg-gray-200 border-0 btn-square text-primary ">❯</a>
    </div>
  </div> 
  <div id="slide6" className="carousel-item relative w-full">
    <img src={bg6} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-square bg-gray-200 border-0  text-primary">❮</a> 
      <a href="#slide4" className="btn btn-square bg-gray-200 border-0  text-primary">❯</a>
    </div>
  </div> 
  
</div>
 </div>

 <div className='grid lg:grid-cols-2 '>
         <div className="carousel w-full">
  <div id="slide7" className="carousel-item relative w-full">
    <img src={bg7} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn bg-gray-200 border-0 btn-square text-primary">❮</a> 
      <a href="#slide8" className="btn bg-gray-200 border-0 btn-square text-primary">❯</a>
    </div>
  </div> 
  <div id="slide8" className="carousel-item relative w-full">
    <img src={bg8} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn bg-gray-200 border-0 btn-square text-primary">❮</a> 
      <a href="#slide9" className="btn bg-gray-200 border-0 btn-square text-primary ">❯</a>
    </div>
  </div> 
  <div id="slide9" className="carousel-item relative w-full">
    <img src={bg9} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn btn-square bg-gray-200 border-0  text-primary">❮</a> 
      <a href="#slide7" className="btn btn-square bg-gray-200 border-0  text-primary">❯</a>
    </div>
  </div> 
  
        </div>
            
            <div className='mx-auto text-center items-center my-10'>
                <h1 className='text-6xl mb-3'>IMPASTO</h1>
                <p><b>Impasto,</b> technique in which pigments are mixed with hot, liquid wax. After all of the colours have been applied to the painting surface, a heating element is passed over them until the individual brush or spatula marks fuse into a uniform film.</p>
            </div>
        </div>


       </div>
    );
};

export default Blog;