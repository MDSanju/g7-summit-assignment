import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Informations from '../Informations/Informations';
import './Details.css';

const Details = () => {
    // set state
    const [details, setDetails] = useState([]);
    const [cart, setCart] = useState([]);

    // use effect and get fake data by doing fetch
    useEffect(() => {
        fetch('./presidents.JSON')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);

    // set event handler from informations component on the 'add to cart' button
    const handleAddToCart = detail => {
        const newCart = [...cart, detail];
        setCart(newCart);
    }

    return (
        <div className="presidents-details">
            <div className="presidents">
                {/* get items through doing map */}
                <div className="president-informations">
                    {
                        details.map(detail => <Informations key={detail._id} detail={detail} handleAddToCart={handleAddToCart}></Informations>)
                    }
                </div>
            </div>
            {/* cart component */}
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Details;