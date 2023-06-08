import React from "react";
import { Link } from "react-router-dom";
import './notfound.css'


function NotFoundPage(){
    return(

        <>
        <div className="notfound">
            <h1>404 - NotFoundPage :(</h1>
            <Link to="/">Ir para Home</Link>
        </div>
        
        </>
    )
}

export default NotFoundPage