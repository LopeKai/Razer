import React from 'react'
import { Link } from 'react-router-dom'

import './style/community.scss'

import iconGet from '../../image/community/icon/icon1.svg'
import iconEsports from '../../image/community/icon/icon2.svg'
import iconEvents from '../../image/community/icon/icon3.svg'
import iconInsider from '../../image/community/icon/icon4.svg'
import iconWallpapers from '../../image/community/icon/icon5.svg'
import iconStickers from '../../image/community/icon/icon6.svg'
import iconDevelopers from '../../image/community/icon/icon7.svg'
import iconSustainability from '../../image/community/icon/icon8.svg'

import iconFacebook from '../../image/community/social/icon/social1.svg'
import iconInstagram from '../../image/community/social/icon/social2.svg'
import iconTwitter from '../../image/community/social/icon/social3.svg'
import iconYouTube from '../../image/community/social/icon/social4.svg'
import iconTikTok from '../../image/community/social/icon/social5.svg'
import iconTwitch from '../../image/community/social/icon/social6.svg'
import imageTeamRazer from '../../image/community/social/image3.jpg'
import imageBottle from '../../image/community/social/image4.jpg'

import Description from '../../components/description/Description'

const Community = (props) => {
    return (
        <div className="community">
            <div className="newIcon">
                <div className="newIcon-container">
                    <div>
                        <img src={iconGet} alt="Get Started" />
                        <Link>
                            <button className="button-newConsole">Get Started</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconEsports} alt="Esports" />
                        <Link>
                            <button className="button-newConsole">Esports</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconEvents} alt="Events" />
                        <Link>
                            <button className="button-newConsole">Events</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconInsider} alt="Insider" />
                        <Link>
                            <button className="button-newConsole">Insider</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconWallpapers} alt="Wallpapers" />
                        <Link>
                            <button className="button-newConsole">Wallpapers</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconStickers} alt="Stickers" />
                        <Link>
                            <button className="button-newConsole">Stickers</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconDevelopers} alt="Developers" />
                        <Link>
                            <button className="button-newConsole">Developers</button>
                        </Link>
                    </div>

                    <div>
                        <img src={iconSustainability} alt="Sustainability" />
                        <Link>
                            <button className="button-newConsole">Sustainability</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="community__razer community">
                <h2>
                    Welcome to the <br />
                    <strong> Razer community </strong>
                </h2>
            </div>

            <div className="community__welcome">
                <p>
                    Welcome to the Razer Community – where millions of gamers connect to get our latest news, take part in giveaways, and interact with us be it live on stream, or through our posts.
                </p>

                <p>
                    Have an awesome Razer setup you’d like to show us? Drawn a cool piece of fanart? Drop us a message or tag us @Razer on our social pages. You might just get featured and be rewarded with cool Razer swag
                </p>
            </div>

            <div className="community__startYour community">
                <Description
                    titleWhite="DON’T KNOW WHERE TO BEGIN? START YOUR JOURNEY HERE."
                    buttonDescription={'Get Started >'}
                />
            </div>

            <div className="community__liveOnStream community">
                <Description
                    titleWhite="WANT TO KNOW THE NEXT TIME WE GO LIVE ON STREAM?"
                    buttonDescription={'Discover Events >'}
                />
            </div>

            <div className="community__timeRazer community">
                <Description
                    titleWhite="GAME FOR SOME COMPETITION? LEARN MORE ABOUT TEAM RAZER."
                    buttonDescription={'This is Esports >'}
                />
            </div>

            <div className="community__products">
                <div className="community__products-container">
                    <div>
                        <Description className="description"
                            titleWhite="CHAT ON RAZER INSIDER"
                            buttonDescription="Learn More >"
                        />
                    </div>

                    <div>
                        <Description
                            titleWhite="LEARN ABOUT OUR SUSTAINABILITY EFFORTS"
                            buttonDescription="Learn More >"
                        />
                    </div>

                    <div>
                        <Description
                            titleWhite="GLOW UP WITH OUR DESKTOP WALLPAPERS"
                            buttonDescription="View all >"
                        />
                    </div>

                    <div>
                        <Description
                            titleWhite="BE A PART OF OUR DEVELOPER COMMUNITY"
                            buttonDescription="Learn More >"
                        />
                    </div>
                </div>
            </div>

            <div className="community__socialNetworks">
                <div className="community__socialNetworks-container">
                    <div>
                        <h1>JOIN OUR MILLIONS OF GAMERS TODAY BY FOLLOWING US ON:</h1>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/RazerBrazil/?brand_redir=13848807575" target="_blank">
                                    <img src={iconFacebook} alt="Facebook" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/razer/" target="_blank">
                                    <img src={iconInstagram} alt="Instagram" />
                                </a>
                            </li>

                            <li>
                                <a href="https://twitter.com/razer/" target="_blank">
                                    <img src={iconTwitter} alt="Twitter" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/razer/" target="_blank">
                                    <img src={iconYouTube} alt="YouTube" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.tiktok.com/@razer?" target="_blank">
                                    <img src={iconTikTok} alt="TikTok" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.twitch.tv/razer" target="_blank">
                                    <img src={iconTwitch} alt="Twitch" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1>CEO, CHIEF GAMER, FATHER OF SNEKI</h1>
                        <p>Follow Min-Liang Tan on social</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/minliangtan" target="_blank">
                                    <img src={iconFacebook} alt="Facebook" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/minliangtan/?hl=en" target="_blank" >
                                    <img src={iconInstagram} alt="Instagram" />
                                </a>
                            </li>

                            <li>
                                <a href="https://twitter.com/minliangtan/" target="_blank">
                                    <img src={iconTwitter} alt="Twitter" />
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <h1>MORE RAZER CHANNELS:</h1>
                        <div className="containerProducts">
                            <div>
                                <img src={imageTeamRazer} alt="Team Razer" />
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/TeamRazer" target="_blank">Facebook</a>
                                    </li>

                                    <li>
                                        <a href="https://www.instagram.com/teamrazer/" target="_blank">Instagram</a>
                                    </li>

                                    <li>
                                        <a href="https://twitter.com/teamrazer" target="_blank">Twitter</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <img src={imageBottle} alt="Bottle" />
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/respawnbyrazer" target="_blank">Facebook</a>
                                    </li>

                                    <li>
                                        <a href="https://www.instagram.com/respawnbyrazer/" target="_blank">Instagram</a>
                                    </li>

                                    <li>
                                        <a href="https://twitter.com/respawnbyrazer" target="_blank">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Community