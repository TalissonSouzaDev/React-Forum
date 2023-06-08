import React, { useEffect, useState } from 'react'
import {FaComments} from "react-icons/fa";
import CardBootstrap from '../components/CardBootstrap';
import CardContent from '../components/CardContent';
import {FaPlus} from "react-icons/fa"
import { Link, useParams } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosapi from '../config/axiosapi';

function Topico() {

  const {token} = useStateContext();
  const { id } = useParams();
  const [topico,setTopico] = useState([]);
  const [Subforum,setSubforum] = useState({});

  useEffect(()=>{


   async function topico() {
    axiosapi.get(`/topico/${id}`).then((response)=>{
      setTopico(response.data.topico)
      setSubforum(response.data.subforum)
     
    })
     }
     topico()

  },[id])

  return (
    <div>
       <CardBootstrap title={Subforum.title} id={Subforum.id}>
        {token && (
           <Link to={`/topico/create/${Subforum.id}`} className="btn btn-light"> Criar Topico  <FaPlus/></Link>
        )}
      
        <br/>
        <br/>

        {topico?.map((dados)=>{
          return(
            <CardContent 
            key={dados.id}
            title={dados.title} 
            body={dados.description}
            id={dados.id}
            url='/comentario'
            qnt={topico.length}
            icon={<FaComments/>}
            userto={dados.user_to}
            urldestroy={`/topico/destroy/${dados.id}`}
            editname='edita Topico'
            urledit={`/topico/edit/${dados.id}`}
           
            />
          )
        })}
   
       </CardBootstrap>
    </div>
  )
}

export default Topico