import React, {Component} from 'react';
import NavLink from 'react-router-dom';
import './landing-page.css';

class LandingPage extends Component {
    render() {
        return (

            <div className="background">
                <div className="header">
                    <div className="header-container">

                        <div className="header-nav-container">
                            <img
                                className="logo"
                                src='https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-landing/tsla-logo.svg'/>
                            <ul className="header-nav-lnk">
                                <li>MODEL S</li>
                                <li>MODEL X</li>
                                <li>MODEL 3</li>
                                <li>ENERGY
                                </li>
                            </ul>
                            <ul className="header-nav-lnk">
                                <li>CHARGING</li>
                                <li>UPDATES</li>
                                <li>SUPPORT</li>
                                <li>FIND US</li>
                                <li>SHOP</li>
                                <li>MY TESLA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <video src={require('./landing-vid.mp4')} autoPlay loop></video>
                <div className="intro-container">
                    <div className="wrapper-intro">
                        <h1>Quickest Acceleration.<br></br>
                            Longest Range. The Safest Cars Ever.</h1>
                        <div className="group-btn">
                            <button className="trans-btn">
                                <p>ORDER YOURS</p>
                            </button>
                            <button className="trans-btn">
                                <p>NEW INVENTORY</p>
                            </button>
                            <button className="trans-btn">
                                <p>USED INVENTORY</p>
                            </button>
                            <button className="trans-btn">
                                <p>TEST DRIVE</p>
                            </button>
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