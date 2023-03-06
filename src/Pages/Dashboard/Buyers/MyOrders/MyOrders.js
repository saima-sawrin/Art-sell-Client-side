import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import Order from './Order';

const MyOrders = () => {
    const{loading} = useContext(AuthContext)
  
    const[products , setProducts] = useState([]);
    const[orders, setOrders] = useState([])
        // console.log(categories)

    useEffect(()=>{
        fetch('https://art-selling-server-side.vercel.app/booking')
        .then(res => res.json())
        .then(data => setOrders(data))
    },
        [])
        if(loading){
            return  <div className="text-center">
            <progress className="progress w-56"></progress>
        </div>
              
        
        }
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you want to cancel this order')
        if (proceed) {
            fetch(`https://art-selling-server-side.vercel.app/booking/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully')
                        const remaining = products.filter(p => p._id !== id)
                        setProducts(remaining);
                      
                    }
                })
        }
       
} 
    return (
<div>
<div>
            
            {
                orders.map(order => <Order key={order._id} order={order}  handleDelete={ handleDelete}></Order>)
}
            
                    </div>
</div>
    );
};

export default MyOrders;