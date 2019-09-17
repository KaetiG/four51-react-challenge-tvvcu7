import React from 'react';

const Restaurants = props => {
  const { restaurants, deleteRestaurant } = props;
  return (
    <React.Fragment>
      <div class="col-sm-4">
        <h2>Restaurants</h2>
        
        
          {restaurants.map((restaurant, index) =><div class="row"> 
          <button
            className="deleteBtn"
            value={restaurant} 
            key={index} 
            onClick={() => deleteRestaurant(index)}>Delete
          </button><p
          key={index}>
          
          <span class="col-sm-1"
          className="restName">{restaurant.name}</span>
          <span className="cuisineText">
          <small class="col-sm-2" class="float-none">({restaurant.cuisine})
          </small></span></p></div>)
        }
      </div>
    </React.Fragment>

  )
}

export default Restaurants;
