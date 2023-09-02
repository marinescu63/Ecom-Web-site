import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBullseye,faArrowUpRightDots, faListCheck } from '@fortawesome/free-solid-svg-icons';

import "./about.css"


export default function About(){
    return ( 
        <body >
            <div className="heading">
                <h1>About Us</h1>
            </div>
            <div className="container1">
                <div className="about-text">
                    <h1><FontAwesomeIcon className='icons' icon={faBullseye}/> Goal</h1>
                    <p>At Ecom, our primary goal is to provide users with an exceptional online experience that goes beyond their expectations. We believe that every interaction matters, and we're committed to creating a platform that is intuitive, engaging, and user-centric.</p>
                </div>
                <div className="about-text">
                                       
                <h1><FontAwesomeIcon className='icons' icon={faArrowUpRightDots} /> Growth</h1>
                    <p>We're at the beginning of an exciting journey, and we recognize that growth is a continuous process. Your feedback is valuable to us as it guides our evolution and helps us shape the future of Ecom.</p>
                    </div>
                <div className="about-text">
                    
                    <h1><FontAwesomeIcon className='icons' icon={faListCheck} /> Challenge</h1>
                    <p>We thrive on challenges that push us beyond our comfort zone. As we continue to grow and evolve, we're committed to tackling the most complex and intriguing problems in our field.</p>
                </div>
            </div>
            
            <div className="footer">
                
            <p>&copy; 2023 Ecom. All rights reserved.</p>
                
            </div>
        </body>)
}