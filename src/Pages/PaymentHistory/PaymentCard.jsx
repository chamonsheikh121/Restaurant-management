

const PaymentCard = ({index, payment}) => {
    const {_id,name,email,totalPrice,cartIds,date,transactionId,status} = payment;
    console.log(date.split(' '));

    return (
        <tr>

            <td>{index + 1}</td>
            <td>{email}</td>
            
            <td className="text-center">{status}</td>
            <td className="text-center">$ {totalPrice}</td>
            <td className="">{date}</td>

            
        </tr>
    );
};

export default PaymentCard;