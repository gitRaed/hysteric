import { useState } from 'react';

import '../../styles/contentStyles/articlePage.css';
import { addItemToCart } from './cartPage';

//#region product
let product;

function getItem() {
    return product;
}

export function setItem(item) {
    product = item;
}
//#endregion

export function ArticlePage() {

    const item = getItem();

    const [quantity, setQuantity] = useState(1);
    const [price] = useState(item.price);
    let finalPrice = parseFloat((price*quantity).toFixed(2));
    const [message, setMessage] = useState('');
    

    function onChangeHandler(event) {
        let data = event.target.value;
        setQuantity(data);
    }

    function addToCart(event, item) {
        event.preventDefault();
        item.finalPrice = finalPrice;
        item.quantity = quantity;
        // send finalPrice, quantity and item details to cart
        console.log(item);
        addItemToCart(item);
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
                        <tfoot>{message}</tfoot>
                    </table>
                </form>
            </div>
            <figure>
                <figcaption><h2>{item.name}<br/> <br/>{item.price}{item.currency}</h2></figcaption>
                <img src={item.src} alt={item.name}/>
            </figure>
        </div>
    )
}