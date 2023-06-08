import React from 'react'
import { Card } from 'bootstrap-4-react';
import './cardcomentario.css'
import moment from 'moment/moment';


function CardComentario(props) {
  return (
    <div>
    <main className="main">
       <div>
         <Card>
            <Card.Header>
            <div className='niknamedate'>
                    <span>NikName: {props.nikname}</span>
                    <span>Publicado: {moment(props.data).format("DD/MM/Y")}</span>
            </div>


                <div className='comentario'>
                    <h2>{props.title}</h2>

                    <span>{props.body}</span>
                </div>
            </Card.Header>
            <Card.Body>
              <Card.Subtitle mb="2" text="muted">
               {props.children}
             
              </Card.Subtitle>
            </Card.Body>
          
          </Card>

</div>
</main>
</div>
  )
}

export default CardComentario