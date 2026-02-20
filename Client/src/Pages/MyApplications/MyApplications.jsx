import React, { Suspense } from 'react';
import ApplicationsState from './ApplicationsState';
import ApplicationsList from './ApplicationsList';
import useAuth from '../../hooks/useAuth';
import { myApplicationPromise } from '../../api/applicationsApi';


const MyApplications = () => {
    
    const {user}=useAuth();
    return (
        <div>
            <h1>applications</h1>
            <ApplicationsState/>
           <Suspense fallback={'loading your applications'}>
             <ApplicationsList myApplicationPromise={myApplicationPromise(user.email)} />
           </Suspense>
        </div>
    );
};

export default MyApplications;