import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Component/PageNotFound/PageNotFound";
import Home from "../Layout/Home";

import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        
          
        ]
    },

        // {
        //     path:'/dashboard',
        //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        //     children:[
        //         {
        //             path:'/dashboard/allUser',
        //             element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
                  
        //         },
        
        //         {
        //             path:'/dashboard/addProducts',
        //             loader:()=> fetch(` https://sellArt-server-side-saima-sawrin.vercel.app/products`),
        //             element: <AddProduct></AddProduct>
        //         },
        //     ]
        //   },
  
    {
        
        path:'*',
        element: <PageNotFound></PageNotFound>
      
    }
   

])

export default router;