import { ThreeCircles } from "react-loader-spinner";
import UsePayments from "../../Hooks/UsePayments";
import CartCard from "../Cart/CartCard";
import SectionHeading from "../Shared/SectionHeading";
import PaymentCard from "./PaymentCard";

const PaymentHistory = () => {

    const [payments] = UsePayments();

    console.log(payments);

    return (
        <div>

            <SectionHeading subHeading={'At a Glance'} heading={'payment history'}></SectionHeading>

            < div className="mx-auto max-w-3xl  bg-white p-10">

                <div className="uppercase flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-700">total Payments: {payments?.length}</h2>
                </div>
                <div className="overflow-x-auto my-10 rounded-md">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#d1a054] text-white my-10">
                            <tr className="uppercase   text-lg">
                                <th></th>
                                <td>Email</td>
                                <td>status</td>
                                <td>total price</td>
                                <td>payment date</td>
                            </tr>
                        </thead>
                        {
                            !payments[0] && <span className="w-full h-full  flex justify-center items-center"><ThreeCircles
                                visible={true}
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="three-circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            /></span>
                        }
                        <tbody>

                            {
                                payments?.map((payment, i)=> <PaymentCard index={i} payment={payment}></PaymentCard>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default PaymentHistory;