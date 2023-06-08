import React, { useEffect, useRef, useState } from 'react'
import CardComentario from '../components/CardComentario'
import PostComentario from '../components/CardComentario/PostComentario'
import { useStateContext } from '../contexts/ContextProvider';
import { Link, useParams } from 'react-router-dom';
import axiosapi from '../config/axiosapi';
import { toast } from 'react-toastify';



function Comentario() {

  const {token} = useStateContext();
  const { id } = useParams();
  const [comentario,setcomentario] = useState([]);
  const [topico,settopico] = useState({});
  const contentRef = useRef()

  useEffect(()=>{


    async function comentario() {
     await axiosapi.get(`/comentario/${id}`).then((response)=>{
    
       settopico(response.data.topico)
       setcomentario(response.data.comentario)
       toast.success('Comentario adiconado com sucesso')
     
     
     })
      }
      comentario()
 
   },[id])


   const HandleComentario = async (event)=>{

    event.preventDefault();
    const datapost = {
      content: contentRef.current.value,
      topico_id: id

    }  

     await axiosapi.post('/comentario/store',datapost).then((response)=>{

            contentRef.current.value = ''

      
    })

   }
  return (
    <div className='card-comentario'>
        <CardComentario
         title={topico.title}
         body={topico.description}
         nikname={topico.user_to} 
         data={topico.created_at}
         id={topico.id}>

        {comentario?.map((dados)=>{
          return(
            <PostComentario
            key={dados.id}
            nikname={dados.user_to}
            data={dados.data}
            content={dados.content}
            id={dados.id}
            userto={dados.user_to}
            /> 
          )
        })}

                  
          <br /><br /><br />

          {token ? (
            
          <form onSubmit={HandleComentario}>

          <div className="form-group">
            <label htmlFor="content">Deixe seu Comentario:</label>
          <textarea ref={contentRef} cols="30" rows="10" className='form-control'></textarea>
          </div>

          <div className="form-group">
           <button className="btn btn-primary">Publica</button>
          </div>
        </form>
          ):
          (
            <>
            <h3>Que deixa seu comentario <Link to="/login">Clique aqui</Link></h3>
            </>
          )}


        </CardComentario>
    </div>
  )
}

export default Comentario