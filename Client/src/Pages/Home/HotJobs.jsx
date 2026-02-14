import React, { use } from 'react';
import JobCard from '../Shared/JobCard/JobCard';

const HotJobs = ({jobsPromise}) => {
    
    return (
        <div>
            <h1 className='text-4xl text-center mt-10'>Recent Posted Jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center max-w-10/12 mx-auto gap-6 mt-11 mb-9'>
            {
                jobsPromise.map(job=> <JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
        </div>
    );
};

export default HotJobs;