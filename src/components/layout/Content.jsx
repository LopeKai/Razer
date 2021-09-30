import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Pc from '../../pages/pc/Pc'
import Console from '../../pages/console/Console'
import Mobile from '../../pages/mobile/Mobile'
import LifeStyle from '../../pages/lifeStyle/lifeStyle'

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
            </Switch>
        </main>
    )
}

export default Content