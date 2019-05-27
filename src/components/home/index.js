import React from 'react'
import Beers from './../beers'

const Home = () => {
    return (
          <div className='home'>
              <h1>Beers</h1>
              <div id="beers">
                  <Beers />
              </div>
          </div>
      )
}

export default Home;
