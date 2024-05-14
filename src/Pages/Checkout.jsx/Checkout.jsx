import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import SectionHeading from '../Shared/SectionHeading';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51PFy8nRqPrqgbewKTHFBzVPOPQWmnhbIuHlDRQ8u7pKsiGL112quzPZqZfsYfFKSaC5Y31xMEZvxkZyXl0Cy0Og2001K2ayOsv')

const Checkout = () => {
    return (
        <div>

            <SectionHeading subHeading={'pay before eat'} heading={'pay now'}></SectionHeading>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default Checkout;