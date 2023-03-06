import React from 'react';
import ex1 from '../../Asset/Explore/ex-1.jpg';
import ex2 from '../../Asset/Explore/ex-2.jpg';
import ex3 from '../../Asset/Explore/ex-3.jpg';
import ex4 from '../../Asset/Explore/ex-4.jpg';
import line from '../../Asset/title-line.png';
const ExploreMore = () => {
    return (

  <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-100 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
       
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
        
          </span>{' '}
         Explore More
        </h2>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio veritatis provident</p>
        <img src={line} alt="" className='items-center mx-auto' />
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={ex1}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-primary bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
            
                  Lady With Blue Eyes And White Hat
              </p>
              
             
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={ex2}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-yellow-600 bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
            
              The Master At Work


              </p>
              
             
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={ex3}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-blue-600 bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
            
              The Orchard – British Pastel Painting

              </p>
              
             
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={ex4}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-purple-400 bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
            
              Mademoiselle Pogány Brancusi Masterpiece
              </p>
              
             
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>

    );
};

export default ExploreMore;