import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category}) => {
  const {_id,image , title} = category;
    return (

    <div className="px-4 py-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-10">
    

      {/* Categories */}
      <div >
  
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-50">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={image}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            ,<Link to='/shop'><p className="text-lg font-bold">{title}</p></Link>
            {/* <p className="mb-5 text-xs text-gray-800">Product Manager</p> */}
         
          </div>
        </div>


      </div>




  
    );
};

export default Categories;