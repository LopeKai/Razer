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
                        <img src={iconSustainability} alt="Stickers" />
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
                        <img src={iconDevelopers} alt="Sustainability" />
                        <Link>
                            <button className="button-newConsole">Sustainability</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community