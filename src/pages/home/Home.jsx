import './style/home.scss'

export default function Home() {
    return (
        <section className="Home"> 
            <div className="limitedTime">
                <p>For a limited time, all orders over US$49 will enjoy free shipping to the
                    United States.
                </p>
                <a href="https://www.razer.com/campaigns/halloween" target="_blank"><p>Learn More {'>'}</p></a>
            </div>

            {/*---------- RAZER BLADE -----------*/}
            <div className="razerBlade">
                <div className="razer-containerTitle">
                    <h1>RazerStore Live</h1>
                    <h2>Revisit Our Highlights</h2>
                </div>
                <div className="containerButtons">
                    <button href="#">Learn More <span>{'>'}</span></button>
                    <button href="#">Buy <span>{'>'}</span></button>
                </div>
            </div>

            {/*---------- RAZER SCHOOL -----------*/}
            <div className="razerSchool">
                <div className="razer-containerTitle">
                    <h1>The New Razer Blade 15</h1>
                    <h2>NOW WITH 11TH GEN INTEL® PROCESSOR</h2>
                </div>
                <div className="containerButtons">
                    <button href="#">Shop Now <span>{'>'}</span></button>
                </div>
            </div>

            {/*---------- RAZER BARRACUDA X -----------*/}
            <div className="razerBarracudaX">
                <div className="razer-containerTitle">
                    <h1>Razer Wolverine V2 Chroma</h1>
                    <h2>Customize.Control.Conquer</h2>
                </div>
                <div className="containerButtons">
                    <button href="#">Learn More <span>{'>'}</span></button>
                    <button href="#">Buy <span>{'>'}</span></button>
                </div>
            </div>

            {/*---------- PRODUCTS -----------*/}
            <div className="products">
                <div className="gaming">
                    <div className="razer-containerTitle-products">
                        <h1>The Razer Kraken V3 Range</h1>
                        <h2>The deepest immersion. Unleashed.</h2>
                    </div>
                    <div className="containerButtons-products">
                        <button href="#">Learn More <span>{'>'}</span></button>
                        <button href="#">Buy <span>{'>'}</span></button>
                    </div>
                </div>

                <div className="newRazerBlade">
                    <div className="razer-containerTitle-products">
                        <h1>Razer Zephyr</h1> 
                        <h2>Stay safe, social and sustainable</h2>
                    </div>
                    <div className="containerButtons-products">
                        <button href="#">Learn More <span>{'>'}</span></button>
                        <button href="#">Buy <span>{'>'}</span></button>
                    </div>
                </div>

                <div className="razerBlade14">
                    <div className="razer-containerTitle-products">
                        <h1>Razer Arctech Pro For Iphone 13</h1>
                        <h2>Lose The Heat,Win The Game</h2>
                    </div>
                    <div className="containerButtons-products">
                        <button href="#">Learn More <span>{'>'}</span></button>
                        <button href="#">Buy <span>{'>'}</span></button>
                    </div>
                </div>

                <div className="razerOrochi">
                    <div className="razer-containerTitle-products">
                        <h1>all new razer gaming components</h1>
                        <h2>Powerful meets colorful</h2>
                    </div>
                    <div className="containerButtons-products">
                        <button href="#">Learn More <span>{'>'}</span></button>
                        <button href="#">Buy <span>{'>'}</span></button>
                    </div>
                </div>

                <div className="razerBlackshark">
                    <div className="razer-containerTitle-products">
                        <h1>Razer Deathadder v2 X hyperspeed</h1>
                        <h2>ergonomics without limits</h2>
                    </div>
                    <div className="containerButtons-products">
                        <button href="#">Learn More <span>{'>'}</span></button>
                        <button href="#">Buy <span>{'>'}</span></button>
                    </div>
                </div>

                <div className="theBest">
                    <div className="razer-containerTitle-products">
                        <h1>Razercon 2021</h1>
                        <h2>a digital celebration for gamers. By gamers.</h2>
                    </div>
                    <div className="containerButtons-products">
                        <button href="#">learn More <span>{'>'}</span></button>
                    </div>
                </div>
            </div>

        </section>
    )
}