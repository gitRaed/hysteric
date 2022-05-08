const img = require('../imgs/logo/logo.PNG');

export function Navbar (props){

    return(
        <div>
            <div className='img-div'>
                <img src={img} alt='logo'/>
            </div>
            <nav>
                <ul>
                    <li onClick={() => {props.setDisplay(1)}}>Homepage</li>
                    <li onClick={() => {props.setDisplay(2)}}>T-shirts</li>
                    <li onClick={() => {props.setDisplay(3)}}>Hoodies</li>
                    <li onClick={() => {props.setDisplay(4)}}>Prints</li>
                    <li onClick={() => {props.setDisplay(5)}}>Others</li>
                    <li onClick={() => {props.setDisplay(6)}}>About</li>
                </ul>
            </nav>
        </div>
    )
}
