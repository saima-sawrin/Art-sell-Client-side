import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { IconContext } from 'react-icons';


function App() {
  return (
    <div className=" mx-auto font-serif ">
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
   
    </div>
  );
}

export default App;
