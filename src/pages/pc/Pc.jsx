import React from 'react'
import { Link } from 'react-router-dom'

import imgLaptop from '../../image/pc/laptop.jpg'
import imgDesktop from '../../image/pc/desktop.jpg'
import imgMonitors from '../../image/pc/monitores.png'

import imgWebcam from '../../image/pc/streaming/web.jpg'
import imgMicro from '../../image/pc/streaming/micro.jpg'
import imgCapture from '../../image/pc/streaming/capture.jpg'

import imgRazerSnap from '../../image/pc/software/razerSnap.jpg'
import imgRazerChroma from '../../image/pc/software/razerChroma.jpg'
import imgRazerCortex from '../../image/pc/software/razerCortex.jpg'
import imgThx from '../../image/pc/software/thx.jpg'
import imgSound from '../../image/pc/software/sound.jpg'
import imgStreamer from '../../image/pc/software/streamer.jpg'

import './style/pc.scss'
import '../../style/gridProducts/grid.scss'

const Pc = () => {
    return (
        <div className="pc">
            <div className="pc_description">
                <h1>LAPTOPS &amp; DESKTOPS</h1>
                <p>
                    Razer systems are crafted to provide the ultimate performance for gaming and work.
                    Enjoy desktop power made mobile with our gaming and productivity laptops,
                    or go all-out for your build as you assemble the most powerful aRGB Chroma powered battlestation.
                </p>
            </div>

            <div className="razer-grid">
                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgLaptop} alt="Laptop" />
                        </Link>
                    </div>

                    <div className="container-description">
                        <h2>Laptops</h2>
                        <p>Sleek high-performance gaming laptops</p>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgDesktop} alt="Desktop" />
                        </Link>
                    </div>

                    <div className="container-description">
                        <h2>Desktops &amp; Cases</h2>
                        <p>Meticulously crafted for high-performance play</p>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgMonitors} alt="Monitors" />
                        </Link>
                    </div>

                    <div className="container-description">
                        <h2> Monitors </h2>
                        <p>Experience only the best on a superior display</p>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>
                </div>
            </div>

            <div className="pc_description">
                <h1>PERIPHERALS</h1>
                <p>
                    The most powerful rigs mean nothing without the high-performance gear to match.
                    Understand what it means to wield the unfair advantage as you experience industry-leading
                    levels of precision, control, and immersion.
                </p>
            </div>

            <div className="peripherals">
                <div className="peripherals__products productOne">
                    <h2>Mice</h2>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>

                <div className="peripherals__products productTwo">
                    <h2>Mouse Mats</h2>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>

                <div className="peripherals__products productThree">
                    <h2>Keyboards</h2>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>

                <div className="peripherals__products productFour">
                    <h2>Audio</h2>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>
            </div>

            <div className="pc_description">
                <h1>STREAMING</h1>
                <p>
                    Whether you’re finding your footing, raking in the views,
                    or somewhere in between, we’ve got gear catered to the full spectrum of streamers,
                    so you’ll always have the quality and clarity you need to keep your audience engaged and entertained.
                </p>
            </div>

            <div className="razer-grid">
                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgWebcam} alt="Webcam" />
                        </Link>
                    </div>

                    <div className="container-description">
                        <h2>Webcams</h2>
                        <p>Stunning visual fidelity for streaming and productivity</p>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgMicro}  alt="Microphones" />
                        </Link>
                    </div>

                    <div className="container-description">
                        <h2>Michophones</h2>
                        <p>Engineered for crystal-clear voice pickup</p>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgCapture} alt="Capture" />
                        </Link>
                    </div>

                    <div className="container-description">
                        <h2>Capture Card &amp; Others </h2>
                        <p>For a professional streaming advantage</p>
                        <button className="btn-learnMore" href="#">Learn More &gt;</button>
                    </div>
                </div>
            </div>

            <div className="pc_description">
                <h1>SOFTWARE</h1>
                <p>
                    Providing an optimal gaming experience to over 100 million users,
                    Razer's software platforms are designed to enhance the performance of our gear and your PC—from
                    custom keybinds to personalized Chroma effects, game optimizations to immersive audio, and more.
                </p>
            </div>

            <div className="razer-grid">
                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgRazerSnap} alt="" />
                        </Link>
                    </div>

                    <div className="container-description">
                        <h2>Razer Synapse</h2>
                        <p>
                            Maximize your unfair advantage with Razer Synapse 3,
                            the unified cloud-based hardware configuration tool that takes your Razer devices to the next lev
                        </p>
                    </div>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgRazerChroma} alt="" />
                        </Link>
                    </div>

                    <div className="container-description">
                        <h2>Razer Chroma™ Rgb</h2>
                        <p>
                            Experience full RGB customization and deeper immersion with the world’s largest lighting ecosystem that
                            supports hundreds of games and thousands of devices.
                        </p>
                    </div>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgRazerCortex} alt="" />
                        </Link>
                    </div>
                    <div className="container-description">
                        <h2>Razer Cortex</h2>
                        <p>
                            Unlock your PC’s full potential and enhance your gameplay with Razer: Cortex.
                        </p>
                    </div>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgThx} alt="" />
                        </Link>
                    </div>
                    <div className="container-description">
                        <h2>Thx Spatial Audio</h2>
                        <p>
                            Unlock full customization with a surround sound application featuring more
                            extensive audio calibration and custom-tuned game profiles.
                        </p>
                    </div>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgSound} alt="" />
                        </Link>
                    </div>
                    <div className="container-description">
                        <h2> 7.1 Surround Sound </h2>
                        <p>
                            Experience accurate positional sound for the competitive advantage.
                        </p>
                    </div>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>

                <div className="razer-products">
                    <div className="container-img">
                        <Link className="link">
                            <img src={imgStreamer} alt="" />
                        </Link>
                    </div>
                    <div className="container-description">
                        <h2> Streamer Companion App </h2>
                        <p>
                            Put on a show for your stream by customizing how your Seiren Emote or Emote
                            display reacts to your audience.
                        </p>
                    </div>
                    <button className="btn-learnMore" href="#">Learn More &gt;</button>
                </div>
            </div>

        </div>
    )
}

export default Pc