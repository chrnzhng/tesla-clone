import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './tesla-s.css'

class TeslaS extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="header-tesla-s">
                    <div className="header-container">

                        <div className="header-nav-container">
                            <img
                                className="logo"
                                src='https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-landing/tsla-logo.svg'
                                alt="tsla-logo"/>
                            <ul className="header-nav-lnk">
                                <Link to="/teslas">
                                    <li>MODEL S</li>
                                </Link>
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
                <section className="top-section">
                    <img
                        className="tesla-s-pic"
                        src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+0.jpeg"/>
                </section>
                <section className="performance">
                    <div className="perf-container">
                        <div className="perf-large">
                           <h2>Performance and safety refined</h2>
                            <p>Model S is designed from the ground up to be
                                the safest, most exhilarating sedan on the road. With unparalleled performance
                                delivered through Tesla's unique, all-electric powertrain, Model S accelerates
                                from 0 to 60 mph in as little as 2.5 seconds. Model S comes with Autopilot
                                capabilities designed to make your highway driving not only safer, but stress
                                free.</p>

                        </div>
                        <div className="perf-btm">
                        <div className="perf-btm-container">
                            <img className="perf-snap" src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/performance.PNG" />
                        </div>
                        </div>
                        <div className="news-update">
                            <p>Be the first to receive the latest Tesla news, events and product updates.</p>
                            <button className="newsletter-btn"><p>GET NEWSLETTER</p></button>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default TeslaS;