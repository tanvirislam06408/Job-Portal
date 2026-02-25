import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivetRoutes from "../routes/PrivetRoutes";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {index:true,Component: Home,loader:()=>fetch('http://localhost:3000/jobs').then(res=>res.json())},
        {
          path:'register',
          Component: Register
        },
        {
          path:'signIn',
          Component: SignIn
        },
        {
          path:'jobs/:id',
          Component: JobDetails,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element:<PrivetRoutes><JobApply></JobApply></PrivetRoutes>,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:'addJob',
          element:<PrivetRoutes><AddJob></AddJob></PrivetRoutes>
        },
        {
          path: 'jobsApplications',
          element:<PrivetRoutes><MyApplications/></PrivetRoutes>
        },
        {
          path:'my-posted-jobs',
          element:<PrivetRoutes><MyPostedJobs/></PrivetRoutes>
        },
        {
          path:'applied-job-post/:id',
          element:<PrivetRoutes><AppliedJobs></AppliedJobs></PrivetRoutes>,
          loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.id}`)
        }
    ]
  },
]);

export default router;