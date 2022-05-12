import { useState } from "react"

//#region cart
const cart = [];

export function addItemToCart(item) {
    cart.push(item);
}

function getCart() {
    return cart
}
//#endregion cart

export function CartPage() {


    console.log(getCart());

    return (
        <div className="cartPage">
        </div>
    )
}