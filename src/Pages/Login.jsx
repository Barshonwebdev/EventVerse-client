import loginImg from "../assets/login.jpg";
import logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { motion, spring } from "framer-motion"
const Login = () => {
  const [togglePass, setTogglePass] = useState(false);
  const {signInUser,user,googleSignIn,facebookSignIn}=useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleTogglePass = (e) => {
    e.preventDefault();
    setTogglePass(!togglePass);
  };
  const onSubmit = (data) => {
    signInUser(data.email,data.password);
    console.log(data);
  };

  

  const handleSignInwithGoogle=()=>{
    googleSignIn();
  }

  const handleSignInwithFacebook=()=>{
    facebookSignIn();
  }
  return (
    <div className="min-h-screen flex  justify-center items-center bg-slate-950">
      <div className="">
        <motion.div initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{delay:0.1}} className="card   md:mx-20 rounded-none  lg:card-side bg-slate-900 text-white">
          <div className="md:card-body p-5 md:p-0 my-2 justify-center items-center   ">
            <div className="card bg-slate-900 shrink-0 w-full max-w-md  ">
              <motion.img animate={{opacity:1}} initial={{opacity:0}} transition={{delay:0.2,ease:"easeIn"}} src={logo} className="w-3/4 mx-auto " alt="" />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body pb-2 space-y-3  "
              >
                <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <FaRegUser className="inline "></FaRegUser>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full "
                    {...register("email", { required: true })}
                  />
                </div>
                <div className=" flex items-center justify-between  input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <div className="space-x-2">
                    <RiLockPasswordLine className="inline "></RiLockPasswordLine>
                    <input
                      type={togglePass ? "text" : "password"}
                      placeholder="Password"
                      className=" "
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div>
                    {togglePass ? (
                      <button onClick={handleTogglePass}>
                        <FaEyeSlash></FaEyeSlash>
                      </button>
                    ) : (
                      <button onClick={handleTogglePass}>
                        <FaEye></FaEye>
                      </button>
                    )}
                  </div>
                </div>
                {errors.email? <small className="text-red-400">Email is required</small> :errors.password?<small className="text-red-400">Password is required</small>:<small></small>}

               <small>Forgot password ? </small>
                <div className=" mt-6 form-control space-y-3">
                  <button
                    type="submit"
                    className="btn rounded-md transition ease-in-out  duration-300 font-semibold bg-gradient-to-r hover:scale-110  from-amber-400 text-white to-yellow-700"
                  >
                    Sign In
                  </button>
                 
                </div>
              </form>
              <div className="card-body mb-4 py-0">
              <button onClick={handleSignInwithGoogle} className="btn transition ease-in-out hover:scale-110  duration-300 rounded-md bg-transparent hover:bg-transparent text-white">
                    <FcGoogle className="text-2xl"></FcGoogle>Sign In with
                    Google{" "}
                  </button>
                  <button onClick={handleSignInwithFacebook} className="btn transition ease-in-out hover:scale-110  duration-300 rounded-md bg-transparent hover:bg-transparent text-white">
                    <SlSocialFacebook className="text-2xl"></SlSocialFacebook>
                    Sign In with Facebook{" "}
                  </button>
              </div>
              <Link to={"/register"}>
                {" "}
                <p className="text-center mb-2 text-gray-600">
                  No account? <span className="text-white">Sign Up</span>{" "}
                </p>
              </Link>
            </div>
          </div>
          <figure className="w-1/3">
            <img src={loginImg} alt="Album" className="hidden lg:block" />
          </figure>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
