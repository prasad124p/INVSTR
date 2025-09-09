import { useState } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from '../pages/Home';
import InvestorHome from '../pages/InvestorHome';
import Login from '../pages/Login';
import Signup from "../pages/Signup"
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';

const getAllStartups=async()=>{
  let allStartups=[];
  await axios.get('http://localhost:5000/investors').then(res=>{
    allStartups=res.data;
  })
  return allStartups;
}

const router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/investorHome",element:<InvestorHome/>},
  {path:"/login",element:<Login/>},
  {path:"/signup",element:<Signup/>},
  {path:"/About",element:<About/>},
  {path:"/Services",element:<Services/>},
  {path:"/Portfolio",element:<Portfolio/>}
])

function App() {
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
