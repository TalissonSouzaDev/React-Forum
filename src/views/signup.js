import React from 'react'
import Formulario from '../components/Formulario';
import { InputGroup ,Breadcrumb } from 'bootstrap-4-react';
import { useRef } from 'react';
import axiosapi from '../config/axiosapi';
import { useStateContext } from '../contexts/ContextProvider';
import { toast } from 'react-toastify';

function Signup() {

const niknameref = useRef();
const emailref = useRef();
const passwordref = useRef();
const passwordconfirmref = useRef();
const {setUser,setToken,token}  = useStateContext()

if(token){
  window.location.replace("/");
}

  const onsubmit = async (event)=>{
  
    event.preventDefault();
    const datapost = {
      nikname: niknameref.current.value,
      password:passwordref.current.value,
      email:emailref.current.value,
      profile:'client'
    }

    if(datapost.nikname == '' && datapost.password == '' && datapost.email == ''){
      console.log('campos obrigatorio')
      return;
    }


    await axiosapi.post('/register',datapost).then((response)=>{
      setToken(response.data.token)
      setUser(response.data.user)
      toast.success('conta criada com sucesso')
    })
   
  }


  return (
    <>
      <Formulario>

        <div className=''>
        
            <h1>Signup</h1><br />
        
        </div>
        <form onSubmit={onsubmit}>

      <InputGroup mb="2">
          <input type="text" ref={niknameref}  className='form-control' placeholder='Digite seu Nikname'/>
        </InputGroup>

        <InputGroup mb="2">
          <input type="text" ref={emailref}  className='form-control' placeholder='Digite seu email'/>
        </InputGroup>

        <InputGroup mb="2">
          <input type="password" ref={passwordref}  className='form-control' placeholder='digite a senha que deseja acima de 8 caracters' autoComplete='off'/>
        </InputGroup>

        <InputGroup mb="2">
          <input type="password" ref={passwordconfirmref}  className='form-control' placeholder='confirme sua senha' autoComplete='off'/>
        </InputGroup>


        <InputGroup mb="2">   
         <button type="submit" className='form-control btn btn-primary'>Register</button>
        </InputGroup><br />
</form>
        

        <Breadcrumb>
        
            <Breadcrumb.Item><a href="/login">Pagina de Login</a></Breadcrumb.Item>
           
          </Breadcrumb>
      
      </Formulario>
    </>
  )
}

export default Signup