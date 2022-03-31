import React from 'react';
import useTshirts from '../../hooks/useTshirts';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';


const Home = () => {
    const [tshirts, setTshirts] = useTshirts();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt=> <Tshirt key={tshirt._id}
                    tshirt={tshirt}
                    />)
                }
            </div>
            <div className="cart-container">
                <h1>from cart container home</h1>
            </div>
        </div>
    );
};

export default Home;