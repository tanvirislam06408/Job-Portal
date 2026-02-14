import React, { useContext } from 'react';
import { useLottie } from "lottie-react";
import registerAnimation from '../../assets/lottes/register.json'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Link } from 'react-router';
import SignInGoogle from '../Shared/GoogleSignIn/SignInGoogle';

const Register = () => {

  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;

    // create user

    createUser(email, password)
      .then(result => {
        console.log(result?.user);

      })
      .catch(err => {
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
            <form onSubmit={handleRegister}>

              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Already Hav account ? <Link to={'/signIn'}>Login</Link></a></div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <SignInGoogle/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;