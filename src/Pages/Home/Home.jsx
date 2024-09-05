import React, { useContext } from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import SectionHeading from '../Shared/SectionHeading';
import PopularMenu from './Category/PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Review/Testimonials';
import { Helmet } from 'react-helmet';
// import PageHeader from '../Shared/PageHeader';
// import image from './../../assets/home/slide1.jpg'
import { AuthContext } from '../../Provider/AuthProvider';


const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    
    return (

        <div>
            <Helmet>
                <title>bistro boss | HOME</title>
            </Helmet>
            <Banner></Banner>

            <div className=''>

                <SectionHeading subHeading={"From 11:00 am to 10:00 pm"} heading={"Order online"}></SectionHeading>

                <div className='my-10 '>
                    <Category></Category>
                </div>
            </div>

            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;