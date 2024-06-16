import { Toaster, toast } from "sonner";

const Homepage = () => {
    return (
        <div>
            <p>Homepage</p>
            <Toaster></Toaster>
            <button onClick={()=>toast('hello!')} className="btn">toast</button>
        </div>
    );
};

export default Homepage;