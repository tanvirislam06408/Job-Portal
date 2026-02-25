import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsPost';

const MyPostedJobs = () => {
    const {user}=useAuth();
    return (
        <div>
            <Suspense><JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList></Suspense>
        </div>
    );
};

export default MyPostedJobs;