import React from 'react';
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { IoIosMail } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Toaster, toast } from 'sonner';

const PassReset = () => {
    const {passReset}=useAuth();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit=(data)=>{
        const email=data.email;
        passReset(email)
        .then((res)=>{
            console.log(res);
            reset();
            toast.success('Password reset email sent ! check inbox');
        })
    }
    return (
        <div className="min-h-screen flex  justify-center items-center bg-slate-950">
        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="card mx-3 rounded-xl p-5  md:mx-20   lg:card-side bg-slate-900 text-white"
          >
            <div className="md:card-body p-5 md:p-0 my-2 justify-center items-center   ">
              <div className="card bg-slate-900 shrink-0 w-full max-w-md  ">
                <motion.img
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.2, ease: "easeIn" }}
                  src={logo}
                  className="w-3/4 mx-auto "
                  alt=""
                />
                <h1 className='text-center text-xs md:text-base mt-5'>Please Provide your email for password reset</h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body pb-2   "
                >
                  <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                    <IoIosMail className="inline "></IoIosMail>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full "
                      {...register("email", { required: true })}
                    />
                  </div>
                
                  {errors.email ? (
                    <small className="text-red-400">Email is required</small>
                  ) 
                   : (
                    <small className='invisible'> empty</small>
                  )}
  
                 
                 
                  <div className=" mt-6 form-control ">
                    <button
                      type="submit"
                      className="btn rounded-md transition ease-in-out  duration-300 font-semibold bg-gradient-to-r hover:scale-110  from-amber-400 text-white to-yellow-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              
                    <Link to={'/login'} className='card-body py-2 '><button
                      
                      className="btn rounded-md transition ease-in-out  duration-300 font-semibold bg-gradient-to-r hover:scale-110  from-gray-400 text-white to-gray-700"
                    >
                     <FaArrowCircleLeft></FaArrowCircleLeft> Back to Login
                    </button></Link>
               
                
              </div>
            </div>
          </motion.div>
        </div>
        <Toaster richColors position='top-center'/>
      </div>
    );
};

export default PassReset;