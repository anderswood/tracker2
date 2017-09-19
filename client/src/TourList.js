import React from 'react';

import TourCard from './TourCard';

const TourList = ({ mapObj, tourList, handleResetMap }) => {
  let tourListArr;

  if (!tourList.length) {
    tourListArr=<h3>No Tours Saved</h3>;
  } else {
    tourListArr = tourList.map( (tour, i) => {
      return <TourCard  handleResetMap={ handleResetMap }
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
