import { others } from '../../database/products';
import { MapArticles } from './mapArticles';

export const Others = function(props) {

    const setDisplay = props.setDisplay;

    return(
        <div>
            <h1>Others articles</h1>
            <MapArticles products={others} setDisplay={setDisplay} />
        </div>
    )
}