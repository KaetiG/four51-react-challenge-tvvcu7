import React from 'react';

const Restaurants = props => {
  const { restaurants, deleteRestaurant } = props;
  return (
    <React.Fragment>
      <div class="col-sm-4">
        <h2>Restaurants</h2>
        
        
          {restaurants.map((restaurant, index) =><div class="row"> <p
          key={index}><span class="col-sm-1"
          class="float-left">{restaurant.name}</span>
          <small class="col-sm-1">({restaurant.cuisine})
          </small> 
          <button 
            class="col-sm-1"
            class="float-right"
            className="btn btn-danger"
            value={restaurant} 
            key={index} 
            onClick={() => deleteRestaurant(index)}>Delete
          </button></p></div>)
        }
      </div>
    </React.Fragment>

  )
}

export default Restaurants;
