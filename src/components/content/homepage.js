import '../../styles/contentStyles/homepage.css'
import '../../styles/contentStyles/homepageMobile.css';

export const Homepage = function() {

    let css = 'mobile';
    return (
        <div className={`${css==='mobile' ? "test" : ""}`}>Hello this is homepage</div>
    );
};

