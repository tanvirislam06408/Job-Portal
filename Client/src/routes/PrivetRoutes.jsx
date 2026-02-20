import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    console.log(location);
    if(!user){
       return <Navigate to={'/signIn'} state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivetRoutes;