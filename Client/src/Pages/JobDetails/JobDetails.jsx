import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const jobDetail=useLoaderData();
        const {
  _id,
  title,
  location,
  jobType,
  category,
  applicationDeadline,
  description,
  company,
  company_logo,
  requirements,
  responsibilities,
  salaryRange: { min, max, currency }
} = jobDetail;
    
    return (
        <div className='max-w-10/12 mx-auto min-h-screen flex lg:justify-between justify-center items-center flex-col lg:flex-row'>
            <div >
                <img className='md:w-3xs flex-1' src={company_logo} alt="" />
            </div>
            <div className='space-y-3'>
                <h1 className='text-3xl font-bold text-gray-500'>{title}</h1>
                <p className='text-gray-400'>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    <h1 className="text-2xl">Requirements:</h1>
                    {
                    requirements.map(re=><p className='border border-gray-500 p-1 rounded-xl'>{re}</p>)
                }
                </div>
                   <Link to={`/jobApply/${_id}`}> <button className='btn btn-secondary'>Apply Now</button></Link>
            </div>
        </div>
    );
};

export default JobDetails;