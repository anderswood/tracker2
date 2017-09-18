import React from 'react';

import TourCard from './TourCard';

const TourList = (props) => {
  let tourListArr;

  if (!props.tourList.length) {
    tourListArr=<h3>No Tours Saved</h3>;
  } else {
    tourListArr = props.tourList.map( (tour, i) => {
      return <TourCard  tourData={ tour }
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
