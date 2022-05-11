import '../../styles/contentStyles/articlesLayout.css';
import { setItem } from './articlePage';

export function MapArticles(props) {

    const products = props.products;
    const setDisplay = props.setDisplay;

    const sendItem = (item) => {
        setItem(item)
    }

    return (

        <div className='grid-container'>
            {products.map((product) => {
                return (
                    <div className='article-container' key={product.id}>
                    <figure>
                        <img src={product.src} alt={product.name} onClick={() => {setDisplay(7); sendItem(product)}}/>
                        <figcaption>{product.name}<br/>Price: {product.price}{product.currency}</figcaption>
                        <figcaption> <a href={product.originalLink} target="_blank" rel="noreferrer">Original link</a></figcaption>
                    </figure>
                </div>
                )
            })}
        </div>
        
    )
}