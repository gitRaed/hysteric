import { useState } from "react"

export function CartPage(props) {

    const [cart] = useState(props.cart);
    let message = '';
    console.log(cart);

    if(cart.length === 0) {
        message = 'Your shopping cart is empty, time to go shopping !!'
    } else {
        message = ''
    }

    return (
        <div className="cartPage">
            <h1>Your cart</h1>
            <p>{message}</p>
        </div>
    )
}