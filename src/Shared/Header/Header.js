import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../Asset/logo1.png';

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  // const[role ,  setRole] = useState();
  // useEffect(()=>
  //   fetch('https://sellArt-server-side-saima-sawrin.vercel.app/products')
  //   .then(res => res.json())
  //   .then(data => setRole(data)),[])

  const handleLogOut = () => {
    LogOut()
          .then(() => { })
          .catch(err => console.log(err));
  }

  const menuItems = <React.Fragment className="font-serif">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/blog">Shop</Link></li>
 
      

      
      {user?.uid ?
          <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleLogOut}>Sign out</button></li>
          </>
          : <li><Link to="/login">Login</Link></li>}
         
  </React.Fragment>
    return (
<div className='nav'>
    <p className='bg-black text-white text-center text-xs py-2 '>
    <marquee className = "marquee" behavior="scroll" direction="left">
            Deal Done: Bilon moves from TV Producer to Junior Web Developer</marquee> </p>
<div className='sm:max-w-xl md:max-w-full lg:max-w-full justify-center rounded-md  '> 
  
  <div className="navbar flex justify-between text-black transparent  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">
    
        <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl text-red-600 w-28 h-16 ">
            <img src={logo}alt="" />
           </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 ">
                {menuItems}
            </ul>
        </div>
     
  
  <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-full text-black">
                    {menuItems}
                </ul>
                
            </div>
  
  
  
    </div>
  </div>
</div>

    );
};

export default Header;