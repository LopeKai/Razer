import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Pc from '../../pages/Pc'
import Mobile from '../../pages/Mobile'

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

                <Route path="/mobile">
                    <Mobile />
                </Route>
            </Switch>
        </main>
    )
}

export default Content