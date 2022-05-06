import { Homepage } from './content/homepage';
import { Tshirts } from './content/tshirts';
import { Hoodies } from './content/hoodies';
import { Prints } from './content/prints';
import { Others } from './content/others';
import { ErrorPage } from './content/errorPage';


export function RenderContent(number) {

    let content;

    switch(number) {
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
            content = <Others />
        break;
        default: 
            content = <ErrorPage />
        break;
    };

    return content;
};