import Notiflix, { Confirm, Notify } from "notiflix";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
    const {user,userSignOut}=useAuth();
    Notiflix.Confirm.init({backgroundColor:'#0F172A' ,messageColor:'#FBBF24',titleColor:'#FBBF24', okButtonBackground:'#F59E0B', position:'center-top',borderRadius:'10px'})
    const handleLogout=()=>{
        Confirm.show (
            'Logout',
            'Are you sure you want to logout?',
            'Yes',
            'No',
            () => {
            userSignOut();
            toast.success('You have been logged out');
            },
            () => {
            
            },
            {
            },
            );
    }
    return (
        <div>
           <div>
            <p> user: {user.email}</p>
            <button onClick={handleLogout} className="btn btn-accent me-5">Logout </button>
            
           
           <Link to={'/login'}> <button className="btn btn-secondary ml-7">Login</button></Link>
           <Link to={'/register'}> <button className="btn btn-info ml-7">Register</button></Link>
           <Link to={'/'}> <button className="btn btn-warning ml-7">Home</button></Link>
           <Link to={'/page'}> <button className="btn btn-primary ml-7">Page 1</button></Link>
            
        </div>
        <Toaster position="top-center" richColors></Toaster>
        </div>
    );
};

export default Navbar;