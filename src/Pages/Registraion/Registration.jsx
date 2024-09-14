import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaCheck } from "react-icons/fa";
import UseAuthContext from "../../Hooks/UseAuthContext";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import registerImage from "./../../assets/others/authentication2.png";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import Divider from "../Shared/Divider";
import SocialLogin from "../Shared/SocialLogin";

const Registration = () => {
    const axiosPublic = UseAxiosPublic()
    const { signUp, upDateUser, logOut } = UseAuthContext()
    const [passwordValidate, setPasswordValidate] = useState(null)
    const [matchRegEx, setMatchRegex] = useState(false);
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const emailValue = useRef()
    const nameValue = useRef()

    const [captcha, setCaptcha] = useState('')
    const [userName, setUserName] = useState('')
    const [disableRegistration, setDisableRegistration] = useState(true)
    const passwordValue = useRef()

    const doSubmit = () => {

        if (validateCaptcha(captcha)) {
            setDisableRegistration(false)
            setCaptcha('')
        }

        else {
            alert('mile nai')
            setDisableRegistration(true)
            setCaptcha('')
        }


    };




    const handleRegistrationForm = (event) => {
        event.preventDefault()
        // console.log(userName, email, password, photoLink);
        console.log(emailValue.current.value, passwordValue.current.value);
        signUp(emailValue.current.value, passwordValue.current.value)
            .then(result => {
                console.log(upDateUser);
                upDateUser(result.user, nameValue.current.value).then(() => {
                    // user
                    console.log('hi ima user');
                    const user = {
                        name: nameValue.current.value,
                        email: result.user?.email,
                        photoLink: result?.user?.photoURL || ''
                    }
                    console.log(user);
                    axiosPublic.post('/api/v1/users', user)
                        .then(res => {
                            console.log(res.data.insertedId);
                            if (res.data) {
                                Swal.fire({
                                    title: "Success",
                                    text: "Registration Successful",
                                    icon: "success"
                                });
                                logOut()
                                navigate('/login')

                            }
                        })




                }).catch(err => console.log(err))
            })
            .catch(err => {
                Swal.fire(`${err.message}`)
            })



    }



    useEffect(() => {
        emailValue.current.value = ''
        passwordValue.current.value = ''
        loadCaptchaEnginge(6);
        
    }, [])

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro-boss | register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={registerImage} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistrationForm} className="card-body">

                        <SocialLogin></SocialLogin>
                        <Divider text={'or signUp with email & password'}></Divider>
                        <div className="form-control">

                            <input type="text" placeholder="Your name" className="input input-bordered"
                                ref={nameValue}
                                required
                            />
                        </div>
                        
                       
                        <div className="form-control">

                            <input type="email" placeholder="email" className="input input-bordered"
                                ref={emailValue}
                                required
                            />
                        </div>
                        <div className="form-control ">

                            <div className="relative">
                                <input type={`${visible ? 'text' : 'password'}`} placeholder="password" className="w-full input input-bordered"
                                    ref={passwordValue}

                                />
                                <span onClick={() => setVisible(!visible)} className="text-2xl absolute right-5 top-3">{visible ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}</span>
                                {passwordValidate && <p className={matchRegEx ? 'text-green-700' : 'text-red-700'}>{passwordValidate}</p>}
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">

                                <LoadCanvasTemplate />

                            </label>
                            <input type="text" placeholder="Type captcha above" className="input input-bordered"
                                onBlur={(e) => setCaptcha(e.target.value)

                                }
                                required
                            />
                            <span className="text-purple-700 cursor-pointer btn bg-gray-200 mt-2 py-2 flex justify-center items-center" onClick={doSubmit}>{disableRegistration ? "Validate" : <FaCheck className="text-xl "></FaCheck>}</span>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disableRegistration} className="btn btn-primary">Registration</button>
                            <p>already have an account?  <Link className='text-purple-700 underline' to='/login'> login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;