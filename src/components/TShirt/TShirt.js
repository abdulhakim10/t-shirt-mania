import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, handleAddToCart}) => {
    const {name, picture, price, _id} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;