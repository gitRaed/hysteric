import { hoodies } from "../../database/products";
import { MapArticles } from "./mapArticles";

export const Hoodies = function(props) {

    const { setDisplay } = props;

    return(
        <div>
            <h1>Others articles</h1>
            <MapArticles products={hoodies} setDisplay={setDisplay} />
        </div>
    )
}