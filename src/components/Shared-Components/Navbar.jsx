import Notiflix, { Confirm, Notify } from "notiflix";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import useAuth from "../../Hooks/useAuth";
import { FaUserAltSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, userSignOut } = useAuth();

  Notiflix.Confirm.init({
    backgroundColor: "#0F172A",
    messageColor: "#FBBF24",
    titleColor: "#FBBF24",
    okButtonBackground: "#F59E0B",
    position: "center",
    borderRadius: "10px",
  });
  const handleLogout = () => {
    Confirm.show(
      "Logout",
      "Logout from EventVerse?",
      "Yes",
      "No",
      () => {
        userSignOut().then(() => {
          toast.error("You have been logged out", { icon: <FaUserAltSlash /> });
        });
      },
      () => {},
      {}
    );
  };
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ delay: 0.1, ease: "easeInOut" }}
      className="bg-gradient-to-bl from-slate-900 to-slate-950 text-amber-400 py-8"
    >
      {/* for desktop view  */}
      <div className=" justify-between items-center mx-5 hidden md:flex ">
        <img src={logo} className=" w-80" alt="" />
        <div className="flex space-x-5 items-center">
          <Link to={"/"}> Home</Link>
          <Link to={"/page"}> Page 1</Link>
          <Link to={"/page"}> Page 2</Link>
          <Link to={"/page"}> Page 3</Link>
          <Link to={"/page"}> Page 4</Link>
          {
            user && <img className="w-10 rounded" src={user?.photoURL} alt="User" />
          }
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-slate-800 text-amber-400 "
              >
                Logout{" "}
              </button>
            ) : (
              <Link to={"/login"}>
                {" "}
                <button className="btn bg-white ">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* for mobile view  */}
      <div className="flex justify-between flex-col items-center  md:hidden">
        <img src={logo} className=" w-80" alt="" />
        <div className="flex flex-col items-center">

        <div className="flex flex-col  items-center dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-950  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <div className="flex flex-col mx-auto space-y-2">
              <Link to={"/"}> Home</Link>
              <Link to={"/page"}> Page 1</Link>
              <Link to={"/page"}> Page 2</Link>
              <Link to={"/page"}> Page 3</Link>
              <Link to={"/page"}> Page 4</Link>
            </div>
          </ul>
        </div>

        <div className="mt-4 space-y-5 flex flex-col items-center">
        {
            user && <img className="w-10 rounded" src={user?.photoURL} alt="User" />
        }
          <div className="">
            {user ? (
                <button onClick={handleLogout} className="btn   bg-slate-800 text-amber-400 ">
                Logout{" "}
              </button>
            ) : (
                <Link to={"/login"}>
                {" "}
                <button className="btn bg-white ">Login</button>
              </Link>
            )}
          </div>
        </div>
        </div>
       
       
      </div>
      <Toaster position="top-center" richColors></Toaster>
    </motion.div>
  );
};

export default Navbar;
