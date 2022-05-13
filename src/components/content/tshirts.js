import { tshirts } from "../../database/products";
import { MapArticles } from "./mapArticles";

export const Tshirts = function(props) {

    const { setDisplay } = props;

    return(
        <div>
            <h1>T-Shirts</h1>
            <MapArticles products={tshirts} setDisplay={setDisplay} />
        </div>
    )
}