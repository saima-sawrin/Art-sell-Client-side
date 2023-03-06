import React from 'react';
import about from '../../Asset/about.png';
import line from '../../Asset/title-line.png';
const About = () => {
    return (
        <div className=''>


    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 font-serif">
       
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            
            <span className="relative">ABOUT US</span>
          </span>{' '}
        
        </h2>
 
        <p className="text-base text-gray-400 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        {/* <hr className="w-full my-6 border-gray-300" /> */}
        <img src={line} alt="" className='items-center mx-auto' />
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
           
            <div>
              <h2 className="mb-4 font-thin text-4xl  leading-5 ">
              A LITTLE INTRO
              </h2>
              <p className="text-sm text-gray-900">
                Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                flail 180 berm. Half-cab camel back ollie transition ledge Wes
                Humpston 1080.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            
          <div>
              <h2 className="mb-4 font-thin text-4xl  leading-5 ">
              MY EXHIBITIONS
              </h2>
              <p className="text-sm text-gray-900">
                Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                flail 180 berm. Half-cab camel back ollie transition ledge Wes
                Humpston 1080.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
         
          <div>
              <h2 className="mb-4 font-thin text-4xl  leading-5">
              NEWSLETTER
              </h2>
              <p className="text-sm text-gray-900">
                Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                flail 180 berm. Half-cab camel back ollie transition ledge Wes
                Humpston 1080.
              </p>
              
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="object-cover w-full  "
            src={about}
            alt=""
          />
      
     
        </div>
      </div>
    </div>

        </div>
    );
};

export default About;