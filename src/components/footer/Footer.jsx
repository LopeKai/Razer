import '../../style/footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-containerNav">
                    <div>
                        <p>Shop</p>
                        <ul>
                            <li><a href="#">RazerStores</a></li>
                            <li><a href="#">Store Locator</a></li>
                            <li><a href="#">Purchase Programs</a></li>
                            <li><a href="#">Exclusives</a></li>
                            <li><a href="#">Last Chance</a></li>
                            <li><a href="#">Newsletter</a></li>
                        </ul>
                    </div>

                    <div>
                        <p>Explore</p>
                        <ul>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Chroma RGB</a></li>
                            <li><a href="#">concepts</a></li>
                            <li><a href="#">Espots</a></li>
                            <li><a href="#">Collabs</a></li>
                        </ul>
                    </div>

                    <div>
                        <p>Support</p>
                        <ul>
                            <li><a href="#">Get Help</a></li>
                            <li><a href="#">Registration {'&'} Warranty</a></li>
                            <li><a href="#">Online store</a></li>
                            <li><a href="#">RazerCare</a></li>
                            <li><a href="#">Manage Razer ID</a></li>
                        </ul>
                    </div>

                    <div>
                        <p>Company</p>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Room</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">zVentures</a></li>
                            <li><a href="#">contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-containerNav-figure">
                        <h2>FOR GAMERS. BY GAMERS.™</h2>
                        <div>
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
                        </div>
                    </div>
                </div>

                <div className="border"></div>

                <div className="footer-containerCopyright">
                    <p>Copyright © 2021 Razer Inc. All rights reserved.</p>

                    <ul>
                        <li>
                            <a href="#">Site Map</a>
                        </li>
                        <li>
                            <a href="#">Legal Terms</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Cookie Plolicy</a>
                        </li>
                    </ul>

                    <div className="unitedStates">
                        <span>United States</span>
                        <a href="#">Change location {'>'}</a>
                    </div>
                </div>

            </div> {/*----------- End Container ----------- */}

        </footer>
    )
}
