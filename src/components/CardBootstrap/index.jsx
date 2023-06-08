import React from 'react'
import { Card } from 'bootstrap-4-react';

function CardBootstrap(props) {
  return (
    <div>
        <main className="main">
           <div >
             <Card>
                <Card.Header><h2>{props.title}</h2></Card.Header>
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

export default CardBootstrap