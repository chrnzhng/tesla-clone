import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import './tesla-s.css'

class TeslaS extends Component {
    render() {
        var settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1
        };

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
                            <p>Model S is designed from the ground up to be the safest, most exhilarating
                                sedan on the road. With unparalleled performance delivered through Tesla's
                                unique, all-electric powertrain, Model S accelerates from 0 to 60 mph in as
                                little as 2.5 seconds. Model S comes with Autopilot capabilities designed to
                                make your highway driving not only safer, but stress free.</p>

                        </div>
                        <div className="perf-btm">
                            <div className="perf-btm-container">
                                <img
                                    className="perf-snap"
                                    src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/performance.PNG"/>
                            </div>
                        </div>
                        <div className="news-update">
                            <p>Be the first to receive the latest Tesla news, events and product updates.</p>
                            <button className="newsletter-btn">
                                <p>GET NEWSLETTER</p>
                            </button>
                        </div>

                    </div>
                </section>
                <section className="self-driving">
                    <h1 className="self-drive-header">Full Self-Driving Hardware on your Model S</h1>
                    <img
                        className="self-drive-vid"
                        src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/video.jpg"/>
                    <p>All Tesla vehicles produced in our factory, including Model 3, have the
                        hardware needed for full self-driving capability at a safety level substantially
                        greater than that of a human driver.</p>
                    <div className="order-learn-btns">
                        <button>Order Now</button>
                        <button>Learn More</button>
                    </div>
                </section>
                <section className="all-wheel-drive">
                    <h1 className="all-wheel-header">Electric All-Wheel Drive</h1>

                    <img
                        className="all-wheel-pic"
                        src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+1.jpeg"></img>
                    <div className="group-btn-wheel">
                        <button className="dm-btn">Dual Motor</button>
                        <button className="p100d"></button>
                        <button className="sm-btn">Single Motor</button>
                    </div>
                    <div className="self-drive-btm">
                        <div className="self-drive-para">
                            <p>Dual Motor Model S is a categorical improvement on conventional all-wheel
                                drive systems. With two motors, one in the front and one in the rear, Model S
                                digitally and independently controls torque to the front and rear wheels. The
                                result is unparalleled traction control in all conditions.<br></br>
                                <br></br>
                                Conventional all-wheel drive cars employ complex mechanical linkages to
                                distribute power from a single engine to all four wheels. This sacrifices
                                efficiency in favor of all weather traction. In contrast, each Model S motor is
                                lighter, smaller and more efficient than its rear wheel drive counterpart,
                                providing both improved range and faster acceleration.<br></br>
                                <br></br>
                                Model S Performance comes standard with All-Wheel Drive Dual Motor, pairing the
                                high performance rear motor with a high efficiency front motor to achieve
                                supercar acceleration, from zero to 60 miles per hour in 2.5 seconds.</p>
                        </div>
                        <div className="self-drive-thumb-vid">
                            <img
                                className="self-drive-thumb"
                                src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/video2.jpg"/>
                            <p>
                                Winter Challenge on snow and ice<br></br>
                                A professional winter driving class, carried out by the Swiss<br></br>
                                Touring Club.</p>
                        </div>
                    </div>
                </section>
                <section className="driver-built">
                    <h1>Built around the driver</h1>
                    <p>Model S is a driver's car. The cabin combines meticulous noise engineering
                        with Tesla's uniquely quiet powertrain to obtain the sound dynamics of a
                        recording studio. The gem of the interior is the 17 inch touchscreen, which is
                        angled toward the driver and includes both day and night modes for better
                        visibility without distraction. It puts rich content at your fingertips and
                        provides mobile connectivity so you can easily find your destination, favorite
                        song or a new restaurant.</p>
                        <Slider className="driver-carousel" {...settings}>
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+4.jpeg"/></div>
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+5.jpeg"/></div>
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+6.jpeg"/></div>
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+7.jpeg"/></div>
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+8.jpeg"/></div>
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+9.jpeg"/></div>
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+10.jpeg"/></div>  
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+11.jpeg"/></div>  
                            <div><img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+12.jpeg"/></div>                              
                        </Slider>

                </section>
            </div>
        );
    }
}

export default TeslaS;