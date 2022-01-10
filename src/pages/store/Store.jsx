import React from 'react'
import { Link } from 'react-router-dom'

import './style/store.scss'

import iconBag from '../../image/store/icon/iconbag.svg'
import iconSystems from '../../image/store/icon/icon1.png'
import iconMice from '../../image/store/icon/icon2.png'
import iconKeyboards from '../../image/store/icon/icon3.png'
import iconAudio from '../../image/store/icon/icon4.png'
import iconStream from '../../image/store/icon/icon5.png'
import iconChairs from '../../image/store/icon/icon6.png'
import iconConsole from '../../image/store/icon/icon7.png'
import iconMobile from '../../image/store/icon/icon8.png'
import iconAcessories from '../../image/store/icon/icon9.png'
import iconGear from '../../image/store/icon/icon10.png'
import iconRazerGear from '../../image/store/icon/icon11.svg'
import iconRazerGearSwag from '../../image/store/icon/icon12.svg'
import iconFastProcessing from '../../image/store/icon/icon13.svg'
import iconPlayNow from '../../image/store/icon/icon14.svg'

import image1 from '../../image/store/imagenoot.jpg'
import image2 from '../../image/store/imagenoot2.jpg'
import image3 from '../../image/store/imagenoot3.jpg'
import imageExclusives from '../../image/store/image3.png'
import imageRazerCustoms from '../../image/store/image4.png'
import imageCollabs from '../../image/store/image5.png'
import imageProgams from '../../image/store/image6.png'
import imageReplacement from '../../image/store/image7.jfif'
import imageLastChance from '../../image/store/image8.png'


function Store() {
    
    return (
        <div className="store">
            <div className="limitedTime">
                <p>
                    New Year Specials: Usher in the unfair advantage with our exclusive deals and free shipping on orders over $49.
                </p>
                <a href="https://www.razer.com/campaigns/halloween" target="_blank"><p>Learn More {'>'}</p></a>
            </div>

            <div className="store__gaming">
                <h1>THE LATEST AND GREATEST GAMING GEAR, <span>ONLY AT RAZER.COM</span></h1>

                <div className="store__gaming_containerButton">
                    <img src={iconBag} />
                    <button>Find a RazerStore <br /> near your <span>&gt;</span></button>
                </div>
            </div>

            <div className="newIcon">
                <div className="newIcon-container">
                    <div>
                        <img src={iconSystems} alt="" />
                        <Link>
                            <button className="button-newConsole">Systems</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconMice} alt="" />
                        <Link>
                            <button className="button-newConsole">Mice</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconKeyboards} alt="" />
                        <Link>
                            <button className="button-newConsole">Keyboards</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconAudio} alt="" />
                        <Link>
                            <button className="button-newConsole">Audio</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconStream} alt="" />
                        <Link>
                            <button className="button-newConsole">Streaming</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconChairs} alt="" />
                        <Link>
                            <button className="button-newConsole">Chairs</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconConsole} alt="" />
                        <Link>
                            <button className="button-newConsole">Console</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconMobile} alt="" />
                        <Link>
                            <button className="button-newConsole">Mobile</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconAcessories} alt="" />
                        <Link>
                            <button className="button-newConsole">Acessories</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconGear} alt="" />
                        <Link>
                            <button className="button-newConsole">Gear</button>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="store__slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />

                    <div className="slide first">
                        <div className="title">
                            <h2>RAZER BLADE 15</h2>
                            <h3>POWER. PERFORMANCE. PERFECTION.</h3>
                        </div>
                        <img src={image1} alt="" />
                    </div>

                    <div className="slide">
                        <div className="title">
                            <h2>RAZER BLADE 17</h2>
                            <h3>RAZER BLADE 17</h3>
                        </div>
                        <img src={image2} alt="" />
                    </div>

                    <div className="slide">
                        <div className="title">
                            <h2>RAZER ENKI PRO HYPERSENSE</h2>
                            <h3>ALL-DAY COMFORT. ALL-IN IMMERSION</h3>
                        </div>
                        <img src={image3} alt="" />
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                    </div>
                </div>

                <div className="navigation-manual">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>
                </div>
            </section>

            <section className="store__buy">
                <div className="store__buy-container">
                    <h2>Why buy from Razer.com</h2>
                    <div>
                        <div>
                            <img src={iconRazerGear} />
                            <h4>The Largest Array Of RAzer Gear</h4>
                            <p>
                                Razer.com is the official online Razer store where you can purchase the
                                latest Razer gear and discover exclusive deals.
                            </p>
                        </div>

                        <div>
                            <img src={iconRazerGearSwag} />
                            <h4>Exclusive Razer Gear And Swag</h4>
                            <p>
                                Get limited edition Razer gear which you can only find on Razer.com.
                            </p>
                        </div>

                        <div>
                            <img src={iconFastProcessing} />
                            <h4>Fast Processing And Delivery</h4>
                            <p>
                                We get just as excited whenever we purchase gaming gear too. 
                                That’s why we make sure your order will always be delivered on time, depending on your chosen shipping method.
                            </p>
                        </div>

                        <div>
                            <img src={iconPlayNow} />
                            <h4>Play Now,Pay Later</h4>
                            <p>
                                With our 0% installment plan, spend more time gaming with your sweet new gear and less time fussing over payment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="store__exclusives">
                <div className="store__exclusives-container">
                    <div>
                        <img src={imageExclusives} />
                        <h3>Exclusives</h3>
                    </div>

                    <div>
                        <img src={imageRazerCustoms} />
                        <h3>Razer Customs</h3>
                    </div>

                    <div>
                        <img src={imageCollabs} />
                        <h3>Collabs</h3>
                    </div>

                    <div>
                        <img src={imageProgams} />
                        <h3>Purchase Programs</h3>
                    </div>

                    <div>
                        <img src={imageReplacement} />
                        <h3>Replacement Parts</h3>
                    </div>

                    <div>
                        <img src={imageLastChance} />
                        <h3>Last Chance</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Store