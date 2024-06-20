import loginImg from "../assets/login.jpg";
import logo from "../assets/logo.png";
import {  FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FaEye } from "react-icons/fa";


const Login = () => {
  const [togglePass, setTogglePass] = useState(false);
  const handleTogglePass = () => {
    setTogglePass(!togglePass);
  };
  return (
    <div className="min-h-screen flex  justify-center items-center bg-slate-950">
      <div className="">
        
        <div className="card   md:mx-20 rounded-none  lg:card-side bg-slate-900 text-white">
          
          <div className="md:card-body p-5 md:p-0 justify-center items-center mt-10  ">
            
            <div className="card bg-slate-900 shrink-0 w-full max-w-md  ">
            <img src={logo} className="w-3/4 mx-auto " alt="" />
            
              <form className="card-body space-y-3 mb-3 ">
                
                <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <FaRegUser className="inline "></FaRegUser>
                  <input
                    type="email"
                    placeholder="Email"
                    className=" "
                    required
                  />
                </div>
                <div className=" flex items-center justify-between space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <div className="space-x-2">
                  <RiLockPasswordLine className="inline "></RiLockPasswordLine>
                  <input
                     type={togglePass ? "text" : "password"}
                    placeholder="Password"
                    className=" "
                    required
                  />
                  </div>
                  <div>
                    {togglePass?<button onClick={handleTogglePass}><FaEyeSlash></FaEyeSlash></button>:<button onClick={handleTogglePass}><FaEye></FaEye></button>}
                  </div>
                </div>
                <p>Forgot Password ?</p>
                <div className=" mt-6 form-control space-y-3">
                <button type="submit" className="btn rounded-md transition ease-in-out  duration-300 font-semibold bg-gradient-to-r hover:scale-110  from-amber-400 text-white to-yellow-700">
                Sign In
              </button>
              <button className="btn transition ease-in-out hover:scale-110  duration-300 rounded-md bg-transparent hover:bg-transparent text-white"><FcGoogle className="text-2xl"></FcGoogle>Sign In with Google </button>
              <button className="btn transition ease-in-out hover:scale-110  duration-300 rounded-md bg-transparent hover:bg-transparent text-white"><SlSocialFacebook className="text-2xl"></SlSocialFacebook>Sign In with Facebook </button>
                </div>
              </form>
            <Link to={'/register'}> <p className="text-center mb-2 text-gray-600">No account?  <span className="text-white">Sign Up</span> </p></Link>
            </div>
            
          </div>
          <figure className="w-1/3">
            <img src={loginImg} alt="Album" className="hidden lg:block" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Login;
