import React from 'react';

const Votes = props => {
  const { restaurants, castVote } = props;
  return (
    <React.Fragment>
    <div class="container-fluid">
    <div class="row" class="col-sm-10">
      <h2>Cast Your Vote!</h2>
    </div>
    <div class="row" class="col-sm-10">    
      {restaurants.map((restaurant, index) => {
        return (
          <button 
            className="voteBtn"
            key={index} 
            onClick={() => castVote(index)} 
            className="btn btn-primary">{restaurant.name}
          </button>
        )
      })}
      </div>
      </div>
    </React.Fragment>
  )
}

export default Votes