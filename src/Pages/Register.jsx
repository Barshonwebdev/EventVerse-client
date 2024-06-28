import registerImg from "../assets/register.jpg";
import logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import useAuth from "../Hooks/useAuth";
import { motion } from "framer-motion"
const Register = () => {
  const [togglePass, setTogglePass] = useState(false);
  const {createUser}=useAuth();
  const handleTogglePass = () => {
    setTogglePass(!togglePass);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if(data.password!==data.confirmPassword){
      toast.error('Password did not match');
    }
    else{
    createUser(data.email,data.password);
     }
    
  };
  return (
    <div className="min-h-screen flex  justify-center items-center bg-slate-950">
      <div className="">
        <motion.div initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}} transition={{delay:0.1}} className="card   md:mx-20 rounded-none lg:card-side bg-slate-900 text-white">
          <figure className="w-1/3">
            <img src={registerImg} alt="Album" className="hidden lg:block" />
          </figure>
          <div className="md:card-body p-5 my-2 md:p-0 justify-center items-center   ">
            <div className="card bg-slate-900 shrink-0 w-full max-w-md  ">
            <motion.img animate={{opacity:1}} initial={{opacity:0}} transition={{delay:0.1,ease:"easeIn"}} src={logo} className="w-3/4  mx-auto " alt="" />
              <h1 className="text-center text-2xl text-gray-400 my-2">
                Create an account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-3  ">
                <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <FaRegUser className="inline "></FaRegUser>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full "
                    {...register('username',{required:true})}
                  />
                </div>
                <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <FaRegUser className="inline "></FaRegUser>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full "
                    {...register('email',{required:true})}

                  />
                </div>
                <div className=" flex items-center justify-between  input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <div className="space-x-2">
                    <RiLockPasswordLine className="inline "></RiLockPasswordLine>
                    <input
                      type={togglePass ? "text" : "password"}
                      placeholder="Password"
                      className=" "
                      {...register('password',{required:true})}

                    />
                  </div>
                  <div>
                  {togglePass?<button onClick={handleTogglePass}><FaEyeSlash></FaEyeSlash></button>:<button onClick={handleTogglePass}><FaEye></FaEye></button>}
                  </div>
                </div>
                <div className=" flex items-center justify-between  input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <div className="space-x-2">
                    <RiLockPasswordLine className="inline "></RiLockPasswordLine>
                    <input
                      type={togglePass ? "text" : "password"}
                      placeholder="Confirm Password"
                      className=" "
                      {...register('confirmPassword',{required:true})}

                    />
                  </div>
                  <div>
                  {togglePass?<button onClick={handleTogglePass}><FaEyeSlash></FaEyeSlash></button>:<button onClick={handleTogglePass}><FaEye></FaEye></button>}
                  </div>
                </div>
                {errors.username? <small className="text-red-400">Username is required</small> :errors.email?<small className="text-red-400">Email is required</small>:errors.password?<small className="text-red-400">Password is required</small>:errors.confirmPassword?<small className="text-red-400">Please confirm your password</small>: <small></small>}

                <div className=" mt-6 form-control space-y-3">
                  <button
                    type="submit"
                    className="btn rounded-md transition ease-in-out  duration-300 font-semibold bg-gradient-to-r hover:scale-110  from-amber-400 text-white to-yellow-700"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <Link to={"/login"}>
                {" "}
                <p className="text-center  text-gray-600">
                  Already have an account?{" "}
                  <span className="text-white">Sign in</span>{" "}
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <Toaster richColors position="top-center"></Toaster>
    </div>
  );
};

export default Register;
