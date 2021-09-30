import React from 'react'
import { Link } from 'react-router-dom'

import './style/mobile.scss'

import play from '../../image/console/newConsole/play.svg'

import iconController from '../../image/mobile/icons/controllers.svg'
import iconAudio from '../../image/mobile/icons/audio.svg'
import iconHifi from '../../image/mobile/icons/hifi.svg'
import iconSmart from '../../image/mobile/icons/smart.svg'
import iconCases from '../../image/mobile/icons/cases.svg'
import iconAccessories from '../../image/mobile/icons/accessories.svg'
import iconCustoms from '../../image/mobile/icons/customs.svg'
import iconCortex from '../../image/mobile/icons/cortex.svg'
import iconAndroid from '../../image/mobile/icons/android.svg'
import iconIos from '../../image/mobile/icons/ios.svg'

import imgRazerKishi from '../../image/mobile/consoles/image1.jpg'
import imgRazerRaiju from '../../image/mobile/consoles/image2.jpg'
import imgRazerJunglecat from '../../image/mobile/consoles/image3.jpg'

import imgRazerAnzu from '../../image/mobile/peripherals/image1.jpg'
import imgRazerHammerhead from '../../image/mobile/peripherals/image2.jpg'
import imgRazerOpus from '../../image/mobile/peripherals/image3.jpg'

import imgRazerArctech from '../../image/mobile/products/image1.jpg'
import imgRazerCharging from '../../image/mobile/products/image2.jpg'
import imgRazerGaming from '../../image/mobile/products/image4.png'

const Mobile = () => {
    return (
        <div className="mobile">
            <div className="newIcon">
                <div className="newIcon-container">
                    <div>
                        <img src={iconController} alt="Controllers" />
                        <Link>
                            <button className="button-newConsole">Controllers</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconAudio} alt="Audio" />
                        <Link>
                            <button className="button-newConsole">Audio</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconHifi} alt="Hifi Audio" />
                        <Link>
                            <button className="button-newConsole">Hi-Fi Audio</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconSmart} alt="Smart Glasses" />
                        <Link>
                            <button className="button-newConsole">Smart Glasses</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconCases} alt="Cases" />
                        <Link>
                            <button className="button-newConsole">Cases</button>
                        </Link>
                        <p>New</p>
                    </div>

                    <div>
                        <img src={iconAccessories} alt="Accessories" />
                        <Link>
                            <button className="button-newConsole">Accessories</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconCustoms} alt="Customs" />
                        <Link>
                            <button className="button-newConsole">Customs</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconCortex} alt="Cortex" />
                        <Link>
                            <button className="button-newConsole">Cortex Games</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconAndroid} alt="Android" />
                        <Link>
                            <button className="button-newConsole">Android Apps</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconIos} alt="iOS" />
                        <Link>
                            <button className="button-newConsole">iOS Apps</button>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="description">
                <h1> ENGINEERED FOR THE GAME, DESIGNED FOR LIFE </h1>
                <p>
                    This is freedom of play, redefined. Our mobile gaming and lifestyle audio products are
                    crafted to seamlessly integrate gaming into every aspect of your life.
                </p>
            </div>

            {/*----------- console Bring ------------*/}
            <div className="mobile__consoleBring">
                <div className="description">
                    <h1 className="colorWhite">BRING YOUR A-GAME ANYWHERE</h1>
                    <p>
                        The luxury of playing your favorite AAA game is no longer confined to the domain of PC
                        or Console—you can now savor this experience on your smartphone or tablet anywhere you go with mobile controllers.
                    </p>
                    <button>Learn More &gt;</button>
                </div>
            </div>

            {/*----------- console products ------------*/}
            <div className="mobile__consoleProducts">
                <div className="razer-grid">
                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerKishi} alt="razer kishi" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER KISHI</h2>
                            <p>
                                Make your move with our award-winning universal mobile controller that fits most
                                smartphone devices, designed to bring console-level control and comfort to your on-the-go gaming.
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>

                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerRaiju} alt="razer kishi" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER RAIJU MOBILE</h2>
                            <p>
                                Armed with full-fledged advanced features, this gaming controller syncs with your Android
                                mobile device to deliver the ultimate competitive edge
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>

                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerJunglecat} alt="Junglecat" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER JUNGLECAT</h2>
                            <p>
                                Elevate your precision and execution with a portable dual-sided gaming controller for
                                Android packed with features that will secure you the top spot in the hunt.
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>
                </div>
            </div>

            {/*----------- SYNC  ------------*/}
            <div className="mobile__sync">
                <div className="description">
                    <h1 className="colorWhite">STAY IN-SYNC WITH YOUR WORLD</h1>
                    <p>
                        Whether you’re working from home or immersed in entertainment,
                        our industry-leading Bluetooth low-latency audio deliver smooth, stutter-free sound and seamless connectivity.
                    </p>
                    <button>Learn More &gt;</button>
                </div>
            </div>

            {/*----------- peripherals  ------------*/}
            <div className="mobile__peripherals">
                <div className="razer-grid">
                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerAnzu} alt="RAZER ANZU" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER ANZU</h2>
                            <p>
                                See and hear the world in a different light with cutting-edge audio
                                glasses that protect your eyes and immerse your ears.
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>

                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerHammerhead} alt="RAZER HAMMERHEAD" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER HAMMERHEAD TRUE WIRELESS PRO</h2>
                            <p>
                                Take your audio immersion to new heights with THX® Certified true wireless
                                earbuds that deliver breathtaking audio quality and advanced active noise cancellation.
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>

                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerOpus} alt="RAZER OPUS" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER OPUS</h2>
                            <p>
                                Savor pure, high-fidelity sound with zero distractions with wireless THX®
                                Certified headphones that feature advanced active noise cancellation for an uninterrupted audio experience.
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>
                </div>
            </div>

            {/*----------- Extra ------------*/}
            <div className="mobile__extra">
                <div className="description">
                    <h1 className="colorWhite">GO THE EXTRA MILE</h1>
                    <p>
                        When you’re filling those few minutes in line at the coffee shop or commuting
                        to work with a quick game or listening to that banger on repeat, Razer has the accessory that lets fellow gamers know they’re among their own.
                    </p>
                    <button>Learn More &gt;</button>
                </div>
            </div> accessories

            {/*----------- accessories ------------*/}
            <div className="mobile__accessories">
                <div className="razer-grid">
                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerArctech} alt="RAZER ARCTECH" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER ARCTECH CASES</h2>
                            <p>
                                Protect your investment while experiencing better device performance and improved phone cooling with a
                                Thermaphene Performance layer for maximum heat dissipation.
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>

                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerCharging} alt="RAZER CHARGING" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER CHARGING PAD CHROMA</h2>
                            <p>
                                Keep your devices powered up and setup blazing bright with 10W wireless fast charging and Razer Chroma™ RGB.
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>

                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerGaming} alt="RAZER GAMING" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER GAMING FINGER SLEEVE</h2>
                            <p>
                                Non-Slip Finger Sleeve for Mobile Gaming
                            </p>
                        </div>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Mobile