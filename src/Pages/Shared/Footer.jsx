import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();



    return (
        <>
            <footer className="bg-gray-700 flex flex-col md:flex-row  text-white">
                <aside className="w-full flex justify-end">
                    <div className="mr-32 py-16 space-y-3">
                        <h3 className="text-4xl font-bold">Contact Us</h3>
                        <p className="text-xl">Dhaka, Bangladesh</p>
                        <p >+88012318237</p>
                        <p>Mon - Fri 08:00-22:00</p>
                        <p>Sat - Sun 08:00-22:00</p>
                    </div>
                </aside>
                <nav className="bg-gray-900 w-full py-16 flex justify-start">
                    <div className="ml-32 space-y-3">
                        <h6 className="text-4xl font-bold text-white">Follow Us</h6>
                        <p>Join us on social media</p>
                        <div className="grid grid-cols-3 cursor-pointer">
                            <span className="flex justify-center"><FaFacebookF  className="text-3xl"></FaFacebookF></span>
                            <span className="flex justify-center"> <FaInstagramSquare className="text-3xl"></FaInstagramSquare></span>
                            <span className="flex justify-center"><FaTwitter className="text-3xl"></FaTwitter></span>
                        </div>
                    </div>
                </nav>

            </footer>
            <div className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </>

    );
};

export default Footer;