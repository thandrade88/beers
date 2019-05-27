import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollIntoView from "./scrollintoview"

import Header from '../components/header'
import Home from '../components/home'
import Beer from '../components/beer'
import Favourite from '../components/favourite'

export default props => (
    <BrowserRouter>
        <div>
          <ScrollIntoView>
            <Header/>
            <div className="main">
              <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/beer/:id?"
                         render={props => (
                           <Beer {...props} />
                         )}
                  />
                <Route path="/favourites" component={Favourite} />
              </Switch>
            </div>
          </ScrollIntoView>
        </div>
    </BrowserRouter>
)

