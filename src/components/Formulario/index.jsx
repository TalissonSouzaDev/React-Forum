import React from 'react'
import './form.css'
function Formulario(props) {
  return (
    <div className='card-authheader'>
        
        <div className='card-auth'>
            {props.children}
        </div>
    </div>
  )
}

export default Formulario