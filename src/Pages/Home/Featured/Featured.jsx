import SectionHeading from "../../Shared/SectionHeading";
import featuredImage from "./../../../assets/home/featured.jpg"
import "./style.css"


const Featured = () => {
    return (
        // <div className="my-20 relative  border">

        //     <div className="h-[600px]   border">
        //         <img className="w-full  h-full" src={featuredImage} alt="" />
        //     </div>
        //     <div className="h-full w-full absolute top-0 z-10 opacity-50 bg-black">

        //     </div>
        //     <div className="border text-white w-full h-full flex justify-center items-center top-0 absolute z-40">
        //         <div className="w-full ">
        //             <SectionHeading subHeading={"Check it out"} heading={"From our menu"}></SectionHeading>
        //             <div className="w-full flex justify-center items-center gap-10">
        //                 <img className="w-[300px]" src={featuredImage} alt="" />
        //                 <div className="w-2/6">
        //                     <h4 className="text-xl">March 20, 2023</h4>
        //                     <p className="text-xl uppercase">Where can i get some ?</p>
        //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempore error, sequi reprehenderit maxime quae perspiciatis consectetur ipsum quam, fugiat magnam! A, assumenda expedita.</p>
        //                     <button className="mt-5 border-b-2 rounded-md  uppercase py-1 px-5" >read more</button>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>



        // </div>
        <div className="featured-content  text-white my-20 ">


            <div className=" py-40 bg-black opacity-70 h-full">

                <SectionHeading subHeading={"Check it out"} heading={"From our menu"}></SectionHeading>
                <div className="w-full h-full flex justify-center items-center gap-10">
                    <img className="w-[300px]" src={featuredImage} alt="" />
                    <div className="w-2/6">
                        <h4 className="text-xl">March 20, 2023</h4>
                        <p className="text-xl uppercase">Where can i get some ?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempore error, sequi reprehenderit maxime quae perspiciatis consectetur ipsum quam, fugiat magnam! A, assumenda expedita.</p>
                        <button className="mt-5 border-b-2 rounded-md  uppercase py-1 px-5" >read more</button>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default Featured;