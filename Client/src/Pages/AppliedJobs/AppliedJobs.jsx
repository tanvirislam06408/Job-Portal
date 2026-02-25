import React from 'react';
import { useLoaderData } from 'react-router';

const AppliedJobs = () => {
    const jobs=useLoaderData();
    console.log(jobs.id);
    
    return (
        <div>
           
        </div>
    );
};

export default AppliedJobs;