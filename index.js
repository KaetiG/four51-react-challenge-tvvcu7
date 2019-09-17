import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Restaurants from './Restaurants';
import Results from './Results';
import Vote from './Vote';
import Add from './Add';
import './style.css';

const restaurants = [
  { name: "NafNaf",  votes: 4, cuisine: "Medeterranian" },
  { name: "Pizza Luce", votes: 6, cuisine: "Italian" },
  { name: "Whole Foods",  votes: 2, cuisine: "Salads" }
];


class App extends Component {
  constructor() {
    super();
    this.handleRestaurantVote = this.handleRestaurantVote.bind(this);
    this.handleDeleteRestaurant = 
    this.handleDeleteRestaurant.bind(this);
    this.state = {
      restaurants,
      newRestaurant: {
        name: '',
        votes: 0,
        cuisine: ''
      },
      totalVotes: 12
    };
  }
  //added two properties to state, one for when a new restaurant is added, and one that has the starting total of votes 

  handleRestaurantVote(index) {
    const restaurant = this.state.restaurants[index];
    this.setState(prevState => ({
      ...prevState,
      restaurant: {
        ...restaurant,
        votes: restaurant.votes++
      },
      totalVotes: this.state.totalVotes + 1
    }))
    console.log(this.state.totalVotes)
    //this is console logging as 1 number off, so its accurate if the original state starts at 13, but then that throws of the starting percentages
  };

  handleDeleteRestaurant(index) {
    //currently I'm able to console log the correct restaurant and grab all its info on click, but I am having some trouble getting .filter() to work for me.  
    const restaurant = this.state.restaurants[index];
    console.log('clicked', restaurant)
    this.setState({
      restaurants: this.state.restaurants.filter(function(restaurant){
        return restaurants[index] !== [index];
      })
    })
  }

  handleChangeFor = (propertyName) => (event) => {
  this.setState({
    newRestaurant: {
    ...this.state.newRestaurant,
    [propertyName]: event.target.value
    }
  })
  //this allows the user to see what they are typing in the input and it actively changes the state for newRestaurant
}

addRestaurant = (event) => {
  this.setState({
    restaurants: [...this.state.restaurants, this.state.newRestaurant],
  })
  this.setState({
    newRestaurant: {
      name: '',
      votes: 0,
      cuisine: ''
    }
  })
  //this takes the current state of newRestaurant and adds it into the original array, so that when the restaurants array is mapped and displayed on the DOM, the new restaurant is included 
}

  render() {
    return (
      <body>
      <center>
      <div class="container-fluid">
        <br />
          <h1>Where Should We Eat Lunch Today?</h1>
        <br />
      <div class="row">
      <div class="col-md-4">
        <h2>Add A Restaurant</h2>    
        <input 
          value={this.state.restaurants.name} 
          onChange={this.handleChangeFor('name')}
          placeholder="restaurant name">
        </input>
        <br />
        <input 
          value={this.state.restaurants.cuisine}       onChange={this.handleChangeFor('cuisine')}
          placeholder="cuisine type">
        </input>
        <br />
        <button 
          onClick={this.addRestaurant}
          className="submitBtn">Add Restaurant
        </button>
        </div>
        <Restaurants restaurants={this.state.restaurants} deleteRestaurant={this.handleDeleteRestaurant}/>
        <Results restaurants={this.state.restaurants} totalVotes={this.state.totalVotes}/> 
        </div>       
        <Vote restaurants={this.state.restaurants} castVote={this.handleRestaurantVote}/>
      </div>
      </center>
      </body>
    );
  }
}

render(<App />, document.getElementById('root'));
