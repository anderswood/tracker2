import React from 'react';

import TourCardContainer from './containers/TourCardContainer';

const TourList = ({ tours, handleResetMap }) => {
  const toursList = tours.allTours;
  let tourListArr;

  if (!toursList.length) {
    tourListArr = <h3>No Tours Saved</h3>;
  } else {
    tourListArr = toursList.map( (tour, i) => {
      return <TourCardContainer  handleResetMap={ handleResetMap }
                        tourData={ tour }
                        key={ i }/>
      });
  }

  return(
    <section className='saved-tours-container'>
        <h2>Saved Tours</h2>
        <div className='saved-tours-list'>{ tourListArr }</div>
    </section>
  )
}

export default TourList;
