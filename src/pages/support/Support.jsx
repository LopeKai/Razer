import React from 'react'
import { Link } from 'react-router-dom'

import './style/support.scss'

import iconPc from '../../image/support/icon/icon1.svg'
import iconConsole from '../../image/support/icon/icon2.svg'
import iconMobile from '../../image/support/icon/icon3.svg'
import iconLifestyle from '../../image/support/icon/icon4.svg'
import iconServices from '../../image/support/icon/icon5.svg'
import iconReplacement from '../../image/support/icon/icon6.svg'
import iconInsider from '../../image/support/icon/icon7.svg'
import iconHelpe from '../../image/support/icon/icon8.svg'

const Support = () => {
    return (
        <div className="support">

            {/*--------- Welcome ---------- */}
            <div className="support__welcome">
                <h1>Welcome to Razer Support</h1>
                <p>We’re here to help</p>
                <div>
                    <input type="text" placeholder="Search Support (e.g. Blade Pro)" />
                    <button>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
            </div>

            {/*--------- Icon ---------- */}
            <div className="newIcon">
                <div className="newIcon-container">
                    <div>
                        <img src={iconPc} alt="pc" />
                        <Link>
                            <button className="button-newConsole">PC</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconConsole} alt="Console" />
                        <Link>
                            <button className="button-newConsole">Console</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconMobile} alt="Mobile" />
                        <Link>
                            <button className="button-newConsole">Mobile</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconLifestyle} alt="Lifestyle" />
                        <Link>
                            <button className="button-newConsole">Lifestyle</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconServices} alt="Services" />
                        <Link>
                            <button className="button-newConsole">Services</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconReplacement} alt="Replacement " />
                        <Link>
                            <button className="button-newConsole">Replacement Parts</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/*--------- Popular support ---------- */}
            <div className="support__popularSupport">
                <div className="support__popularSupport-container">
                    <div>
                        <h2>Popular Support Videos</h2>
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.youtube.com/watch?v=SkmYiAB3BlE">Get a Razer keyboard out of demo mode</a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.youtube.com/watch?v=ATdDlpTux50">Resolve Razer headset with audio issues</a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.youtube.com/watch?v=sBs_Q-kNaOk">Fix Razer Synapse when it does not start</a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.youtube.com/watch?v=2WcHNJwW0Wk">Troubleshoot and resolve headset mic issues</a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.youtube.com/watch?v=kEaIDhqHLIA">Detect Razer devices in Synapse 3</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Popular Support Topics</h2>
                        <ul>
                            <li>
                                <a target="_blank" href="https://mysupport.razer.com/app/answers/detail/a_id/3773/?_ga=2.67048878.1010498874.1634669082-1119585736.1619487270&_gl=1*1427ec1*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg0MDY0Ni4xNi4xLjE2MzQ4NDE0NzAuNDA.">Razer ID FAQs</a>
                            </li>

                            <li>
                                <a target="_blank" href="https://mysupport.razer.com/app/answers/detail/a_id/3783/">Razer Synapse 3 FAQs</a>
                            </li>

                            <li>
                                <a target="_blank" href="https://mysupport.razer.com/app/answers/detail/a_id/5512/?_ga=2.87438616.1010498874.1634669082-1119585736.1619487270&_gl=1*34t34k*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg0MDY0Ni4xNi4xLjE2MzQ4NDE2ODQuMTk.">Blade 14" (2021) Windows 10 activation issue</a>
                            </li>

                            <li>
                                <a target="_blank" href="https://mysupport.razer.com/app/answers/detail/a_id/4166/?_ga=2.256711819.1010498874.1634669082-1119585736.1619487270&_gl=1*5uccc5*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg0MDY0Ni4xNi4xLjE2MzQ4NDE3MTAuNTM.">Firmware updates for Razer Peripherals</a>
                            </li>

                            <li>
                                <a target="_blank" href="https://mysupport.razer.com/app/answers/detail/a_id/1835/?_ga=2.256711819.1010498874.1634669082-1119585736.1619487270&_gl=1*ia0vol*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg0MDY0Ni4xNi4xLjE2MzQ4NDE3MzUuMjg.">Device is not detected by Razer Synapse</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*--------- Registration ---------- */}
            <div className="support__registration">
                <div className="support__registration-container">
                    <div>
                        <h2>Registration &amp; <br/> Warranty</h2>
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.razer.com/warranty?_gl=1*ot08ff*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI2NDQuNTQ.&_ga=2.63888943.1010498874.1634669082-1119585736.1619487270">Warranty FAQ <span>&gt;</span></a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.razer.com/product-registration?_gl=1*1fquy9g*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI2NTguNDA.&_ga=2.63888943.1010498874.1634669082-1119585736.1619487270">Product Registration <span>&gt;</span></a>
                            </li>

                            <li>
                                <a target="_blank" href="https://mysupport.razer.com/app/rma_lookup?_gl=1*1j5frl*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI2NjQuMzQ.&_ga=2.59570477.1010498874.1634669082-1119585736.1619487270">RMA Status <span>&gt;</span></a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2> Online Store </h2>
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.razer.com/shipping-guide?_gl=1*14397kb*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI2NzMuMjU.&_ga=2.97458463.1010498874.1634669082-1119585736.1619487270">Shipping Guide <span>&gt;</span></a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.razer.com/legal/returns-refunds?_gl=1*1k26cib*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI3MjYuNjA.&_ga=2.97458463.1010498874.1634669082-1119585736.1619487270">Returns &amp; Refunds <span>&gt;</span></a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.razer.com/why-buy-from-razerstore?_gl=1*vczipd*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI3MzkuNDc.&_ga=2.97458463.1010498874.1634669082-1119585736.1619487270">Razer Advantage <span>&gt;</span></a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2> RazerCare </h2>
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.razer.com/razercare?_gl=1*b5uowm*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI3NDguMzg.&_ga=2.97458463.1010498874.1634669082-1119585736.1619487270">RazerCare Protection <br/> Plan <span>&gt;</span></a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.razer.com/shop/replacement-parts/replacement-parts-audio?_gl=1*1dgxpk1*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI3NTYuMzA.&_ga=2.97458463.1010498874.1634669082-1119585736.1619487270">Replacement Parts <span>&gt;</span></a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2> Online Services </h2>
                        <ul>
                            <li>
                                <a target="_blank" href="https://razerid.razer.com/?_gl=1*15tymde*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2MjYzOC4xOS4xLjE2MzQ4NjI3NjkuMTc.&_ga=2.97458463.1010498874.1634669082-1119585736.1619487270">Manage My Razer ID <span>&gt;</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*--------- Razer insider ---------- */}
            <div className="support__needHelp">
                <div className="support__needHelp-container">
                    <div>
                        <img src={iconInsider}/>
                        <div className="containerTitle">
                            <h2>RAZER INSIDER</h2>
                            <p>Have a question? Ask the Razer Community for help!</p>
                            <a target="_blank" href="https://insider.razer.com/index.php?forums/support/&_gl=1*3dmvgi*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2NDcyNi4yMC4xLjE2MzQ4NjQ3OTQuNjA.&_ga=2.54000168.1010498874.1634669082-1119585736.1619487270">Enter Insider</a>
                        </div>
                    </div>

                    <div>
                        <img src={iconHelpe}/>
                        <div className="containerTitle">
                            <h2>NEED HELP?</h2>
                            <p>Get support by phone, chat, or email</p>
                            <a target="_blank" href="https://insider.razer.com/index.php?forums/support/&_gl=1*3dmvgi*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDg2NDcyNi4yMC4xLjE2MzQ4NjQ3OTQuNjA.&_ga=2.54000168.1010498874.1634669082-1119585736.1619487270">Contact Support</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*--------- Razer care---------- */}

            <div className="support__razerCare">
                <div className="support__razerCare-container">
                    <a target="_blank" href="https://www.razer.com/razercare?_gl=1*ruorns*_ga*MTExOTU4NTczNi4xNjE5NDg3Mjcw*_ga_3TRK53PM75*MTYzNDkxOTAyNy4yMi4wLjE2MzQ5MTkwMjcuNjA.&_ga=2.92215450.1010498874.1634669082-1119585736.1619487270">
                        <h2>Get RazerCare With your Razer gear today</h2>
                    </a>
                </div>
            </div>

            {/*--------- Razer care---------- */}
            <div className="support__razerProgram">
                <div className="support__razerProgram-container">
                    <div>
                        <a target="_blank" href="http://www.dnagroup.us/takeback/">Razer Recycle Program</a>
                        <p>Razer has partnered with DNA Group to provide programs in recycling Razer products free of charge.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Support