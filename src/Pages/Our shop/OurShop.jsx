import { Helmet } from "react-helmet";
import PageHeader from "../Shared/PageHeader";
import image from './../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from "../Shared/FoodCard";
import useMenu from "../../Hooks/useMenu";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThreeCircles } from 'react-loader-spinner'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import UseAuthContext from "../../Hooks/UseAuthContext";
import Swal from "sweetalert2";
import UseAxios from "../../Hooks/UseAxios";



const OurShop = () => {
    const categories = ['dessert', 'soup', 'salad', 'pizza', 'drinks', "popular"];
    const { category } = useParams();


    const indexNumber = categories.indexOf(category);
    const [initialIndex, setInitialIndex] = useState(indexNumber)
    const [desserts, dessertLoading] = useMenu('dessert');
    const [soups, soupsLoading] = useMenu('soup');
    const [salads, saladsLoading] = useMenu('salad');
    const [pizzas, pizzasLoading] = useMenu('pizza');
    const [drinks, drinksLoading] = useMenu('drinks');
    const [populars, popularsLoading] = useMenu('popular');

    // const [totalItems, setTotalItems] = useState()
    // const [currentPage, setCurrentPage] = useState(0)
    // const [perPageItems, setPerPageItems] = useState();
    // const itemsPerPage = 6;
    // let pageCount
    // if (totalItems > 6) {
    //     pageCount = Math.ceil(totalItems / itemsPerPage);
    // }
    // else {
    //     pageCount = 1
    // }
    // const pageArray = [...Array(pageCount).keys()];
    // console.log("current page is: ", currentPage);
    // let slicedItems;
    // if (initialIndex === 0) {
    //     slicedItems = desserts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    // }
    // if (initialIndex === 1) {
    //     slicedItems = soups.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    // }
    // useEffect(() => {
    //     if (initialIndex === 0) {
    //         setTotalItems(desserts.length)
    //     }
    //     if (initialIndex === 1) {
    //         setTotalItems(soups.length)
    //     }
    //     if (initialIndex === 2) {
    //         setTotalItems(salads.length)
    //     }
    //     if (initialIndex === 3) {
    //         setTotalItems(pizzas.length)
    //     }
    //     if (initialIndex === 4) {
    //         setTotalItems(drinks.length)
    //     }
    //     if (initialIndex === 5) {
    //         setTotalItems(populars.length)
    //     }
    // }, [initialIndex, desserts, soups, salads, pizzas, drinks, populars])
    // useEffect(() => {
    //     setPerPageItems(slicedItems)
    // }, [currentPage, initialIndex])



    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };
    // const getSlideData = (startIndex, endIndex) => {
    //     return desserts.slice(startIndex, Math.min(endIndex, desserts.length));
    // };


    return (
        <div>
            <Helmet>
                <title>bistro boss | shop</title>
            </Helmet>
            <PageHeader image={image} title={'our shop'} bio={'Order as you like'}></PageHeader>



            <Tabs selectedIndex={initialIndex} onSelect={(index) => setInitialIndex(index)} className={'text-center my-10 uppercase px-20'}>

                <TabList>
                    <Tab >dessert</Tab>
                    <Tab>soup</Tab>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>drinks</Tab>
                    <Tab>popular</Tab>

                </TabList>

                <TabPanel>
                    {
                        dessertLoading ? <span className="w-full h-full  flex justify-center items-center"><ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></span> :
                            <div className={'grid grid-cols-1 md:grid-cols-3 gap-5'}>
                                {
                                    desserts?.map(dessert => <FoodCard key={dessert._id} salads={dessert}></FoodCard>)
                                }
                            </div>
                    }
                    {/* <ItemsPagination pageArray={pageArray} setCurrentPage={setCurrentPage} currentPage={currentPage}></ItemsPagination> */}
                </TabPanel>
                <TabPanel>
                    {
                        soupsLoading ? <span className="w-full h-full  flex justify-center items-center"><ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></span> :
                            <div className={'grid grid-cols-1 md:grid-cols-3 gap-5'}>
                                {
                                    soups?.map(soup => <FoodCard key={soup._id} salads={soup}></FoodCard>)
                                }
                            </div>
                    }
                    {/* <ItemsPagination pageArray={pageArray} setCurrentPage={setCurrentPage} currentPage={currentPage}></ItemsPagination> */}
                </TabPanel>

                <TabPanel>
                    {
                        saladsLoading ? <span className="w-full h-full  flex justify-center items-center"><ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></span> : <div className={'grid grid-cols-1 md:grid-cols-3 gap-5'}>
                            {
                                salads?.map(salad => <FoodCard key={salad._id} salads={salad}></FoodCard>)
                            }
                        </div>
                    }
                    {/* <ItemsPagination pageArray={pageArray} setCurrentPage={setCurrentPage} currentPage={currentPage}></ItemsPagination> */}
                </TabPanel>
                <TabPanel>
                    {
                        pizzasLoading ? <span className="w-full h-full  flex justify-center items-center"><ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></span> : <div className={'grid grid-cols-1 md:grid-cols-3 gap-5'}>
                            {
                                pizzas?.map(pizza => <FoodCard key={pizza._id} salads={pizza}></FoodCard>)
                            }
                        </div>
                    }
                    {/* <ItemsPagination pageArray={pageArray} setCurrentPage={setCurrentPage} currentPage={currentPage}></ItemsPagination> */}
                </TabPanel>
                <TabPanel>
                    {
                        drinksLoading ? <span className="w-full h-full  flex justify-center items-center"><ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></span> : <div className={'grid grid-cols-1 md:grid-cols-3 gap-5'}>
                            {
                                drinks?.map(drink => <FoodCard key={drink._id} salads={drink}></FoodCard>)
                            }
                        </div>
                    }
                    {/* <ItemsPagination pageArray={pageArray} setCurrentPage={setCurrentPage} currentPage={currentPage}></ItemsPagination> */}
                </TabPanel>
                <TabPanel>
                    {
                        popularsLoading ? <span className="w-full h-full  flex justify-center items-center"><ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></span> : <div className={'grid grid-cols-1 md:grid-cols-3 gap-5'}>
                            {
                                populars?.map(popular => <FoodCard key={popular._id} salads={popular}></FoodCard>)
                            }
                        </div>
                    }
                    {/* <ItemsPagination pageArray={pageArray} setCurrentPage={setCurrentPage} currentPage={currentPage}></ItemsPagination> */}
                </TabPanel>



            </Tabs>





        </div >
    );
};

export default OurShop;