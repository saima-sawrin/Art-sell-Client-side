import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCross, FaRemoveFormat} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import del from '../../../../Asset/delete.png';

const Order = ({order, handleDelete }) => {
    const{_id,ProductName , resalePrice , location , phone , email ,photo
    } = order;
    

    return (
        <div>
            <Link href="#" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

<img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={photo}alt="" />
<div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ProductName}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:{resalePrice
}</p>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone Number:{phone
}</p>    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email:{email
}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:{location}</p>

</div>
<div className=" bg-red-500 text-white"> <button onClick={() => handleDelete(_id)}><img src={del} alt="" /></button> </div>
</Link>
        </div>
    );
};

export default Order;