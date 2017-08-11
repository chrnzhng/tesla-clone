import React, {Component} from 'react';
import './landing-page.css';

class LandingPage extends Component {
    render() {
        return (

            <div className="background">
                <div className="header">
                    <img className="logo" src='https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-landing/tsla-logo.svg' />
                    <ul className="header-nav-lnk">
                        <li>MODEL S</li>
                        <li>MODEL X</li>
                        <li>MODEL 3</li>
                        <li>ENERGY </li>
                        
                    </ul>
                </div>
                <video src={require('./landing-vid.mp4')} autoPlay loop></video>
                <div className="intro-container">
                <div className="wrapper-intro">
                    <h1>Quickest Acceleration.<br></br>
                        Longest Range. The Safest Cars Ever.</h1>
                <div className="group-btn">
                    <button>ORDER YOURS</button>
                    <button>NEW INVENTORY</button>
                    <button>USED INVENTORY</button>
                    <button>TEST DRIVE</button>
                </div>
                <div className="newsletter">
                    <h5>GET THE NEWSLETTER</h5>
                </div>
                </div>
                </div>
            </div>

        );
    }
}

export default LandingPage;