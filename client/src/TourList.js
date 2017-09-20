import React from 'react';

import TourCardContainer from './containers/TourCardContainer';

const TourList = ({ tourList, handleResetMap }) => {
  const tours = tourList.allTours;
  let tourListArr;

  if (!tours.length) {
    tourListArr = <h3>No Tours Saved</h3>;
  } else {
    tourListArr = tours.map( (tour, i) => {
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
