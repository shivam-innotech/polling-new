import React from 'react';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome Admin Polling Page</h2>
            <section>
                <h3>All Polls</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;