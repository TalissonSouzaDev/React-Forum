import React from 'react'
import './home.css'
import 'animate.css';

function HomeBody() {
  return (
    <div className='homebody'>
     
     <h1 className='animate__animated animate__backInLeft'>Forum de Programação</h1>

     <div className='title-home animate__animated animate__backInLeft' >
      <p>
      O forum tem o objetivo de  programação desempenham um papel vital na comunidade de desenvolvedores de software, proporcionando um espaço online para aprender, trocar ideias e resolver desafios técnicos. Essas plataformas permitem que programadores novatos e experientes se conectem, compartilhem suas experiências e aprimorem suas habilidades. exploraremos a importância dos forum de programação e como eles podem beneficiar tanto os programadores iniciantes quanto os mais experientes. <br />
      <br />
      O forum de programação são uma parte essencial da vida dos programadores, pois oferecem um ambiente interativo e colaborativo para aprender, compartilhar conhecimentos e resolver problemas. Através dessas plataformas, os desenvolvedores podem se conectar com uma comunidade vibrante e acessar uma ampla gama de recursos e experiências. Portanto, é altamente recomendado que programadores, independentemente de seu nível de habilidade, explorem e participem ativamente desses fóruns para se beneficiarem ao máximo da comunidade de programação online.
      </p>
     </div>

     <a href="/subforum" className=' animate__animated  animate__backInUp btn btn-light'>Venha conhece nosso Forum</a>

    </div>
  )
}

export default HomeBody