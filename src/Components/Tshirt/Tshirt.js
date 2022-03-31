import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt}) => {
    const{name, picture, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} height='250px' alt="" />
            <h4>{name}</h4>
            <h4>Price: {price}</h4>
            <button>Add to Cart</button>
        </div>
    );
};

export default Tshirt;