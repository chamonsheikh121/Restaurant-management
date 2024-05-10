import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import UseAuthContext from "../../Hooks/UseAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";




const SocialLogin = () => {

    const { googleLogin } = UseAuthContext()
    const axiosPublic = UseAxiosPublic()

    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogIn = () => {


        googleLogin()
            .then((result) => {
                console.log(result.user);
                const user = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photoLink: result.user.photoURL
                }

                axiosPublic.post('/api/v1/users', user)
                .then(res=>console.log(res.data))


                navigate(location?.state ? location.state : '/')
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });



    }


    return (
        <div className="flex p-5 flex-col gap-3 justify-center items-center w-full ">

            <button
                onClick={handleGoogleLogIn}
                className="border relative flex items-center justify-center text-xl p-2 w-full rounded-full">
                <FcGoogle className="absolute top-2 left-5 text-3xl"></FcGoogle><span className="uppercase font-bold">google</span>
            </button>
            <button className="border relative flex items-center justify-center text-xl p-2 w-full rounded-full">
                <FaGithub className="absolute top-2 left-5 text-3xl"></FaGithub><span className="uppercase font-bold">github</span>
            </button>


        </div>
    );
};

export default SocialLogin;