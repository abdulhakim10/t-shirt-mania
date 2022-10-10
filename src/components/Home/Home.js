import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    // handler for buy btn
    const handleAddToCart = tShirt => {
        const exists = cart.find(ts => ts._id === tShirt._id);
        if(exists){
            alert('already added')
        }
        else{
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
            {
                tShirts.map(tShirt => <TShirt 
                    key={tShirt._id}
                    tShirt={tShirt}
                    handleAddToCart={handleAddToCart}
                    ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                setCart={setCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;