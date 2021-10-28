import './style/footer.scss'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-containerNav">
                        <div>
                            <p>Shop</p>
                            <ul>
                                <li><a href="https://www.razer.com/razerstores">RazerStores</a></li>
                                <li><a href="https://www.razer.com/razerstores">Store Locator</a></li>
                                <li><a href="https://www.razer.com/razerstores">Purchase Programs</a></li>
                                <li><a href="https://www.razer.com/razerstores">Exclusives</a></li>
                                <li><a href="https://www.razer.com/razerstores">Last Chance</a></li>
                                <li><a href="https://www.razer.com/razerstores">Newsletter</a></li>
                            </ul>
                        </div>

                        <div>
                            <p>Explore</p>
                            <ul>
                                <li><a href="https://www.razer.com/razerstores">Technology</a></li>
                                <li><a href="https://www.razer.com/razerstores">Chroma RGB</a></li>
                                <li><a href="https://www.razer.com/razerstores">concepts</a></li>
                                <li><a href="https://www.razer.com/razerstores">Espots</a></li>
                                <li><a href="https://www.razer.com/razerstores">Collabs</a></li>
                            </ul>
                        </div>

                        <div>
                            <p>Support</p>
                            <ul>
                                <li><a href="https://www.razer.com/razerstores">Get Help</a></li>
                                <li><a href="https://www.razer.com/razerstores">Registration {'&'} Warranty</a></li>
                                <li><a href="https://www.razer.com/razerstores">Online store</a></li>
                                <li><a href="https://www.razer.com/razerstores">RazerCare</a></li>
                                <li><a href="https://www.razer.com/razerstores">Manage Razer ID</a></li>
                            </ul>
                        </div>

                        <div>
                            <p>Company</p>
                            <ul>
                                <li><a href="https://www.razer.com/razerstores">About Us</a></li>
                                <li><a href="https://www.razer.com/razerstores">Careers</a></li>
                                <li><a href="https://www.razer.com/razerstores">Press Room</a></li>
                                <li><a href="https://www.razer.com/razerstores">Investor Relations</a></li>
                                <li><a href="https://www.razer.com/razerstores">zVentures</a></li>
                                <li><a href="https://www.razer.com/razerstores">contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-containerNav-figure">
                            <h2>FOR GAMERS. BY GAMERS.™</h2>
                            <div>
                                <a href="https://www.razer.com/razerstores"><ion-icon name="logo-facebook"></ion-icon></a>
                                <a href="https://www.razer.com/razerstores"><ion-icon name="logo-instagram"></ion-icon></a>
                                <a href="https://www.razer.com/razerstores"><ion-icon name="logo-twitter"></ion-icon></a>
                            </div>
                        </div>
                    </div>

                    <div className="border"></div>

                    <div className="footer-containerCopyright">
                        <p>Copyright © 2021 Razer Inc. All rights reserved.</p>

                        <ul>
                            <li>
                                <a href="https://www.razer.com/razerstores">Site Map</a>
                            </li>
                            <li>
                                <a href="https://www.razer.com/razerstores">Legal Terms</a>
                            </li>
                            <li>
                                <a href="https://www.razer.com/razerstores">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://www.razer.com/razerstores">Cookie Plolicy</a>
                            </li>
                        </ul>

                        <div className="unitedStates">
                            <span>United States</span>
                            <a href="https://www.razer.com/razerstores">Change location {'>'}</a>
                        </div>
                    </div>

                </div> {/*----------- End Container ----------- */}
            </footer>

            <footer className="footer__mobile">
                <div className="footer__mobile-container">
                    <div>
                        <div>
                            <p> shop </p>
                            <div className="buttonHamburguer"></div>
                        </div>
                        <ul>
                            <li>
                                <a href="https://www.razer.com/razerstores">RazerStrores</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/razercafe">RazerCafe</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/store-finder">Store Locator</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/store/programs">Purchase Programs</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/exclusives">Exclusives</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/store/last-chance">Last Chance</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/newsletter">Newsletter</a>
                            </li>

                        </ul>


                    </div>

                    <div>
                        <div>
                            <p> Explore </p>
                            <div className="buttonHamburguer"></div>
                        </div>
                        <ul>
                            <li>
                                <a href="https://www.razer.com/technology">Technology</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/chroma">Chroma RGB</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/concepts">Conceps</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/esports">Esports</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/lifestyle/collabs">Collabs</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <p> Support </p>
                            <div className="buttonHamburguer"></div>
                        </div>
                        <ul>
                            <li>
                                <a href="https://support.razer.com/?_gl=1*1c3384a*_ga*ODgzNjQ3MTE4LjE2MTg4NTMwMDY.*_ga_3TRK53PM75*MTYzNTQzNzI3OC4xMy4xLjE2MzU0Mzk1MjAuNjA.&_ga=2.186964968.1370106488.1635294226-883647118.1618853006">Get Help</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/product-registration">Registration &amp; Warranty </a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/razerstore-support">Online Store</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/razercare">RazerCare</a>
                            </li>

                            <li>
                                <a href="https://razerid.razer.com/?_gl=1*137t1t9*_ga*ODgzNjQ3MTE4LjE2MTg4NTMwMDY.*_ga_3TRK53PM75*MTYzNTQzNzI3OC4xMy4xLjE2MzU0Mzk4NzIuMzY.&_ga=2.217043158.1370106488.1635294226-883647118.1618853006">Menage Razer ID</a>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <div>
                            <p> Company </p>
                            <div className="buttonHamburguer"></div>
                        </div>
                        <ul>
                            <li>
                                <a href="https://www.razer.com/about-razer">About Us</a>
                            </li>

                            <li>
                                <a href="https://careers.razer.com/?_gl=1*13zydw2*_ga*ODgzNjQ3MTE4LjE2MTg4NTMwMDY.*_ga_3TRK53PM75*MTYzNTQzNzI3OC4xMy4xLjE2MzU0Mzk4NzIuMzY.&_ga=2.208458962.1370106488.1635294226-883647118.1618853006">Careers</a>
                            </li>

                            <li>
                                <a href="https://press.razer.com/?_gl=1%2Aig3vvt%2A_ga%2AODgzNjQ3MTE4LjE2MTg4NTMwMDY.%2A_ga_3TRK53PM75%2AMTYzNTQzNzI3OC4xMy4xLjE2MzU0NDAwMzcuNjA.&_ga=2.217430102.1370106488.1635294226-883647118.1618853006">Press Room</a>
                            </li>

                            <li>
                                <a href="https://investor.razer.com/?_gl=1*1ozy100*_ga*ODgzNjQ3MTE4LjE2MTg4NTMwMDY.*_ga_3TRK53PM75*MTYzNTQzNzI3OC4xMy4xLjE2MzU0NDAwNDYuNTE.&_ga=2.217430102.1370106488.1635294226-883647118.1618853006">Investor Relations</a>
                            </li>

                            <li>
                                <a href="https://www.zvntrs.com/">zVentures</a>
                            </li>

                            <li>
                                <a href="https://www.razer.com/contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
