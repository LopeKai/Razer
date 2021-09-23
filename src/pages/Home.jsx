import '../style/home.scss'

export default function Home() {
    return (
        <section className="Home">
            <div className="limitedTime">
                <p>For a limited time, all orders over US$49 will enjoy free shipping to the
                    United States.
                </p>
                <a href="#"><p>Learn More {'>'}</p></a>
            </div>

            {/*---------- RAZER BLADE -----------*/}
            <div className="razerBlade">
                <div className="razer-containerTitle">
                    <h1>RazerStore Live</h1>
                    <h2>Revisit Our Highlights</h2>
                </div>
                <div className="containerButtons">
                    <a href="#">Learn More <span>{'>'}</span></a>
                    <a href="#">Buy <span>{'>'}</span></a>
                </div>
            </div>

            {/*---------- RAZER SCHOOL -----------*/}
            <div className="razerSchool">
                <div className="razer-containerTitle">
                    <h1>The New Razer Blade 15</h1>
                    <h2>NOW WITH 11TH GEN INTEL® PROCESSOR</h2>
                </div>
                <div className="containerButtons">
                    <a href="#">Shop Now <span>{'>'}</span></a>
                </div>
            </div>

            {/*---------- RAZER BARRACUDA X -----------*/}
            <div className="razerBarracudaX">
                <div className="razer-containerTitle">
                    <h1>Razer Wolverine V2 Chroma</h1>
                    <h2>Customize.Control.Conquer</h2>
                </div>
                <div className="containerButtons">
                    <a href="#">Learn More <span>{'>'}</span></a>
                    <a href="#">Buy <span>{'>'}</span></a>
                </div>
            </div>

            {/*---------- PRODUCTS -----------*/}
            <div className="products">
                <div className="gaming">
                    <div className="razer-containerTitle-products">
                        <h1>Razer Basilisk V3</h1>
                        <h2>Full Spectrum Customizability</h2>
                    </div>
                    <div className="containerButtons-products">
                        <a href="#">Learn More <span>{'>'}</span></a>
                        <a href="#">Buy <span>{'>'}</span></a>
                    </div>
                </div>

                <div className="newRazerBlade">
                    <div className="razer-containerTitle-products">
                        <h1>POWER UP YOUR PRODUCTIVITY</h1> 
                        <h2>RAZER BOOK STARTING AT $999.99</h2>
                    </div>
                    <div className="containerButtons-products">
                        <a href="#">Learn More <span>{'>'}</span></a>
                        <a href="#">Buy <span>{'>'}</span></a>
                    </div>
                </div>

                <div className="razerBlade14">
                    <div className="razer-containerTitle-products">
                        <h1>Razer Arctech Pro For Iphone 13</h1>
                        <h2>Lose The Heat,Win The Game</h2>
                    </div>
                    <div className="containerButtons-products">
                        <a href="#">Learn More <span>{'>'}</span></a>
                        <a href="#">Buy <span>{'>'}</span></a>
                    </div>
                </div>

                <div className="razerOrochi">
                    <div className="razer-containerTitle-products">
                        <h1>RAZER SNEKI SNEK GIANT CUSHION</h1>
                        <h2>GO BIG ON SUSTAINABILITY</h2>
                    </div>
                    <div className="containerButtons-products">
                        <a href="#">Learn More <span>{'>'}</span></a>
                        <a href="#">Buy <span>{'>'}</span></a>
                    </div>
                </div>

                <div className="razerBlackshark">
                    <div className="razer-containerTitle-products">
                        <h1>RAZER ISKUR GAMING CHAIR</h1>
                        <h2>AVAILABLE IN FABRIC XL</h2>
                    </div>
                    <div className="containerButtons-products">
                        <a href="#">Learn More <span>{'>'}</span></a>
                        <a href="#">Buy <span>{'>'}</span></a>
                    </div>
                </div>

                <div className="theBest">
                    <div className="razer-containerTitle-products">
                        <h1>RAZER BLACKWIDOW V3 MINI HYPERSPEED - PHANTOM EDITION</h1>
                        <h2>FREEDOM THROUGH FORM</h2>
                    </div>
                    <div className="containerButtons-products">
                        <a href="#">Enjoy Special Privileges <span>{'>'}</span></a>
                    </div>
                </div>
            </div>

        </section>
    )
}