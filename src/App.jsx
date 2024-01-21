import Navbar from "./Components/Navbar/Navbar"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./App.css"
import Home from "./pages/home/Home";
import LogoMakerPage from "./pages/LogoMaker/LogoMakerPage";
import {Link, useLocation } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import SingleProduct from "./pages/SingleProductPage/SingleProduct";


function App() {

  
  const Layout=()=>{
    return(
      <>

      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout />,
     children: [
       {
        path:"/",
        element:<Home/>
       },
       {
         path: "/gig/:id",
         element: <SingleProduct />,
       },
       {
         path: "/gigs/:category",
         element: <CategoriesPage />,
       },
       {
         path: "/logoMaker",
         element: <LogoMakerPage />,
       },
       {
        path: "/home",
        element:<Home/>
       },
      
       {
         path: "/Messages",
         element: <h1>Hello This is Messages Page! No Messages !</h1>,
       },
       {
         path: "/Orders",
         element: <h1>Hello This Orders Page</h1>,
       },
     ],
   },
 ]);

  return (
   

    <div>

      <RouterProvider router={router} />
    </div>
     
  
  );
}

export default App
