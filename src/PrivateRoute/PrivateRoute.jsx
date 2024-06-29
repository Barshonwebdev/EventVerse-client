import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading}=useAuth();
    
    if(loading){
        return <p>loading...</p>
    }
    if(user){
        return children
    }

    
    return  <Navigate to={'/login'}></Navigate>
    
    
};

export default PrivateRoute;