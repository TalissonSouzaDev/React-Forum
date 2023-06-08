import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Teste() {

  useEffect(()=>{
    
    axios.get('http://localhost:8000/api/subforum').then((response)=>{
        console.log(response)
    })

  },[])
  return (
    <div>
        Teste
           <Link to="/home">home</Link>
    </div>
  )
}

export default Teste