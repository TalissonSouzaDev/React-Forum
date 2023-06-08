import React, { useRef } from 'react'
import CardBootstrap from '../components/CardBootstrap'
import { Link } from 'react-router-dom'
import axiosapi from '../config/axiosapi';
import { toast } from 'react-toastify';

function CreateSubForum() {

  const titleRef =  useRef()
  const descriptionRef = useRef()
  const HandleSubform = async (event)=>{
    event.preventDefault();


    event.preventDefault();
    const datapost = {
        title: titleRef.current.value,
        description:descriptionRef.current.value
       }  

     await axiosapi.post('/subforum/store',datapost).then((response)=>{

        
        window.location.replace("/subforum");
        toast.success('subforum criado com sucesso')
      

      
    })

  }

  return (
    <div>
        
    <CardBootstrap
    title="SubForum"
    ><br /><br /><br />
    <div className="card">
        <div className="card-header">Criar SubForum:</div>
        <div className="card-body">
        <form onSubmit={HandleSubform}>
     
        <div className="form-group">
            <label htmlFor="content">Titulo:</label>
            <input  className='form-control'ref={titleRef}/>
           </div>

          <div className="form-group">
            <label htmlFor="content">Descrição:</label>
            <textarea name="" id="" cols="30" rows="10" className='form-control' ref={descriptionRef}></textarea>
           </div>

           <div className="form-inline">
             <button type="submit" className="btn btn-primary">Publica</button>
             <Link to="/subforum" className='btn btn-light'>Volta</Link>
            </div>
        </form>
        </div>
     </div>
    </CardBootstrap>

    </div>
  )
}

export default CreateSubForum