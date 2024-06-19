import { Notify } from "notiflix";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Homepage = () => {
    return (
        <div>
            <p>Homepage</p>
            <Toaster></Toaster>
            <button onClick={()=>{toast('hello!');
            Notify.success('Sol lucet omnibus');
                 
            }} className="btn">toast</button>
           <Link to={'/login'}> <button className="btn btn-secondary ml-7">Login</button></Link>
           <Link to={'/register'}> <button className="btn btn-info ml-7">Register</button></Link>
            
        </div>
    );
};

export default Homepage;