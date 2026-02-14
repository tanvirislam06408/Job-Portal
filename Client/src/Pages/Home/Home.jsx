import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import { useLoaderData } from 'react-router';

const Home = () => {
    const jobsPromise = useLoaderData();
    // const jobsPromise = fetch('http://localhost:3000/jobs').then(res=>res.json());
    return (
        <div>
            <Banner></Banner>
           <Suspense fallback={"loading hot jobs"}>
             <HotJobs jobsPromise={jobsPromise}></HotJobs>
           </Suspense>
        </div>
    );
};

export default Home;