import { CartPage } from './content/cartPage';
import { Homepage } from './content/homepage';
import { Tshirts } from './content/tshirts';
import { Hoodies } from './content/hoodies';
import { Prints } from './content/prints';
import { Others } from './content/others';
import { AboutPage } from './content/aboutPage';
import { ArticlePage } from './content/articlePage';
import { ErrorPage } from './content/errorPage';


export function RenderContent(props) {

    let content;
    let number = props.number;
    let setDisplay = props.setDisplay;

    switch(number) {
        case 0:
            content = <CartPage />
        break;
        case 1: 
            content = <Homepage />
        break;
        case 2: 
            content = <Tshirts />
        break;
        case 3: 
            content = <Hoodies />
        break;
        case 4: 
            content = <Prints />
        break;
        case 5: 
            content = <Others setDisplay={setDisplay}/>
        break;
        case 6: 
            content = <AboutPage />
        break;
        case 7:
            content = <ArticlePage setDisplay={setDisplay}/>
        break;
        default: 
            content = <ErrorPage setDisplay={setDisplay}/>
        break;
    };

    return content;
};