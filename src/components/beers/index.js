import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import '../beerList'

import './styles.scss'

class Beers extends Component{
  constructor(props){
      super(props)
      this.showBeers = this.showBeers.bind(this);
      this.getBeers = this.getBeers.bind(this);
      this.state = {
        beers:[]
      }
  }

  componentDidMount() {
    this.getBeers();
  }

  getBeers() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(results => { return results.json() })
      .then(data => {
        this.setState({beers : data})
        window.Beers = this.state.beers;
      })
  }

  showBeers() {
    return this.state.beers.map((value, index) => {
      return (
        <NavLink to={`/beer/${value.id}`} key={index} className='beer' >
          <img src={value.image_url} alt={value.name} />
          <h3>{value.name}</h3>
        </NavLink>
      )
    })
  }

  render() {
    return (
       <div className='beer-list'>
         {this.showBeers()}
       </div>
    )
  }
}

export default Beers
