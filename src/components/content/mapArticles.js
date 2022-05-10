import '../../styles/contentStyles/articlesLayout.css';

export function MapArticles(props) {

    const products = props.products;

    return (

        <div className='grid-container'>
            {products.map((product) => {
                return (
                    <div className='article-container'>
                    <figure>
                        <img src={product.src} alt={product.name}/>
                        <figcaption>{product.name}<br/>Price: {product.price}</figcaption>
                        <figcaption> <a href={product.originalLink} target="_blank" rel="noreferrer">Original link</a></figcaption>
                    </figure>
                </div>
                )
            })}
        </div>
        
    )
}