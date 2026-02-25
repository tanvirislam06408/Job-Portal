import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({jobsCreatedByPromise}) => {
    const jobs=use(jobsCreatedByPromise);
    return (
        <div>
            <h2 className="text-2xl">{jobs.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Name</th>
        <th>Deadline</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs.map((job,index)=><tr key={job._id}>
        <th>{index+1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td>{job._id}</td>
        <Link to={`/applied-job-post/${job._id}`}><td>Job Details</td></Link>
      </tr>)
      }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default JobList;