import React from 'react';
import Navbar from '../components/Navbar';

const HowItWorks = () => {
    return (
        <>
            <Navbar onMenuClick={() => setOpen(true)} />
        <div>
            <h1>How It Works</h1>
            <p>Welcome to The Eco Shop! Here's how our platform works:</p>
            <ol>
                <li>Browse sustainable products from trusted vendors.</li>
                <li>Add your favorite items to your cart.</li>
                <li>Checkout securely and enjoy eco-friendly shopping!</li>
            </ol>
        </div>
        </>
    );
};

export default HowItWorks;