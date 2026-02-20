import React, { use } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const AddJob = () => {
    const {user}= useAuth();
    const handleAddJob=(e)=>{
        e.preventDefault();
        const form=e.target;
        const formData= new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const {maxSalary,minSalary,currency,...newJob}=data;
        newJob.salaryRange={
            maxSalary,minSalary,currency
        }
        newJob.status="active";
        console.log(newJob);

        // save job to the database

        axios 
        
        
        
    }

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            please add a job

            <form onSubmit={handleAddJob} className="w-full md:w-md">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-md border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input name='title' type="text" className="input w-full" placeholder="Job title" />

                    <label className="label">Company</label>
                    <input name='company' type="text" className="input w-full" placeholder="company name" />

                    <label className="label">Location</label>
                    <input name='location' type="text" className="input w-full" placeholder="Company Location" />
                    <label className="label">Company Logo</label>
                    <input name='logo' type="text" className="input w-full" placeholder="logo url" />
                    <label className="label">HR Contact</label>
                    <input defaultValue={user.email} name='hr_email' type="text" className="input w-full" placeholder="logo url" />
                </fieldset>

            {/*  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-md border py-4 ">
                <legend className="fieldset-legend">Select a jobType </legend>

                <form className="filter w-full md:w-auto">
                    <input className="btn btn-square" type="reset" value="×" />
                    <input className="btn" type="radio" value={'Remote'} name="jobType" aria-label="remote" />
                    <input className="btn" type="radio" value={'On Filed Job'} name="jobType" aria-label="on field job" />
                    <input className="btn" type="radio" value={'Hybrid'} name="jobType" aria-label="hybrid" />
                </form>
            </fieldset>
            {/*  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-md border py-4 ">
                <legend className="fieldset-legend">Select a jobType </legend>

                <select name='jobCategory' defaultValue="Job Category" className="select w-full">
                    <option disabled={true}>Job Category</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                </select>
            </fieldset>
            {/*  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-md border py-4 ">
 <legend className="fieldset-legend">Salary Range and Job type</legend>
               <div className='grid place-items-center gap-2 grid-cols-1 lg:grid-cols-3 w-full'>


               <div>
                 <label className="label">Min Salary</label>
                <input name='minSalary' type="text" className="input w-full" placeholder="Min Salary" />
               </div>

                <div>
                    <label className="label">Max Salary</label>
                <input name='maxSalary' type="text" className="input w-full" placeholder="Max Salary" />
                </div>
                <div className='w-full max-w-[250px]'>
                    <label className="label">Currency</label>
                    <select name='currency' defaultValue="Select a currency" className="select w-full">
                    <option disabled={true}>Select a currency</option>
                    <option>BDT</option>
                    <option>USD</option>
                    <option>URO</option>
                </select>
                </div>

               </div>
            </fieldset>
            {/*  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-md border py-4 ">
                <legend className="fieldset-legend">Application Deadline</legend>
                <input name='deadline' type="date" className="input w-full" />
                    
            </fieldset>
            {/*  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-md border py-4 ">
                <legend className="fieldset-legend">Job Description </legend>
               <textarea name='description' className="textarea" placeholder="description"></textarea>


            </fieldset>

            <input type="submit" value="Add Job" className='btn my-4 w-[400px] btn-primary' />
            </form>
        </div>
    );
};

export default AddJob;