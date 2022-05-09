import '../../styles/contentStyles/errorPage.css';

export const ErrorPage = function(props) {

    let setDisplay = props.setDisplay;

    return(
        <div className="errorPage">
            We can not find the page you're looking for. <br/>
            Please go back to the <span onClick={() => {setDisplay(1)}}>Homepage</span>
        </div>
    )
}