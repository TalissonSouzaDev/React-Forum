import React, { useRef } from 'react'
import CardBootstrap from '../components/CardBootstrap'
import { Link, useParams } from 'react-router-dom'
import axiosapi from '../config/axiosapi'
import { toast } from 'react-toastify'

function CreateTopico() {

  const {id} = useParams()

  const titleRef =  useRef()
  const descriptionRef = useRef()
  const HandleTopico = async (event)=>{
    event.preventDefault();


      event.preventDefault();
    const datapost = {
      title: titleRef.current.value,
      description:descriptionRef.current.value,
      forum_id: id
    }

     await axiosapi.post('/topico/store',datapost).then((response)=>{
     
      window.location.replace(`/topico/${id}`);
      toast.success('topico criado com sucesso')

      
    })

  }

  return (
    <div>
        
    <CardBootstrap
    title="SubForum Programador PHP"
    ><br /><br /><br />
    <div className="card">
        <div className="card-header">Criar Um Topico:</div>
        <div className="card-body">
        <form onSubmit={HandleTopico}>
     
        <div className="form-group">
            <label htmlFor="content">Titulo:</label>
            <input  ref={titleRef} type='text' className='form-control'/>
           </div>

          <div className="form-group">
            <label htmlFor="content">Descrição:</label>
            <textarea ref={descriptionRef} cols="30" rows="10"  className='form-control'></textarea>
           </div>

           <div className="form-inline">
             <button type="submit" className="btn btn-primary">Publica</button>
             <Link to={`/topico/${id}`} className='btn btn-light'>Volta</Link>
            </div>
        </form>
        </div>
     </div>
    </CardBootstrap>

    </div>
  )
}

export default CreateTopico