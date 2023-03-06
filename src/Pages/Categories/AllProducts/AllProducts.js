import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import bg from '../../../Asset/Products/bg.jpeg';
import Products from './Products';
import Modal from '../../../Shared/Modal/Modal';
const AllProducts = () => {

    const{loading} = useContext(AuthContext);

    const[products, setProducts] = useState([]);
   

    useEffect(()=>{
        fetch(' https://art-selling-server-side.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },
        [])
        if(loading){
            return  <div className="text-center">
            <progress className="progress w-56"></progress>
        </div>
              
        
        }
    return (
        <div className='w-full'>

        <div className="relative">
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
        </div>
               <div className='text-center'>
           
              
            <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
           <img src="" alt="" />
          </div>
         <div >
         <div className="grid  sm:grid-cols-2 lg:grid-cols-4 mx-auto">
            {
           products.map(product => <Products key={product._id} product={product}></Products>)
             }
         </div>
       
         </div>
            </div>
            <div>
{

    products.map(p => <Modal key={p.p_id} p={p}></Modal>)
}
</div>

      </div>
     
    );
};

export default AllProducts;