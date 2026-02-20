import React, { use } from 'react';
import { useLottie } from "lottie-react";
import registerAnimation from '../../assets/lottes/Sign up.json'
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import SignInGoogle from '../Shared/GoogleSignIn/SignInGoogle';

const SignIn = () => {
  const {loginUser}=use(AuthContext);
  const location = useLocation();
  
  const from = location.state || '/';
  
  
  const navigate = useNavigate();
  



      const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;

    // login user

    loginUser(email,password)
    .then(res=>{
      console.log(res.user);
      navigate(from)
      
    })
    .catch(err=>{
      console.log(err.message);
      
    })

      }


      const options = {
    animationData: registerAnimation,
    loop: true
  };


   const { View } = useLottie(options);

    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="max-w-[30%]">
         {
            View
         }
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">


      <div className="card-body">
       <form onSubmit={handleSignIn}>

         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Don't have account ? <Link to={'/register'}>Register</Link></a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </fieldset>
       </form>
       <SignInGoogle from={from} />
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;