import React from 'react'
import { Link } from 'react-router-dom'

import iconGold from '../../image/services/icon/icon1.svg'
import iconSilver from '../../image/services/icon/icon2.svg'
import iconGoldPin from '../../image/services/icon/icon3.svg'
import iconGoldWeb from '../../image/services/icon/icon4.svg'
import iconGift from '../../image/services/icon/icon5.svg'
import iconRazerCare from '../../image/services/icon/icon6.svg'
import iconRazerId from '../../image/services/icon/icon7.svg'

import Description from '../../components/description/Description'


import './style/service.scss'

const Services = () => {
    return (
        <div className="services">

            <div className="newIcon">
                <div className="newIcon-container">
                    <div>
                        <img src={iconGold} alt="Gold" />
                        <Link>
                            <button className="button-newConsole">Gold</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconSilver} alt="Silver" />
                        <Link>
                            <button className="button-newConsole">Silver</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconGoldPin} alt="Gold PINs" />
                        <Link>
                            <button className="button-newConsole">Gold PINs</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconGoldWeb} alt="Gold Webshop" />
                        <Link>
                            <button className="button-newConsole">Gold Webshop</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconGift} alt="Gift Cards" />
                        <Link>
                            <button className="button-newConsole">Gift Cards</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconRazerCare} alt="RazerCare" />
                        <Link>
                            <button className="button-newConsole">RazerCare</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconRazerId} alt="Razer ID" />
                        <Link>
                            <button className="button-newConsole">Razer ID</button>
                        </Link>
                    </div>
                </div>
            </div>

            <Description
                titleGreen="RAZER SERVICES"
                textTitle='Join over millions of users who enjoy using Razer Services to enrich their gaming experience.'
                text='Razer Gold and Silver offers users the competitive advantage in any battlefield. Use Gold PINs to purchase from our ever-expanding list of games in the Gold Webshop. Protect your gear with RazerCare and use Razer ID to access all the best services Razer has to offer.'
                textSub='Unlock your ultimate gaming potential with Razer Services now.'
                buttonNone='buttonNone'
            />

            <div className="services__razerGold product">
                <Description
                    titleWhite="RAZER GOLD"
                    text='Razer Gold is the unified virtual credits for gamers worldwide, available in over 42,000 games and entertainment titles. Use Razer Gold to buy games and in-game content to get more bang for your buck—including getting rewarded with Razer Silver and exclusive game deals.'
                    textSub='Get started by reloading your Razer Gold account online, or at any of our 5.6 million touchpoints around the world.'
                    buttonBlock={''}
                    buttonDescription={'Learn More >'}
                />
            </div>

            <div className="services__razerSilver product">
                <Description
                    titleWhite="RAZER SILVER"
                    textTitle='Razer Silver is the only loyalty rewards program for gamers.'
                    text='Earn Razer Silver simply by using Razer Gold to make your game purchases or participating in our software and services. Utilize your Razer Silver in exclusive events or use them to redeem exciting rewards—from Razer hardware to digital rewards and discounts.'
                    buttonBlock={''}
                    buttonDescription={'Learn More >'}
                />
            </div>

            <div className="services__goldPins product">
                <Description
                    titleWhite="GOLD PINS"
                    textTitle='Gold PINs are a digital code used to reload Razer Gold wallets or top up participating game credits.'
                    text='Gold PINs can be purchased at over 5.6 million touchpoints globally, including convenience stores, consumer electronics chains, and department stores.'
                    buttonBlock={''}
                    buttonDescription={'Learn More >'}
                />
            </div>

            <div className="services__goldWeb product">
                <Description
                    titleWhite="GOLD WEBSHOP"
                    textTitle='Browse over 42,000 games and entertainment titles in the Gold Webshop.'
                    text='Recharge on the hottest titles such as PUBG Mobile, Mobile Legends: Bang Bang, Genshin Impact, and many more! Check out our Gold Webshop for the full list of titles.'
                    buttonBlock={''}
                    buttonDescription={'Learn More >'}
                />
            </div>

            <div className="services__razerGift product">
                <Description
                    titleWhite="RAZER GIFT CARD - GIVE THE GIFT OF GAMING"
                    text='The Razer Gift Card unlocks the ultimate gifts for any gamer. From gaming peripherals to laptops to apparel, redeem from the largest catalog of Razer gear in the world, including rare and exclusive products only found on Razer.com. Recipients also enjoy 14-day risk free returns, and comprehensive customer support.'
                    buttonBlock={''}
                    buttonDescription={'Learn More >'}
                />
            </div>

            <div className="services__razerCare product">
                <Description
                    titleWhite="RAZERCARE"
                    text='Protect your Razer gear with RazerCare—includes extended warranty that covers both mechanical and electrical issues due to normal product usage.'
                    buttonBlock={''}
                    buttonDescription={'Learn More >'}
                />
            </div>

            <div className="services__razerId product">
                <Description
                    titleWhite={"RAZER ID"}
                    text='Gain a competitive advantage and leverage on our support, expertise and community with your Razer ID. Integrated with Razer s services and software, you can gain access to tons of tools with your Razer ID—including buying the best gamer gear on our site, redeeming Razer Silver, saving your personalized configs in Synapse, and more.'
                    buttonBlock={''}
                    buttonDescription={'Learn More >'}
                />
            </div>

        </div>
    )
}

export default Services