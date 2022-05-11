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

export function ArticlePage() {

    const item = getItem();

    const [quantity, setQuantity] = useState(1);
    const [price] = useState(item.price);
    let finalPrice = parseFloat((price*quantity).toFixed(2));
    

    function onChangeHandler(event) {
        let data = event.target.value;
        setQuantity(data);
    }

    function addToCart(event, item) {
        event.preventDefault();
        // send finalPrice, quantity and item details to cart
        console.log(finalPrice, item);
    }
    

    return (
        <div className="articlePage">
            <div className="articleDetails">
                <form>
                    <table>
                        <tr>
                            <td><label name='quantity'>QTY</label></td>
                            <td>{finalPrice}{item.currency}</td>
                        </tr>
                        <tr>
                            <td>
                                <input id="quantity" name="quantity" min="1" max="5" autoComplete="off" type="number" 
                                onChange={event => onChangeHandler(event)} value={quantity} 
                                />
                            </td>
                            <td>
                                <button id="submit" name="submit" type="submit" 
                                onClick={event => addToCart(event, item)}>Add to cart</button>
                            </td>
                        </tr>
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