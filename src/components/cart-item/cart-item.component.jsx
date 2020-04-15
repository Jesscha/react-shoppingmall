import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({ item: { imageUrl, price, name, quantitiy } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="photo"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantitiy} X {price}
                </span>
        </div>
    </div>

)

export default CartItem