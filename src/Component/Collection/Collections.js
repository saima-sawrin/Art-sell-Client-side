import React from 'react';
import './collection.css';
import img1 from '../../Asset/frame-img1.jpg';
import img2 from '../../Asset/frame-img2.jpg';
import img3 from '../../Asset/frame-img3.jpg';
import img4 from '../../Asset/frame-img4.jpg';
import img5 from '../../Asset/frame-img5.jpg';
import img6 from '../../Asset/frame-img6.jpg';
import img7 from '../../Asset/frame-img-7.jpg';
const Collections = () => {
    return (
        <div className='col bg-white'>
        
            <h1 class="text-center font-bold py-10 text-3xl text-primary uppercase"><span className='text-xs text-black'>EXPLORE OUR</span> <br /> Collection</h1>

<div class="container lg:px-24 px-4 py-8 mx-auto items-center ">
  <div class="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
    <div class="w-full col-span-2">
        <img    src={img1} alt="" className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"/>
     
    </div>
    <div class="w-full col-span-2 row-span-2">
        <img  src={img4} alt="" class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>

    </div>
    <div class="w-full ">
        <img src={img3} alt=""  class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>

    </div>
    <div class="w-full">
        <img src={img5}alt=""
        class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 " />
      
    </div>
    <div class="w-full col-span-2 row-span-2">
      <img
        src={img2}
        alt="Photo by Claudio Schwarz on Unsplash"
        class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
   
    <div class="w-full col-span-2">
      <img
        src={img6}
        class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
    <div class="w-full col-span-2">
      <img
        src={img7}
        alt="Photo by Claudio Schwarz on Unsplash"
        class="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "/>
    </div>
   
  </div>
</div>
        </div>
    );
};

export default Collections;