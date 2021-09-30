import './style/footer.scss'

export default function Footer() {
    return (
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
    )
}
