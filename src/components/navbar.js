import { RenderContent } from './renderContent';


export function Navbar (){

    let displayNumber = 1;

    return(
        <div>
            {RenderContent(displayNumber)}
        </div>
    )
}
