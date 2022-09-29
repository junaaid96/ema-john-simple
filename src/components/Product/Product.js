import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddToCart, product } = props;
    const { img, name, price, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" height={200}/>
            <div className='product-title'>
            <h4>{name}</h4>
            </div>
            <div className='product-info'>
            <p>Price: {price}$</p>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='cart-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;