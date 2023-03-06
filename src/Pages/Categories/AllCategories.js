import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Categories from './Categories';
import bg from '../../Asset/Products/bg.jpeg';
import line from '../../Asset/title-line.png';
const AllCategories = () => {
    const{loading} = useContext(AuthContext)

    const[categories, setCategories] = useState([])
        // console.log(categories)

    useEffect(()=>{
        fetch('https://art-selling-server-side.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },
        [])
        if(loading){
            return  <div className="text-center">
            <progress className="progress w-56"></progress>
        </div>
              
        
        }
    return (
      
  <div className='w-full'>

    {/* <div className="relative">
      <img
        src={bg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="text-center items-center justify-between ">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
               Art Gallery Shop
              </h2>
          
               <p className='className="mb-6 font-serif text-xs  tracking-tight text-primary sm:leading-none"'>Cut from light and fluid mushroom.</p>
            </div>
         
          </div>
        </div>
      </div>
    </div> */}
           <div className='text-center'>
          <div className='text-align-center   mt-4'>
          <h3 className='text-4xl font-bold text-center text-primary'>Products Category</h3>
          <p className='text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident omnis, incidunt nemo ratione </p>
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
       <img src={line} alt="" className='mx-auto my-2'/>
      </div>
     <div >
     <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {
        categories.map(category => <Categories key={category._id} category={category}></Categories>)
         }
     </div>
   
     </div>

        </div>
  </div>
  </div>
    
    );
};

export default AllCategories;