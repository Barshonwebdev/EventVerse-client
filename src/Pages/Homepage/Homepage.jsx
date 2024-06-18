import { Notify } from "notiflix";
import { Toaster, toast } from "sonner";

const Homepage = () => {
    return (
        <div>
            <p>Homepage</p>
            <Toaster></Toaster>
            <button onClick={()=>{toast('hello!');
            Notify.success('Sol lucet omnibus');
                 
            }} className="btn">toast</button>
        </div>
    );
};

export default Homepage;