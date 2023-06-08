import React from 'react'
import {FaNeos, FaPlus} from "react-icons/fa"
import './header.css'
import { useStateContext } from '../../contexts/ContextProvider'
import axiosapi from '../../config/axiosapi'
import { Link } from 'react-router-dom'

export default function Header() {
  
  const {token,user}  = useStateContext()


  const logout = async (event)=>{
    event.preventDefault()
  await axiosapi.post('/logout').then((response)=>{
    localStorage.clear()
    window.location.replace("/");
  }).catch((error)=>{
    console.log(error)
  })
  }

  return (
    <div>
      <header className="navbar">
      <div className="element-logo">
      <FaNeos size={50} color="white"/>
        <h3><i>Forum</i></h3>
      
      </div>


      <ul className="element-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/subforum">Forum</Link></li>

          {user.profile == 'admin' &&(
                <li><Link to="/subforum/create">SubForum <FaPlus/></Link></li>
          )}

      


       {token ? (
        <>
        
         <li><Link to="#">{user.nikname}</Link></li>
        <li><button  onClick={logout}>sair</button></li>
        </>
       ) : (
        <>
        <li><Link to="/login">Login</Link></li>
        </>
       )}
        

      </ul>
      </header>

  

    </div>
  )
}
