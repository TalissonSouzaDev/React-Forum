

import {createBrowserRouter} from 'react-router-dom';
import GuestLayout from './components/GuestLayout';
import Login from './views/login';
import Signup from './views/signup';
import Forum from './views/forum';
import CreateSubForum from './views/createSubForum';
import Topico from './views/topico';
import CreateTopico from './views/createTopico';
import Comentario from './views/comentario';
import NotFound from './views/notfound';
import Home from './views/home';
import Teste from './views/teste';
import EditeSubForum from './views/editSubForum';
import EditeTopico from './views/editTopico';


const route = createBrowserRouter([



    
    {
        path:'/',
        element:<GuestLayout/>,
        children:[

            {
        
                path:'/teste',
                element:<Teste></Teste>
            },
            {
        
                path:'/login',
                element:<Login></Login>
            },
            
            {
                
                path:'/signup',
                element:<Signup></Signup>
            },
    
            {
        
                path:'/',
                element:<Home></Home>
            },
            {
                
                path:'/SubForum',
                element:<Forum></Forum>
            },
            {
                
                path:'/subforum/create',
                element:<CreateSubForum></CreateSubForum>
            },
            {
                
                path:'/subforum/edit/:id',
                element:<EditeSubForum></EditeSubForum>
            },
            {
                
                path:'/topico/:id',
                element:<Topico></Topico>
            },
            {
                
                path:'/topico/create/:id',
                element:<CreateTopico></CreateTopico>
    
            },

            {
                
                path:'/topico/edit/:id',
                element:<EditeTopico></EditeTopico>
    
            },
    
            {
                
                path:'/comentario/:id',
                element:<Comentario></Comentario>
            },
            
        ]
    },
    {
        
        path:'*',
        element:<NotFound></NotFound>
    },

    
    
    ])
    
    export default route