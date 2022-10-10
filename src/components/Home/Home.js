import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
            {
                tShirts.map(tShirt => <TShirt 
                    key={tShirt.id}
                    tShirt={tShirt}
                    ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;