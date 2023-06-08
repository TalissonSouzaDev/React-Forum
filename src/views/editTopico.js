import { Link, useParams } from "react-router-dom";
import CardBootstrap from "../components/CardBootstrap";
import { useEffect, useRef, useState } from "react";
import axiosapi from "../config/axiosapi";
import { toast } from "react-toastify";




function EditeTopico(){

    const titleRef =  useRef()
    const descriptionRef = useRef()
    const [sub,setsub] = useState({})
    const {id} = useParams()


    useEffect(()=>{
         axiosapi.get(`/topico/edit/${id}`).then((response)=>{
            setsub(response.data.topico)
            titleRef.current.value = response.data.topico.title
            descriptionRef.current.value = response.data.topico.description
            toast.success('topico editado com sucesso')
 
   })


    },[id])


    const HandleSubformUpdate = async (event)=>{
      event.preventDefault();
  
  
      event.preventDefault();
      const datapost = {
        title: titleRef.current.value,
        description:descriptionRef.current.value
      }
    
  
       await axiosapi.put(`/topico/update/${id}`,datapost).then((response)=>{
        window.location.replace(`/subforum`);
    
      })
  
    }

    return(
        <div>
        
    <CardBootstrap
    title="SubForum"
    ><br /><br /><br />
    <div className="card">
        <div className="card-header">Atualizar Topico: {sub.title}</div>
        <div className="card-body">
        <form onSubmit={HandleSubformUpdate}>
     
        <div className="form-group">
            <label htmlFor="content">Titulo:</label>
            <input  className='form-control'ref={titleRef}/>
           </div>

          <div className="form-group">
            <label htmlFor="content">Descrição:</label>
            <textarea name="" id="" cols="30" rows="10" className='form-control' ref={descriptionRef}></textarea>
           </div>

           <div className="form-inline">
             <button type="submit" className="btn btn-primary">Atualiza Publicação</button>
             <Link to="/subforum" className='btn btn-light'>Volta</Link>
            </div>
        </form>
        </div>
     </div>
    </CardBootstrap>

    </div>
    )
}

export default EditeTopico