import React from 'react';
import Navbar from '../components/Navbar';

const Products = () => {
    return (
        <>
        <Navbar onMenuClick={() => setOpen(true)} />
        <div>
            <h1>Products</h1>
            <p>Welcome to the Products page. Browse our selection of items below.</p>
        </div>
        </>
    );
};

export default Products;