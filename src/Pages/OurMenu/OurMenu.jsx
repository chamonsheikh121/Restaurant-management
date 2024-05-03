import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import PageHeader from "../Shared/PageHeader";
import image from "./../../assets/menu/banner3.jpg"
import useMenu from "../../Hooks/useMenu";
import CategoryHeader from "./CategoryHeader";
import chefService from "./../../assets/home/chef-service.jpg"
import SectionHeading from "../Shared/SectionHeading";
import MenuContainer from "../Home/Category/PopularMenu/MenuContainer";


const OurMenu = () => {

    const [offered] = useMenu('offered');
    const [dessert] = useMenu('dessert');
    const [soup] = useMenu('soup');
    const [salad] = useMenu('salad');
    const [pizza] = useMenu('pizza');




    return (
        <div>
            <Helmet>
                <title>bistro boss | menu</title>
            </Helmet>

            <PageHeader
                image={image}
                title={"Our menu"}
                bio={"would you like to try a dish ?"}
            ></PageHeader>



            <div className="mb-20">
                <SectionHeading
                    subHeading={"Don't miss"}
                    heading={"todays offer"}
                ></SectionHeading>
                <MenuContainer items={offered}></MenuContainer>
            </div>
{/* ==================== desserts =============================== */}
            <CategoryHeader
                chefService={chefService}
                categoryName={'desserts'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio voluptate reiciendis iste quae quis dolores neque. Cum officia ut quaerat nemo error impedit excepturi obcaecati!'}
            ></CategoryHeader>
            <div className="my-20">
                <MenuContainer items={dessert}></MenuContainer>
            </div>
{/* ==================== pizza =============================== */}
            <CategoryHeader
                chefService={chefService}
                categoryName={'pizza'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio voluptate reiciendis iste quae quis dolores neque. Cum officia ut quaerat nemo error impedit excepturi obcaecati!'}
            ></CategoryHeader>
            <div className="my-20">
                <MenuContainer items={pizza}></MenuContainer>
            </div>
{/* ==================== salad =============================== */}
            <CategoryHeader
                chefService={chefService}
                categoryName={'salad'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio voluptate reiciendis iste quae quis dolores neque. Cum officia ut quaerat nemo error impedit excepturi obcaecati!'}
            ></CategoryHeader>
            <div className="my-20">
                <MenuContainer items={salad}></MenuContainer>
            </div>
{/* ==================== soup =============================== */}
            <CategoryHeader
                chefService={chefService}
                categoryName={'soup'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odio voluptate reiciendis iste quae quis dolores neque. Cum officia ut quaerat nemo error impedit excepturi obcaecati!'}
            ></CategoryHeader>
            <div className="my-20">
                <MenuContainer items={soup}></MenuContainer>
            </div>





        </div>
    );
};

export default OurMenu;