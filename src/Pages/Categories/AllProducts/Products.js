import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Products = ({product}) => {
    const {pImg , pName , resalePrice} = product;
    return (
        <div>
               <div className="px-4 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-10">
    

    {/* Categories */}
    <div  className='flex flex-col border-2  shadow-sm'>

        <div className="relative pb-10 mb-4 h-full  shadow lg:pb-64 ">
          <img
            className="absolute object-cover w-full h-full "
            src={pImg}
            alt="Person"
          />
        </div>
        <div className=" sm:text-center">
          <p className="text-lg font-bold">{pName}</p>
          <p className=" p-2 text-xl text-primary font-semibold  ">${resalePrice}</p>
          {/* <button className='p-3 hover:bg-primary hover:text-white'>Add to Cart<FaShoppingCart className='inline'></FaShoppingCart> </button> */}
          <label htmlFor="confirm-modal" className="btn bg-white p-3 border-0 text-black hover:bg-primary hover:text-white rounded-none">Add To Cart<FaShoppingCart className='inline '></FaShoppingCart></label>
        </div>
      </div>


    </div>
        </div>
    );
};

export default Products;