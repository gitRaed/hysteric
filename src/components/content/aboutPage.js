import { DisclaimerPage } from './disclaimerPage';
import '../../styles/contentStyles/aboutPage.css';

export function AboutPage() {
    return(
        <div className='aboutPage'>
            <h1>About</h1>
            <h2>Disclaimer</h2> <hr/>
            <DisclaimerPage />
            <br/>
            <h2>Myself</h2> <hr/>
            <div className='aboutMyself'>
                Hello world ! My name is Faddoul El-Achkar Raed and I was born the 10/11/1999. 
                I'm a lebanese guy currently living in Ivory Coast and I am a huge fan of learning.  
                If you want to learn more about myself, please do check my personal  
                <a target="_blank" rel='noreferrer' href='https://gitraed.github.io/portfolio/'> website</a> <br/>
                This web app was made with React, create-react-app and react-fontawesome. 
            </div>
            <br/>
            <h2>My contacts</h2> <hr/>
            <div className='contacts'>
                <table>
                    <tbody>
                        <tr>
                            <td className="colone1">My Email :</td>
                            <td><a target="_blank" href="mailto:raedfaddoul@gmail.com" rel="noreferrer"> raedfaddoul@gmail.com</a> </td>
                        </tr>

                        <tr>
                            <td className="colone1">My Github :</td>
                            <td><a target="_blank" href="https://github.com/gitRaed" rel="noreferrer">gitRaed</a> </td>
                        </tr>

                        <tr>
                            <td className="colone1">My LinkedIn :</td>
                            <td> <a target="_blank" href="https://www.linkedin.com/in/raed-faddoul-63b414193/" rel="noreferrer"> Faddoul Raed</a> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}