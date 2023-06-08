import React from "react";
import './cardcontent.css'
import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosapi from "../../config/axiosapi";
import { toast } from "react-toastify";

const CardContent = ({title,body,icon,qnt,id,url,userto,date,urldestroy,urledit,editname})=> {

   const {user} = useStateContext()

 const HandleDeleteAdminPost = async (event)=>{
   event.preventDefault()
   await axiosapi.delete(urldestroy).then((response)=>{
      toast.success('removido com sucesso')
     
    })
   
 }
    return (
       <div>
         <div className="card-principal">
            <div className="element-header">
            <h3 className="title-card">{title}</h3>
            {user.profile == 'admin'&&(
             <div className="adminbutton">
                <button type="submit" onClick={HandleDeleteAdminPost} className="btn btn-danger">Excluir</button>
                <Link to={urledit} className="btn btn-warning">{editname}</Link>
             </div>
            )}

              {user.nikname == userto && user.profile == 'cliente' &&(
                <button type="submit" className="btn btn-warning">Edita Minha publição</button>
            )}
            </div>


            <div className="body">
                <span>{body} <Link to={`${url}/${id}`}>Visualizar</Link></span>
            <div className="qnt">
                <span> {userto ? `Criado Por: ${userto}` : ''}</span>
                  {icon}
                
            </div>
                
            </div>
         </div>

    
       </div>
    )

}

export default CardContent