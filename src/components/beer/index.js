import React, {Component} from 'react'
import {addFavourite,removeFavourite} from '../favourite'

import '../favList'

import './styles.scss'

class Beer extends Component{
  constructor(props){
      super(props)

      this.getBeer      = this.getBeer.bind(this);
      this.clickHandler = this.clickHandler.bind(this);

      this.state = {
        beer      : [],
        btnTxt: ''
      }
  }

  componentDidMount() {
    this.getBeer();
  }

  getBeer() {
    fetch(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`)
      .then(results => { return results.json() })
      .then(data => {
        let beer = data[0];
        this.setState(
        {
          beer : beer,
          btnTxt: window.Fav.includes(beer.id) ? 'Remove from Favourite' : 'Add to Favourite'
        })
      })
  }

  clickHandler() {
    const { beer } = this.state;
    if(window.Fav.includes(beer.id)) {
      removeFavourite(beer.id);
      this.setState({btnTxt:'Add to Favourite'})
    } else {
      addFavourite(beer.id);
      this.setState({btnTxt:'Remove from Favourite'})
    }
  }

  render() {
    const { beer } = this.state;

    return (
       <div className='beer-single'>
         <div className='thumb'>
           <img src={beer.image_url} alt={beer.name}/>
         </div>
         <div className="info">
           <h1>{beer.name}</h1>
           <h2>{beer.tagline}</h2>
           <h3>First Brewed: {beer.first_brewed}</h3>
           <p>{beer.description}</p>

           <button onClick={this.clickHandler.bind(this)}>{this.state.btnTxt}</button>
         </div>
       </div>
    )
  }
}

export default Beer;
