import registerImg from "../assets/register.jpg" ;
import logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex  justify-center items-center bg-slate-950">
      <div className="">
        
        <div className="card   md:mx-20 rounded-none lg:card-side bg-slate-900 text-white">
        <figure className="w-1/3">
            <img src={registerImg} alt="Album" className="hidden lg:block" />
          </figure>
          <div className="md:card-body p-5 md:p-0 justify-center items-center mt-10  ">
            
            <div className="card bg-slate-900 shrink-0 w-full max-w-md  ">
            <img src={logo} className="w-3/4 mx-auto " alt="" />
            <h1 className="text-center text-2xl text-gray-400 my-3">Create an account</h1>
              <form className="card-body space-y-3  ">
                
                <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <FaRegUser className="inline "></FaRegUser>
                  <input
                    type="text"
                    placeholder="Username"
                    className=" "
                    required
                  />
                </div>
                <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <FaRegUser className="inline "></FaRegUser>
                  <input
                    type="email"
                    placeholder="Email"
                    className=" "
                    required
                  />
                </div>
                <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <RiLockPasswordLine className="inline "></RiLockPasswordLine>
                  <input
                    type="password"
                    placeholder="Password"
                    className=" "
                    required
                  />
                </div>
                <div className=" flex items-center space-x-2 input bg-transparent focus-within:border-gray-600  border-gray-600">
                  <RiLockPasswordLine className="inline "></RiLockPasswordLine>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className=" "
                    required
                  />
                </div>
                <div className=" mt-6 form-control space-y-3">
                <button type="submit" className="btn rounded-md transition ease-in-out  duration-300 font-semibold bg-gradient-to-r hover:scale-110  from-amber-400 text-white to-yellow-700">
                Sign Up
              </button>
             
                </div>
              </form>
            <Link to={'/login'}> <p className="text-center  text-gray-600">Already have an account?  <span className="text-white">Sign in</span> </p></Link>
            </div>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Register;
