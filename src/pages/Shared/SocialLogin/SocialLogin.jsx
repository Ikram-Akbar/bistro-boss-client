import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div> 
            <div className="divider"> Log in With </div> 
            <div className="text-center">
                <button className="btn btn-circle btn-outline">
                   <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;