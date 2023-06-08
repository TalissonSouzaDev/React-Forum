import React from 'react'
import './cardcomentario.css'
import { useStateContext } from '../../contexts/ContextProvider';
import axiosapi from '../../config/axiosapi';
import moment from 'moment/moment';


function PostComentario({nikname,data,content,userto,id}) {

  const {user} = useStateContext();
  


  const HandleDestroyComentario = async (event)=>{
    event.preventDefault()

  await axiosapi.delete(`/comentario/destroy/${id}`).then((response)=>{
    console.log('ok')
   
  })

  }

  return (
    <div>
    <div className="card-comentario">
       
       <h3 className="title-comentario">
        <span>NikName: {nikname}</span>
        <span>Publicado: {moment(data).format("DD/MM/Y")}</span>
       </h3>
      
       
       <div className="body">
           <span>{content}</span>
          {user.profile == 'admin'&&(
             <button type="submit" onClick={HandleDestroyComentario} className='btn btn-danger'>Excluir post</button>
          )}

           {user.profile === 'client' && userto == user.nikname &&(
             <button type="submit" onClick={HandleDestroyComentario} className='btn btn-danger'>Excluir Meu Post</button>
          )}
       </div>
    </div>

    

  </div>
  )
}

export default PostComentario