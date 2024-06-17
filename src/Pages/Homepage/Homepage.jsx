import { Toaster, toast } from "sonner";
import Notiflix from "notiflix";

const Homepage = () => {
    return (
        <div>
            <p>Homepage</p>
            <Toaster></Toaster>
            <button onClick={()=>{toast('hello!');
                Notiflix.Notify.success('Sol lucet omnibus');

            }} className="btn">toast</button>
        </div>
    );
};

export default Homepage;