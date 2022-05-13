import { useState } from "react";
import '../../styles/contentStyles/cartPage.css';

export function CartPage(props) {

    let [cart, setCart] = useState(props.cart);
    let message = 'Cart list';
    let totalPrice = 0;
    cart.map((item) => {
        totalPrice += item.finalPrice;
    });
    

    function removeItem(item) {
        const index = cart.indexOf(item);
        if(index > -1) {
            cart.splice(index, 1);
            setCart(cart);
        }
    }


    if(cart.length === 0) {
        message = 'Your shopping cart is empty, time to go shopping !!';
    }

    return (
        <div className="cartPage">
            <h1>Your card</h1>
                <h3>{message}</h3>
                <table>
                    <tbody>
                    { cart.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td><button name="remove" id="remove" onClick={() => removeItem(item)}>X</button></td>
                                <td>
                                    <figure>
                                        <img src={item.src} alt={item.name}/>
                                        <figcaption>
                                            <span>{item.name}</span><br/>
                                            <span>{item.price}{item.currency}</span><br/>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.finalPrice}{item.currency}</td>
                            </tr>
                        )
                    })}
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Total Price :</td>
                                <td>
                                    {parseFloat(totalPrice.toFixed(2))}$<br/>
                                    <button type="submit" name="purchase" id="purchase" 
                                    onClick={event => {event.preventDefault()}}>
                                        Purchase
                                    </button>
                                </td>
                            </tr>

                    </tbody>
                </table>
                <br/>
                
        </div>
    )
}