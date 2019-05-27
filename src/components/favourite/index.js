import React, {Component} from 'react'

import '../beerList'
import '../favList'

import './styles.scss'

export const addFavourite = (id) => {
  window.Fav.push(id)
}

export const removeFavourite = (id) => {
  window.Fav = window.Fav.filter((v)=> {
    if(v !== id) return v;
  })
}

class Favourite extends Component{
  constructor(props){
    super(props);
    this.handleClick   = this.handleClick.bind(this);
    this.state = {
      favourites:[]
    }
  }

  componentWillMount() {
    this.setState({favourites:window.Fav})
  }

  handleClick(id) {
    removeFavourite(id);
    this.setState({favourites : window.Fav})
  }

  render() {
    return (
      <div>
        <h1>My Favourites</h1>
        <div className="beer-list beer-list--favourites">
          {
            (this.state.favourites.length === 0) ? 'No favourite beer' :
            this.state.favourites.map((value, index) => {
              let beer = window.Beers.filter(v => (v.id === value))[0]
              return (
                <div key={index} className='beer'>
                  <img src={beer.image_url} alt={beer.name}/>
                  <h3>{beer.name}</h3>
                  <button onClick={() => (this.handleClick(beer.id))} >Remove Favourite</button>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Favourite;
