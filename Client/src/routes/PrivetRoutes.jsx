import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {
    const location = useLocation();
    console.log(location);
    
    const {user}=useContext(AuthContext);
    if(!user){
       return <Navigate to={'/signIn'} state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivetRoutes;