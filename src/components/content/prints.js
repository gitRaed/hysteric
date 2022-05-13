import { prints } from "../../database/products";
import { MapArticles } from "./mapArticles";

export const Prints = function(props) {

    const { setDisplay } = props;

    return(
        <div>
            <h1>Prints</h1>
            <MapArticles products={prints} setDisplay={setDisplay} />
        </div>
    )
}