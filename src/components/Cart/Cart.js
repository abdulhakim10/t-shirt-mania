import React from 'react';

const Cart = ({cart, setCart}) => {
    // console.log(cart)
    const removeTShirt = tShirt => {
        const remaining = cart.filter(ts => ts._id !== tShirt._id);
        setCart(remaining)
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Quantity: {cart.length}</p>
            {
                cart.map(tShirt => <p
                key={tShirt._id}
                >
                    {tShirt.name}
                    <button onClick={() => removeTShirt(tShirt)}>x</button>
                </p>)
            }
        </div>
    );
};

export default Cart;