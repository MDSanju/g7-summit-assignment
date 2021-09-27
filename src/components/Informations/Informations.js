import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Informations.css';

const Informations = (props) => {
    // destructuring objects
    const {img, name, party, position, country, donation} = props.detail;
    // fontawesome icon
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
            <div className="information-item">
                {/* president images */}
                <img src={img} alt="" />
                {/* details table, data show */}
                <table style={{height: "280px"}} className="table mt-4">
                    <tbody>
                      <tr>                      
                        <th>Name:</th>
                        <td>{name}</td>
                      </tr>
                      <tr>
                        <th>Party:</th>
                        <td>{party}</td>
                      </tr>
                      <tr>
                        <th>Position:</th>
                        <td>{position}</td>
                      </tr>
                      <tr>
                        <th>Country:</th>
                        <td>{country}</td>
                      </tr>
                      <tr>
                        <th>Donation:</th>
                        <td>${donation}</td>
                      </tr>
                    </tbody>
                </table>
                {/* add to cart button with onClick event handler */}
                <button type="button" className="btn btn-primary add-to-cart" onClick={() => props.handleAddToCart(props.detail)}>{shoppingCart} Add To Cart</button>
            </div>
            );
        };

export default Informations;