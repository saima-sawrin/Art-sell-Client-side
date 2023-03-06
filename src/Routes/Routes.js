import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Component/PageNotFound/PageNotFound";
import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Layout/Home";

import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AllCategories from "../Pages/Categories/AllCategories";
import AllProducts from "../Pages/Categories/AllProducts/AllProducts";
import Categories from "../Pages/Categories/Categories";
import MyOrders from "../Pages/Dashboard/Buyers/MyOrders/MyOrders";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import Login from "../Pages/Login/Login";
import SignUp from '../Pages/SignUp/SignUp';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import AllBuyer from "../Pages/Dashboard/AllBuyer/AllBuyer";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/shop',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        
          
        ]
    },

        {
            path:'/dashboard',
            element: <DashboardLayout></DashboardLayout>,
            children:[
                {
                    path:'/dashboard/allUser',
                    element: <AllUsers></AllUsers>
                  
                },
                {
                    path:'/dashboard/allSeller',
                    element: <AllSeller></AllSeller>
                  
                },
                {
                    path:'/dashboard/allBuyer',
                    element: <AllBuyer></AllBuyer>
                  
                },
                {
                    path:'/dashboard/orders',
                    element: <MyOrders></MyOrders>
                },
        
                {
                    path:'/dashboard/addProducts',
                    loader:()=> fetch(`https://art-selling-server-side.vercel.app/products`),
                    element: <AddProduct></AddProduct>
                },
            ]
          },
  
    {
        
        path:'*',
        element: <PageNotFound></PageNotFound>
      
    }
   

])

export default router;