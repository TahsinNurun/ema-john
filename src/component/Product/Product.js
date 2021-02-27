import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);

    const {img, name, seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h2>{name}</h2>
                <br/>
                <p><small>by:{seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className = "main-btn" 
                onClick ={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
        
            
        
    );
};

export default Product;