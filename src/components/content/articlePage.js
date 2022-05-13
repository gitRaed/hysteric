import { useState } from 'react';

import '../../styles/contentStyles/articlePage.css';

//#region product
let product;

function getItem() {
    return product;
}

export function setItem(item) {
    product = item;
}
//#endregion

export function ArticlePage(props) {

    const item = getItem();
    const { cart } = props;

    const [quantity, setQuantity] = useState(1);
    const [price] = useState(item.price);
    let finalPrice = parseFloat((price*quantity).toFixed(2));
    const [message, setMessage] = useState('Click to add to cart');
    

    function onChangeHandler(event) {
        setQuantity(event.target.value);
    }

    function addToCart(event, item) {
        event.preventDefault();
        item.finalPrice = finalPrice;
        item.quantity = quantity;
        cart.push(item);
        setMessage('Added to cart !');
    }
    

    return (
        <div className="articlePage">
            <div className="articleDetails">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td><label name='quantity'>QTY</label></td>
                                <td>{finalPrice}{item.currency}</td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="quantity" name="quantity" min="1" max="10" required autoComplete="off" type="number" 
                                    onChange={event => onChangeHandler(event)} value={quantity} 
                                    />
                                </td>
                                <td>
                                    <button id="submit" name="submit" type="submit" 
                                    onClick={event => addToCart(event, item)}>Add to cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>{message}</p>
                </form>
            </div>
            <figure>
                <figcaption><h2>{item.name}<br/> <br/>{item.price}{item.currency}</h2></figcaption>
                <img src={item.src} alt={item.name}/>
            </figure>
        </div>
    )
}