import { useState } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from '../pages/Home';
import InvestorHome from '../pages/InvestorHome';
import Login from '../pages/Login';

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
  {path:"/login",element:<Login/>}
])

function App() {
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
