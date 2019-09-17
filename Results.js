import React from 'react';

const Results = props => {
  const { restaurants, totalVotes } = props;
  restaurants.sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes));
  return (
    <React.Fragment>
    <div class="col-sm-4" className="resultsDiv">
      <h2>Live Results</h2>
    
    <div class="row">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Restaruant</th>
            <th>Votes</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.votes}</td>
                <td>{(restaurant.votes / totalVotes).toPrecision(2) * 100}%</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      </div>
    </React.Fragment>
  )
}

export default Results;