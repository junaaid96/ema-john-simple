import React from "react";

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.05).toFixed(2);
    const grandTotal = parseInt(total) + parseInt(shipping) + parseFloat(tax);

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Charge: ${shipping} </p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {grandTotal}</h4>
        </div>
    );
};

export default Cart;
