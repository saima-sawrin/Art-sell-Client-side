import React from 'react';
import frame1 from '../../Asset/frame1.jpg';
import frame2 from '../../Asset/frame2.jpg';
import frame3 from '../../Asset/frame3.jpg';

const Frames = () => {
    return (
        <div className='font-serif mt-3 bg-white '>
            <h1 className='text-6xl text-center text-primary'>FRAMES</h1>
            <p className='text-center text-gray-400'>Buy One Which You Like Most</p>
            {/* <div className='grid lg:grid-cols-2 my-10'>
                <div>
         
                  <img src={frame1} alt="" className='w-56 mb-3' />
                  <img src={frame1} alt="" className='w-56 mb-3' />
                  <img src={frame1} alt="" className='w-56 mb-3' />
                </div>
                <div>
                   <p className='text-gray-200 text-center'>The secret to so many artists living so long is that every painting is a new adventure. So, you see, they're always looking ahead to something new and exciting. The secret is not to look back.</p>
                   <div className='lg:grid-col-5'> 
                    <button className='text-white px-12 bg-primary py-3 m-3 hover:bg-white hover:text-primary'>All</button>
                    <button className='text-white px-12 bg-primary py-3 m-3 hover:bg-white hover:text-primary'>All</button>
                    <button className='text-white px-12 bg-primary py-3 m-3 hover:bg-white hover:text-primary'>All</button>
                    <button className='text-white px-12 bg-primary py-3 m-3 hover:bg-white hover:text-primary'>All</button>
                    <button className='text-white px-12 bg-primary py-3 m-3 hover:bg-white hover:text-primary'>All</button>
                   </div>
                </div>

            </div> */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
         
          </div>
          <div className="max-w-xl mb-6">
           <div>
                   <p className='text-gray-600 '>The secret to so many artists living so long is that every painting is a new adventure. So, you see, they're always looking ahead to something new and exciting. The secret is not to look back.</p>
                   <div className='lg:grid-col-5'> 
                   <button className='text-white px-10 bg-primary py-2 m-3 hover:bg-white hover:text-primary'>All</button>
                    <button className='text-white px-10 bg-primary py-2 m-3 hover:bg-white hover:text-primary'>CERAMIC</button>
                    <button className='text-white px-10 bg-primary py-2 m-3 hover:bg-white hover:text-primary'>PLASTIC</button>
                    <button className='text-white px-10 bg-primary py-2 m-3 hover:bg-white hover:text-primary'>WOODEN</button>
                    <button className='text-white px-10 bg-primary py-2 m-3 hover:bg-white hover:text-primary'>STEEL</button>
                
                   </div>
                </div>
          </div>
         
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className=" object-cover mb-6 rounded  h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={frame3}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded  sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={frame2}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={frame1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Frames;