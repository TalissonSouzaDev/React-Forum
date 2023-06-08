
import { createContext, useContext, useEffect, useState } from "react";



const StateContext = createContext({
    user:null,
    token: null,
    setUser:()=>{},
    setToken:()=>{},

})

export const ContextProvider = ({children})=>{

    const [user,_setuser] = useState({
        nikname:'',
        email:'',
        profile:''
    });


    const [token,_setToken] = useState(localStorage.getItem('Acess_token'));

    useEffect(()=>{
        const authuser = localStorage.getItem('user')
        if(authuser){
            const userauth = JSON.parse(authuser) ? JSON.parse(authuser) : ''
            _setuser(userauth)

        }
    

    
    },[])


    const setToken = (token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('Acess_token',token);
        }
        else{
            localStorage.removeItem('Acess_token');
        }

    }

    const setUser = (user) =>{
        _setuser(user)
        if(user){
            localStorage.setItem('user',JSON.stringify(user))
        }
        else{
            localStorage.removeItem('user')
        }
    }

    
    return (
        <StateContext.Provider value={{
           setUser,
           setToken,
           user,
           token


        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)