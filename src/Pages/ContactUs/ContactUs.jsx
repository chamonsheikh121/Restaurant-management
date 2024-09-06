import { FaPhone } from 'react-icons/fa';
import './Style.css'
import { MdEmail } from 'react-icons/md';
import { BiLocationPlus } from 'react-icons/bi';
import { FaLocationPin } from 'react-icons/fa6';
import { Cell } from 'recharts';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';


const ContactUs = () => {

    const [loading, setLoading] = useState(false)
    const nameValue = useRef()
    const emailValue = useRef()
    const phoneValue = useRef()
    const message = useRef()

    const handleButton = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            nameValue.current.value = ''
            emailValue.current.value = ''
            phoneValue.current.value = ''
            message.current.value = ''
            setLoading(false)
            Swal.fire({
                title: "Success",
                text: "Message sent",
                icon: "success"
            });
            
        }, 2000);

       

    }
    return (
        <div className="container">
            <div className='w-full  h-full absolute top-0 left-0 bg-black opacity-80'></div>
            <div className='absolute  top-0 left-0 w-full h-full  flex justify-center items-center'>
                <div className='text-white p-2 lg:p-10'>
                    <div className='text-center space-y-2'>
                        <h1 className='text-4xl font-extrabold uppercase'>Get in touch</h1>
                        <p className='flex justify-center items-center gap-2'><span className='flex items-center gap-2'><FaPhone></FaPhone> Phone :</span> <a href='tel:+8801304100074' className='hover:underline'> 01304100074</a></p>
                        <p className='flex flex-col md:flex-row justify-center items-center md:gap-2'><span className='flex items-center gap-2'><MdEmail></MdEmail> Email : </span> <a href="mailto:sheikhchamon9@gmail.com" className='text-red-700 hover:underline'>sheikhchamon9@gmail.com</a></p>
                        <p className='flex justify-center items-center gap-2'><FaLocationPin></FaLocationPin> <span><a href="" className=''>Green house 203, purbo noyatola, mogbazar, Dhaka Bangladesh</a></span></p>
                    </div>

                    <form onSubmit={handleButton} className='mt-10   lg:p-5'>
                        <div className='flex gap-2 flex-col lg:flex-row justify-center'>
                            <div className='w-full text-black  flex justify-between flex-col space-y-2'>
                                <input
                                    required
                                    ref={nameValue}
                                    type="text"
                                    placeholder="your name"
                                    className="input input-bordered input-md w-full lg:min-w-96" />
                                <input
                                    required
                                    ref={emailValue}
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered input-md w-full " />
                                <input
                                    required
                                    ref={phoneValue}
                                    type="number"
                                    placeholder="phone"
                                    className="input input-bordered input-md w-full " />
                            </div>
                            <div className='w-full space-y-2  h-full '>
                                <textarea
                                ref={message}
                                    required
                                    placeholder='Message here'
                                    className='w-full p-2 focus:outline-none text-black rounded-md h-[180px] lg:min-w-96' name="" id=""></textarea>
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <button className='text-white bg-red-700 px-14 rounded-md py-2'>{loading ? <span className='loading'></span>: 'Submit'}</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;