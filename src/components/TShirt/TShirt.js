import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt}) => {
    const {name, picture, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <button>Buy Now</button>
        </div>
    );
};

export default TShirt;