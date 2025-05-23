import React from 'react';
import Navbar from '../components/Navbar';

const FAQs = () => {
    return (
        <>
            <Navbar onMenuClick={() => setOpen(true)} />
                    
        <div>
            <h1>Frequently Asked Questions</h1>
            <div>
                <h2>Question 1</h2>
                <p>Answer to question 1.</p>
            </div>
            <div>
                <h2>Question 2</h2>
                <p>Answer to question 2.</p>
            </div>
            <div>
                <h2>Question 3</h2>
                <p>Answer to question 3.</p>
            </div>
        </div>
        </>
    );
};

export default FAQs;