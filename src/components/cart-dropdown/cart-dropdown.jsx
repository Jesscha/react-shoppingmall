import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-itmes"/>
        <CustomButton>Go TO CHECK OUT </CustomButton>
    </div>
)

export default CartDropdown;