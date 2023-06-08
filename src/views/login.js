import React,{useRef} from 'react'
import Formulario from '../components/Formulario';
import { InputGroup ,Breadcrumb } from 'bootstrap-4-react';
import axiosapi from '../config/axiosapi';
import { useStateContext } from '../contexts/ContextProvider';
import { toast } from 'react-toastify';


function Login() {


const {setUser,setToken,token}  = useStateContext()

if(token){
  window.location.replace("/");
}


const niknameref = useRef();
const passwordref = useRef();



  const onsubmit = async (event)=>{
  
    event.preventDefault();
    const datapost = {
      nikname: niknameref.current.value,
      password:passwordref.current.value
    }

    if(datapost.nikname == '' && datapost.password == '' ){
      console.log('Campos login e senha obrigatorio')
      return;
    }

     await axiosapi.post('/login',datapost).then((response)=>{

      setToken(response.data.token)
      setUser(response.data.user)
      toast.success('logado com sucesso')

      
    })
   
  }







  return (

    <>
      <Formulario>

       
        
            <h1>Login</h1><br />
        
      
     <form action="" onSubmit={onsubmit}>
     <InputGroup mb="2">
         <input type="text" ref={niknameref} placeholder="Digite seu Nikname" className='form-control'/>
        </InputGroup>

        <InputGroup mb="2">
          
         <input type="password" name="" ref={passwordref} placeholder="digite sua senha"  className="form-control" autoComplete='off'/>
        </InputGroup>


        <InputGroup mb="2">   
         <button type="submit" className='form-control btn btn-primary'>Entrar</button>
        </InputGroup><br />
        
     </form>

        <Breadcrumb>
        <Breadcrumb.Item >Ainda Não Possui conta? </Breadcrumb.Item>
            <Breadcrumb.Item><a href="/signup">Register</a></Breadcrumb.Item>
           
          </Breadcrumb>
      
      </Formulario>
    </>
  )
}

export default Login