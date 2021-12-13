import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // reduce to add/sum new value with the previous value
    const donationReducer = (previous, current) => previous + current.donation;
    const totalDonation = cart.reduce(donationReducer, 0);
    return (
        <div>
            {/* show items as well as doing sum */}
            <h4>President Entered:<br />{props.cart.length}</h4>
            <br />
            <h4>Total Donated:<br />${totalDonation}</h4>
            {/*  */}
            {
                cart.map(name => <h4 key={name.name}>{name.name}</h4>)
            }
            {/* buy now button */}
            <button type="button" className="btn btn-outline-dark">Buy Now</button>
        </div>
    );
};

export default Cart;