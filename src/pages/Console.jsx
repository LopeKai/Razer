import React from 'react'
import { Link } from 'react-router-dom'

import '../style/console.scss'
import '../style/gridProducts/grid.scss'

import play from '../image/console/newConsole/play.svg'
import xbox from '../image/console/newConsole/xbox.svg'
import nintendo from '../image/console/newConsole/nintendo.svg'

import imgRazerWolverine from '../image/console/products/razerWolverine.png'
import imgRazerKaira from '../image/console/products/razerKaira.png'
import imgRazerKairaPro from '../image/console/products/razerKairaPro.png'


const Console = () => {
    return (
        <div className="console">

            <div className="console__new">
                <div className="console__new-container">
                    <div>
                        <img src={xbox} alt="Xbox" />
                        <Link>
                            <button className="button-newConsole">Xbox</button>
                        </Link>
                        <p>New</p>
                    </div>

                    <div>
                        <img src={play} alt="Xbox" />
                        <Link>
                            <button className="button-newConsole">Playstation</button>
                        </Link>
                        <p>New</p>
                    </div>

                    <div>
                        <img src={nintendo} alt="Xbox" />
                        <Link>
                            <button className="button-newConsole">Switch</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="description">
                <h1> Console </h1>
                <p>
                    Whether you own a PlayStation 5, Xbox Series X|S, or Nintendo Switch,
                    enjoy complete console supremacy on any platform with our high-performance headsets, controllers, and accessories
                </p>
            </div>

            <div className="description">
                <h1 className="colorWhite"> OFFICIALLY LICENSED XBOX PRODUCTS </h1>
                <p>
                    Be spoiled for choice with access to a full selection of gear,
                    including limited edition and bundle exclusives that are hard to find anywhere else.
                </p>
            </div>

            <div className="console__controllerXbox products">
                <div className="console__controllerXbox-container">
                    <div className="description">
                        <h1 className="colorWhite"> UNIVERSAL QUICK CHARGING STANDS FOR XBOX </h1>
                        <p>
                            Fully integrated into Microsoft’s supply chain, our charging stands are created
                            with the same resin, materials, and colors as official Xbox Series X|S controllers—making them the perfect match to power your play.
                        </p>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>

                </div>
            </div>

            <div className="console__limitedEdition products">
                <div className="console__limitedEdition-container">
                    <div className="description">
                        <h1 className="colorWhite"> LIMITED EDITION WIRELESS CONTROLLERS &amp; QUICK CHARGING STANDS </h1>
                        <p>
                            Inject even more character into your Xbox setup with sets inspired
                            by your favorite games and more—exclusive designs only available on Razer.com and partner sites.
                        </p>
                        <button className="btn-learnMore" href="#"> View Limited Edition Products &gt;</button>
                    </div>
                </div>
            </div>

            <div className="console__razerKaira products">
                <div className="console__razerKaira-container">
                    <div className="description">
                        <h1 className="colorWhite"> RAZER KAIRA X </h1>
                        <p>
                            Next-Gen Audio and Comfort for Next-Gen PlayStation Gaming
                        </p>
                        <button className="btn-learnMore" href="#"> Learn More &gt;</button>
                    </div>
                </div>
            </div>

            <div className="console__razerWolverine products">
                <div className="razerWolverine-container">
                    <div className="description">
                        <h1 className="colorWhite"> RAZER WOLVERINE V2 CHROMA </h1>
                        <p>
                            Fully Customizable Xbox Series X|S, Xbox One, and PC Controller
                        </p>
                        <button className="btn-learnMore" href="#"> Learn More &gt;</button>
                    </div>
                </div>
            </div>

            <div className="console__connect products">
                <div className="console__connect-container">
                    <div className="description">
                        <h1 className="colorWhite"> CONNECT. COMPETE. CONQUER. </h1>
                        <p>
                            Arm Yourself for XBOX &amp; PC Supremacy
                        </p>
                        <button className="btn-learnMore" href="#"> Learn More &gt;</button>
                    </div>
                </div>
            </div>

            <div className="console__boldClearFresh">
                <div className="description">
                    <h1 className="colorWhite"> BOLD. CLEAN. FRESH. </h1>
                    <p>
                        Introducing our White Edition headsets and controllers for Xbox Series X|S.
                    </p>
                </div>

                <div className="razer-grid">
                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerWolverine} alt="Laptop" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER WOLVERINE V2</h2>
                            <p>
                                Wired Gaming Controller for Xbox Series X|S with additional remappable front-facing buttons
                            </p>
                            <button className="btn-learnMore" href="#">Learn More &gt;</button>
                        </div>
                    </div>

                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerKaira} alt="Laptop" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>RAZER KAIRA FOR XBOX</h2>
                            <p>
                                Wireless Xbox Series X|S headset with cutting-edge drivers and mic
                            </p>
                            <button className="btn-learnMore" href="#">Learn More &gt;</button>
                        </div>
                    </div>

                    <div className="razer-products">
                        <div className="container-img">
                            <Link className="link">
                                <img src={imgRazerKairaPro} alt="Laptop" />
                            </Link>
                        </div>

                        <div className="container-description">
                            <h2>AZER KAIRA PRO FOR XBOX</h2>
                            <p>
                                Wireless, Bluetooth-capable Xbox Series X|S headset that supports mobile Xbox gaming
                            </p>
                            <button className="btn-learnMore" href="#">Learn More &gt;</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="console__gamingAudio">
                <div className="gamingAudio"></div>
                
                <div className="description">
                    <h1 className="colorWhite">THE SCIENCE OF GREAT GAMING AUDIO</h1>
                    <p>
                        Take a look at what makes the Razer Thresher tick, as we cover the five important 
                        factors that go into making an amazing gaming headset.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Console