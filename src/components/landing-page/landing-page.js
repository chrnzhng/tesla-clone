import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                                src='https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-landing/tsla-logo.svg'
                                alt="tsla-logo"/>
                            <ul className="header-nav-lnk">
                                <Link to="/teslas">
                                    <li><p>MODEL S</p></li>
                                </Link>
                                <li><p>MODEL X</p></li>
                                <li><p>MODEL 3</p></li>
                                <li><p>ENERGY</p>
                                </li>
                            </ul>
                            <ul className="header-nav-lnk">
                                <li><p>CHARGING</p></li>
                                <li><p>UPDATES</p></li>
                                <li><p>SUPPORT</p></li>
                                <li><p>FIND US</p></li>
                                <li><p>SHOP</p></li>
                                <li><p>MY TESLA</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <video src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-landing/landing-vid.mp4" autoPlay loop alt="car-showcase"></video>
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