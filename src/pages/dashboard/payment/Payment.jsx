import React from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './paymentForm/PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subheading={"pay for eat!!"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <PaymentForm></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;