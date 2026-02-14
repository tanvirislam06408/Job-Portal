import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router';

const JobCard = ({job}) => {
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
} = job;

    return (
        <div className="card bg-base-100 shadow-sm h-full">
  <div className='flex gap-5 items-center'>
    <figure>
    <img
      src={company_logo} />
  </figure>
  <div>
      <h1 className='text-4xl'>{title}</h1>
      <p className='flex gap-3 items-center'><CiLocationOn />{location}</p>
  </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end mt-auto">
        <div className='flex gap-3 items-center flex-wrap'>
            <h3>Requirements : </h3>
            {
            requirements.map((re,index)=><p key={index} className='border p-2 w-max rounded-2xl'>{re}</p>)
        }
        </div>
      <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;