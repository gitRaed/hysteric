import { others } from '../../database/products';

import '../../styles/contentStyles/articlesLayout.css';

export const Others = function() {
    return(
        <div>
            <h1>Others articles</h1>
            <div className="grid-container">
                {others.map((item) => { return( 
                    <div className='article-container'>
                        <figure>
                            <img src={item.src} alt={item.name}/>
                            <figcaption>{item.name}<br/>Price: {item.price}</figcaption>
                            <figcaption> <a href={item.originalLink} target="_blank" rel="noreferrer">Original link</a></figcaption>
                        </figure>
                    </div>) 
                })}
            </div>
        </div>
    )
}