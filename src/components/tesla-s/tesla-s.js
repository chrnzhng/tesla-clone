import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import './tesla-s.css'

class TeslaS extends Component {
    render() {
        var settings = {
            arrows: false,
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
                            <Link className="logo-link" to="/">
                                <img
                                    className="logo"
                                    src='https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-landing/tsla-logo.svg'
                                    alt="tsla-logo"/></Link>
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
                    <iframe
                        src="https://player.vimeo.com/video/192179726?color=ff0000&amp;title=0&amp;byline=0&amp;portrait=0"
                        width="450"
                        height="253"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen></iframe>

                    <p>All Tesla vehicles produced in our factory, including Model 3, have the
                        hardware needed for full self-driving capability at a safety level substantially
                        greater than that of a human driver.</p>
                    <div className="order-learn">
                        <button className="order-learn-btns">Order Now</button>
                        <button className="order-learn-btns">Learn More</button>
                    </div>
                </section>
                <section className="all-wheel-drive">
                    <h1 className="all-wheel-header">Electric All-Wheel Drive</h1>
                    <Slider>
                        <div>
                            <img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+1.jpeg"></img>
                        </div>
                        <div>
                            <img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+2.jpeg"></img>
                        </div>
                        <div>
                            <img src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+3.jpeg"></img>
                        </div>
                    </Slider>
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
                            {/* <img
                                className="self-drive-thumb"
                                src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/video2.jpg"/> */}
                            <iframe
                                src="https://player.vimeo.com/video/157661320?color=ff0000&amp;title=0&amp;byline=0&amp;portrait=0"
                                width="450"
                                height="253"
                                frameborder="0"
                                webkitallowfullscreen
                                mozallowfullscreen
                                allowfullscreen></iframe>
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
                        <div><img
                            src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+10.jpeg"/></div>
                        <div><img
                            src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+11.jpeg"/></div>
                        <div><img
                            src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+12.jpeg"/></div>
                    </Slider>

                </section>
                <section className="safety">
                    <div className="safety-container">
                        <div className="safety-lt">
                            <h1>Safety</h1>
                            <p>
                                Model S is designed from the ground up to be the safest car on the road. Much of
                                its safety is owed to the unique electric drivetrain that sits beneath the car's
                                aluminum occupant cell in its own subframe. This unique positioning lowers the
                                car's center of gravity, which improves handling and minimizes rollover risk,
                                and replaces the heavy engine block with impact absorbing boron steel rails.<br></br>
                                <br></br>
                                Side impacts are met by aluminum pillars reinforced with steel rails to reduce
                                intrusion, protecting occupants and the battery pack while improving roof
                                stiffness. In the event of an accident, eight airbags protect front and rear
                                occupants, and the high voltage power source is automatically disconnected.</p>
                        </div>
                        <div className="safety-rt">
                            {/* <img
                            className="safety-thumb"
                            src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/video3.jpg"/> */}
                            <iframe
                                src="https://player.vimeo.com/video/155718470?color=ff0000&amp;title=0&amp;byline=0&amp;portrait=0"
                                width="450"
                                height="253"
                                frameborder="0"
                                webkitallowfullscreen
                                mozallowfullscreen
                                allowfullscreen></iframe>
                            <p>What it means to be safe<br></br>
                                Jim survives a life changing collision thanks to his Model S.</p>
                        </div>

                    </div>
                </section>
                <section className="touch-screen">
                    <div className="touch-screen-container">
                        <div className="column-one">
                            <h1>The touchscreen</h1>
                            <p>The Model S 17 inch touchscreen controls most of the car's functions. Opening
                                the all glass panoramic roof, customizing the automatic climate control, and
                                changing the radio station all happen with a swipe or a touch. The touchscreen,
                                digital instrument cluster, and steering wheel controls seamlessly integrate
                                media, navigation, communications, cabin controls and vehicle data.</p>
                            <iframe
                                src="https://player.vimeo.com/video/155718467?color=ff0000&amp;title=0&amp;byline=0&amp;portrait=0"
                                width="450"
                                height="253"
                                frameborder="0"
                                webkitallowfullscreen
                                mozallowfullscreen
                                allowfullscreen></iframe>
                            <p>A more useful driving experience<br></br>
                                Cutting edge technology enhances Simon's driving<br></br>
                                experience.</p>
                        </div>
                        <div className="column-two">
                            <p>
                                Media<br></br>
                                AM/FM/HD radio, online radio, on-<br></br>demand Internet radio, Bluetooth®,<br></br>
                                and USB audio devices<br></br>
                                <br></br>
                                Camera<br></br>
                                High definition backup camera,<br></br>
                                optimized for visibility and safety<br></br>
                                <br></br>
                                Map<br></br>
                                Simple, intuitive Google Maps™<br></br>
                                with real time traffic information<br></br>
                                <br></br>
                                Energy<br></br>
                                Real time energy consumption and<br></br>
                                range estimation</p>

                        </div>
                        <div className="column-three">
                            <p>
                                Controls<br></br>
                                Driving personalization, climate
                                <br></br>controls, and cabin controls<br></br>
                                <br></br>
                                <br></br>
                                Calendar<br></br>
                                Calendar synchronization for daily
                                <br></br>
                                schedule and tap to navigate<br></br>
                                <br></br>
                                Navigation<br></br>
                                Smart routing that adjusts for real
                                <br></br>
                                time traffic conditions<br></br>
                                <br></br>
                                Phone<br></br>
                                Bluetooth-enabled, voice controlled
                                <br></br>
                                handsfree phone system</p>
                        </div>

                    </div>

                </section>
                <section className="software">
                    <div className="software-banner">
                        <img
                            className="software-banner-pic"
                            src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+26.jpeg"/>
                    </div>
                    <div className="software-updates">
                        <h1>Software Updates</h1>
                        <p>All Tesla vehicles with Enhanced Autopilot and the latest software<br></br>
                            update now have Autosteer up to 90 mph, Auto Lane Change,<br></br>
                            Summon (Beta), and Automatic Emergency Braking.</p>
                        <br></br>
                        <br></br>
                        <button>LEARN MORE</button>
                    </div>

                </section>
                <section className="range-hero">
                    <div className="range-car-container">
                        <h1>Range Per Charge</h1>
                        {/* <p>The actual amount of range that you experience will vary based on your
                            particular use conditions. See how particular use conditions may affect your<br></br>
                            range in our simulation model.<br></br>
                            <br></br>
                            Vehicle range may vary depending on the vehicle configuration, battery age and
                            condition, driving style and operating, environmental and climate<br></br>
                            conditions.</p> */}
                        <div className="range-car">
                            <img
                                src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+27.jpeg"/>
                            <img
                                className="range-car-w1"
                                src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+13.png"/>
                            <img
                                className="range-car-w2"
                                src="https://s3-us-west-1.amazonaws.com/tesla-clone/tesla-s/asset+13.png"/>
                        </div>
                    </div>

                </section>
                <section className="range-calc">
                    <table className="range-table">
                        <thead>
                            <tr>
                                <td>75</td>
                                <td>75D</td>
                                <td>100D</td>
                                <td>P100D</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>265<sup>MI</sup>
                                </td>
                                <td>275<sup>MI</sup>
                                </td>
                                <td>351<sup>MI</sup>
                                </td>
                                <td>337<sup>MI</sup>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div className="range-controls">
                        <div className="range-ctrl-speeds"></div>
                        <div className="range-ctrl-temps"></div>
                        <div className="range-ctrl-ac">
                            <button className="ac-toggle">AC OFF</button>
                        </div>
                        <div className="range-ctrl-wheels"></div>
                        <div className="range-ctrl-wheels2"></div>

                    </div>
                </section>
            </div>
        );
    }
}

export default TeslaS;