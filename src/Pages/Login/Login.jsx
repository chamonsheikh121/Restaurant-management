import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuthContext from "../../Hooks/UseAuthContext";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import loginImage from './../../assets/others/authentication1.png'
import SocialLogin from "../Shared/SocialLogin";
import Divider from "../Shared/Divider";


const Login = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { singIn } = UseAuthContext()
    const location = useLocation()

    const handleLoginForm = (event) => {
        event.preventDefault()

        singIn(email, password)
            .then(result => {
                Swal.fire({
                    title: "Success",
                    text: "LoggedIn Successful",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/')
            })
            .catch(err => console.log(err))




    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro-boss | signIn</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row justify-center">
                <div className="max-w-2xl">
                    <img src={loginImage} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required
                                onBlur={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={visible ? 'text' : 'password'} placeholder="password" className="w-full input input-bordered" required
                                    onBlur={(e) => setPassword(e.target.value)}
                                />
                                <span onClick={() => setVisible(!visible)} className="text-2xl absolute right-5 top-3">{visible ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}</span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New here <Link className="text-purple-700 underline" to='/registration'>registration</Link></p>
                    </form>
                    <Divider text={'or login with'}></Divider>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;