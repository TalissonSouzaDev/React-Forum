import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header/index'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function GuestLayout() {
  return (
    <div>
        <Header/>
        <ToastContainer/>
        <Outlet/>
    </div>
  )
}

export default GuestLayout