// import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { public_api } from '../../Services/http.service';
// import Navbar from "./Navbar";
const Login = () => {
  // console.log(client)
  const navigate = useNavigate();
  // const handleUserSignIn = (event) => {
  //   event.preventDefault();
  //   const user = {
  //     Mobile_No: event.target.Mobile_No.value,
  //     pass_word: event.target.pass_word.value,
  //   };
  //   public_api('auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.access_token) {
  //         console.log(data);
  //         //creating access_token and userinfo json as string because localStorage.setItem takes string key:value pair

  //         // const userinfo = data.userInfo;

  //         // for reading the data later on front end as bellow
  //         // JSON.parse(localStorage['User_Information']).access_token
  //         // JSON.parse(localStorage['User_Information']).userIfo.User_ID
  //         // let accessToken = data.access_token;

  //         navigate('/status');

  //         toast.success('Sign In Successfully');
  //       } else {
  //         alert('Your phone number or password is incorrect');
  //       }

  //       localStorage.setItem('userinfo', JSON.stringify(data.userInfo));
  //       localStorage.setItem('token', JSON.stringify(data.access_token));
  //     });
  // };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    console.log('hit');
    public_api
      .post('auth/login', {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="my-8">
      {/* Login form start */}
      <form
        onSubmit={handleUserSignIn}
        className="flex flex-col justify-center items-center"
      >
        {/* Email field start */}
        {/* <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="input input-bordered w-full max-w-xs"
          />
        </div> */}
        {/* Email field end */}
        {/* Phone field start */}
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            // onChange={(e) => setMobile_No(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter Your Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Phone field end */}
        {/* Password field start */}
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            // onChange={(e) => setPass_word(e.target.value)}
            name="password"
            type="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Password field end */}
        {/* Reset password start */}
        <div className=" flex justify-between w-full max-w-xs">
          {/* <div className="">
            <input type="checkbox" name="" id="" />
            <span className="pl-2">Remember</span>
          </div> */}
          <p className="">
            <button className="link">
              <Link to="">Forgot Password?</Link>
            </button>
          </p>
        </div>
        {/* Reset password end */}
        {/* Login button start */}
        <button className="btn w-full max-w-xs mt-4">
          <input type="submit" value="Login" />
        </button>
        {/* Login button end */}
        {/* Error message start */}
        {/* Error message end */}
        {/* SignUp forward link start */}
        <p className="mt-2">
          New to Karnafuli Tunnel?
          <Link to="/signup" className="text-[#0B5ED7] pl-2">
            Create an account
          </Link>
        </p>
        {/* SignUp forward link end */}
      </form>
      {/* Login form end */}
    </div>
  );
};
export default Login;
