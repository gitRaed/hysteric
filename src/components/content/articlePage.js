import { useState } from 'react';

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
    const [price, setPrice] = useState(item.price);
    

    function onChangeHandler(event) {
        let data = event.target.value;
        setQuantity(data);
    }
    

    return (
        <div className="articlePage">
            <figure>
                <img src={item.src} alt={item.name}/>
            </figure>
            <div className="articleDetails">
                <h2>{item.name}<br/>{item.price}{item.currency}</h2>
                <form>
                    <div>
                        <label>QTY
                            <input id="quantity" name="quantity" min="1" max="5" autoComplete="off" type="number" 
                            onChange={event => onChangeHandler(event)} value={quantity} 
                            />
                        </label>
                    </div>
                    <div>
                        <p>{parseFloat((price*quantity).toFixed(2))}{item.currency}</p>
                        <button id="submit" name="submit" type="submit">Add to cart</button>
                    </div>
                </form>
            </div>
        </div>
    )
}