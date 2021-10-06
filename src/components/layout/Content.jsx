import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Pc from '../../pages/pc/Pc'
import Console from '../../pages/console/Console'
import Mobile from '../../pages/mobile/Mobile'
import LifeStyle from '../../pages/lifeStyle/lifeStyle'
import Services from '../../pages/services/Services'
import Community from '../../pages/community/Community'
import Support from '../../pages/support/Support'

const Content = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/pc">
                    <Pc/>
                </Route>

                <Route path="/console"> 
                    <Console />
                </Route>

                <Route path="/mobile">
                    <Mobile />
                </Route>

                <Route path="/lifestyle">
                    <LifeStyle />
                </Route>

                <Route path="/services">
                    <Services />
                </Route>

                <Route path="/community">
                    <Community />
                </Route>

                <Route path="/support">
                    <Support />
                </Route>
            </Switch>
        </main>
    )
}

export default Content