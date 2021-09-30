import React from 'react'
import { Link } from 'react-router-dom'

import './style/lifeStyle.scss'

import Description from '../../components/description/Description'

import iconChairs from '../../image/lifestyle/icon/icon1.svg'
import iconApparel from '../../image/lifestyle/icon/icon2.svg'
import iconBags from '../../image/lifestyle/icon/icon3.svg'
import iconGear from '../../image/lifestyle/icon/icon4.svg'
import iconMasks from '../../image/lifestyle/icon/icon5.svg'
import iconSneki from '../../image/lifestyle/icon/icon6.svg'
import iconRespawn from '../../image/lifestyle/icon/icon7.svg'
import iconCollabs from '../../image/lifestyle/icon/icon8.svg'
import iconBook from '../../image/lifestyle/icon/icon9.svg'
import iconMac from '../../image/lifestyle/icon/icon10.svg'

const LifeStyle = (props) => {
  return (
    <div className="lifestyle">
      <div className="newIcon">
        <div className="newIcon-container">
          <div>
            <img src={iconChairs} alt="Chairs" />
            <Link>
              <button className="button-newConsole">Chairs</button>
            </Link>
            <p>New</p>
          </div>

          <div>
            <img src={iconApparel} alt="Apparel" />
            <Link>
              <button className="button-newConsole">Apparel</button>
            </Link>
          </div>

          <div>
            <img src={iconBags} alt="Bags" />
            <Link>
              <button className="button-newConsole">Bags</button>
            </Link>
          </div>

          <div>
            <img src={iconGear} alt="Gear" />
            <Link>
              <button className="button-newConsole">Gear</button>
            </Link>
          </div>

          <div>
            <img src={iconMasks} alt="Masks" />
            <Link>
              <button className="button-newConsole">Masks</button>
            </Link>
          </div>

          <div>
            <img src={iconSneki} alt="Sneki" />
            <Link>
              <button className="button-newConsole">Sneki Snek</button>
            </Link>
            <p>New</p>
          </div>

          <div>
            <img src={iconRespawn} alt="RESPAWN" />
            <Link>
              <button className="button-newConsole">RESPAWN</button>
            </Link>
          </div>

          <div>
            <img src={iconCollabs} alt="Collabs" />
            <Link>
              <button className="button-newConsole">Collabs</button>
            </Link>
          </div>

          <div>
            <img src={iconBook} alt="Book" />
            <Link>
              <button className="button-newConsole">Book</button>
            </Link>
          </div>

          <div>
            <img src={iconMac} alt="Mac" />
            <Link>
              <button className="button-newConsole">Mac</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lifestyle__chairs product">
        <Description
          title={'CHAIRS'}
          text={`Achieve perfect gaming form for your marathon gaming sessions with the Razer Iskur—a gaming chair with a built
            -in ergonomic lumbar support system`}
        />
      </div>

      <div className="lifestyle__snekiSnek product">
        <Description
          title={`SNEKI SNEK CARTOON SERIES`}
          subTitle={'Sponsored by Franklin Templeton '}
          text={`Can’t get enough of our adorable cutie? Catch Sneki Snek and friends as they work together and show why all of us should support sustainability! `}
        />
      </div>

      <div className="lifestyle__collabs product">
        <Description
          title={`COLLABS`}
          text={`We’re always looking to keep our gear fresh, and it doesn’t get any better than 
                working with other brands that we as gamers love and get hype for.`}
        />
      </div>

      <div className="lifestyle__apprel product">
        <Description
          title={`APPAREL`}
          text={`Made for the mavericks, rebels, and iconoclasts. When no-nonsense functionality meets design that speaks for itself, you’ll have no trouble making a statement.`}
        />
      </div>

      <div className="lifestyle__bags product">
        <Description
          title={`BAGS`}
          text={`Built for those who carry hard at work and play. Keep your gear secure and protected, and always be ready to perform at your best no matter where you’re headed.`}
        />
      </div>

      <div className="lifestyle__gear product">
        <Description
          title={`GEAR`}
          text={`While others see gaming as a hobby, for us, it's an entire way of life. If you share the same sentiments, then our assortment of add-ons will help you express that in every facet of your everyday routine.`}
        />
      </div>

      <div className="lifestyle__masks product">
        <Description
          title={`MASKS`}
          text={`Safety, style, comfort—our range of Razer face masks are designed to be an important yet seamless part of your life, offering everyday protection that looks and feels gre`}
        />
      </div>

      <div className="lifestyle__sneki product">
        <Description
          title={`SNEKI SNEK`}
          text={`Chief gaming mascot. Full-time conservationist. Our resident cutie may wear many hats, but will happily be yours to hold and snuggle.`}
        />
      </div>

      <div className="lifestyle__respawm product">
        <Description
          title={`RESPAWN`}
          text={`A gamer’s mind is the most important tool on the virtual battlefield. Help tap into your full potential with our mental performance drink mix or gum to take on the competition.`}
        />
      </div>

    </div>

  )
}

export default LifeStyle