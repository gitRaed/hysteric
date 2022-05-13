import '../../styles/contentStyles/homepage.css'


import { Hoodies } from './hoodies';
import { Tshirts } from './tshirts';
import { Prints } from './prints';
import { Others } from './others';
import { DisclaimerPage } from './disclaimerPage';

export const Homepage = function(props) {

    const { setDisplay } = props;

    return (
        <div>
            <h1>Disclaimer</h1>
            <DisclaimerPage setDisplay={setDisplay}/>
            <Tshirts setDisplay={setDisplay}/>
            <Hoodies setDisplay={setDisplay}/>
            <Prints setDisplay={setDisplay}/>
            <Others setDisplay={setDisplay}/>
        </div>
    )
};

