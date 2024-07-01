import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading}=useAuth();
    const location=useLocation();
    if(loading){
        return <p className='min-h-screen'>loading...</p>
    }
    if(user){
        return children
    }

    
    return  <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    
    
};

export default PrivateRoute;