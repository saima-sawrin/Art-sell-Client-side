import React from 'react';
import './collection.css';
import img1 from '../../Asset/frame-img1.jpg';
import img2 from '../../Asset/frame-img2.jpg';
import img3 from '../../Asset/frame-img3.jpg';
import img4 from '../../Asset/frame-img4.jpg';
import img5 from '../../Asset/frame-img5.jpg';
import img6 from '../../Asset/frame-img6.jpg';
import img7 from '../../Asset/frame-img-7.jpg';
import line from '../../Asset/title-line.png';
const Collections = () => {
    return (
        <div className=' col collection '>
        
            <h1 className="text-center font-bold pt-10 text-3xl text-primary uppercase"><span className='text-xs text-black'>EXPLORE OUR</span> <br /> Collection</h1>
            <p className='text-gray-400 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis beatae.</p>
        
            <img src={line} alt="" className='items-center mx-auto' />
<div className="container lg:px-24 px-4 py-8 mx-auto items-center ">
  <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
    <div className="w-full col-span-2">
        <img    src={img1} alt="" className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"/>
     
    </div>
    <div className="w-full col-span-2 row-span-2">
        <img  src={img4} alt="" className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>

    </div>
    <div className="w-full ">
        <img src={img3} alt=""  className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>

    </div>
    <div className="w-full">
        <img src={img5}alt=""
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
      
    </div>
    <div className="w-full col-span-2 row-span-2">
      <img
        src={img2}
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
   
    <div className="w-full col-span-2">
      <img
        src={img6}
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div className="w-full col-span-2">
      <img
        src={img7}
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
   
  </div>
</div>
        </div>
    );
};

export default Collections;