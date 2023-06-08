import React, { useEffect,useState } from 'react'
import CardBootstrap from '../components/CardBootstrap'
import CardContent from '../components/CardContent'
import axiosapi from '../config/axiosapi';

function Forum() {

  const [subforum,setforum] = useState()

  useEffect(()=>{
    
    axiosapi.get('/subforum').then((response)=>{
      setforum(response.data.subforum)
     
    })

  },[])
  return (
    <div>
      <CardBootstrap title='Forum N'>

      {subforum?.map((dados)=>{
          return(
            <CardContent 
            key={dados.id}
            title={dados.title} 
            body={dados.description}
            id={dados.id}
            url='/topico'
            urldestroy={`/subforum/destroy/${dados.id}`}
            editname='edita Forum'
            urledit={`/subforum/edit/${dados.id}`}
            
            
            />
          )
        })}
    
       </CardBootstrap>
    
        
    </div>
  )
}

export default Forum
