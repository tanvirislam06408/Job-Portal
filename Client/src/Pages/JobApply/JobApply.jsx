import React from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios'
import Swal from 'sweetalert2'

const JobApply = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { user } = useAuth();
    const handleApplyForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user.email;
        const linkedin = form.linkedin.value;
        const resume = form.resume.value;
        console.log(
            name, email, linkedin, resume
        );
        const applicationInfo = {
            email,
            linkedin,
            resume,
            jobId: params.id
        }
        axios.post('http://localhost:3000/applications', applicationInfo).then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Your Application is submitted",
                    icon: "success",
                    draggable: true
                });
                navigate('/jobsApplications')
                
            }

        })
            .catch(err => {
                console.log(err);

            })

    }

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className="text-2xl text-center mt-2 btn">
                <Link to={`/jobs/${params.id}`}>
                    About this Job
                </Link>
            </h1>
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mb-40 mt-24" onSubmit={handleApplyForm}>
                <legend className="fieldset-legend">Your Info</legend>

                <label className="label">Name</label>
                <input defaultValue={user.displayName} type="text" name='name' className="input" placeholder="name" />

                <label className="label" >Email</label>
                <input defaultValue={user.email} type="text" name='email' className="input" placeholder="email" />

                <label className="label">Job Title</label>
                <input type="text" className="input" placeholder="Job title" />
                <label className="label">Submit your linkedin Profile Link</label>
                <input type="url" name='linkedin' className="input" placeholder="linkedin profile link" />
                <label className="label">Submit your Resume Link</label>
                <input type="url" name='resume' className="input" placeholder="Resume Link" />
                <button className='btn btn-primary mt-3.5'>Submit</button>
            </form>
        </div>
    );
};

export default JobApply;