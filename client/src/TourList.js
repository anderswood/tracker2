import React from 'react';

import TourCard from './TourCard';

const TourList = (props) => {
  // { mapObj, tourList, handleResetMap }
  let tourListArr;
  console.log(props);

  if (!props.tourList.length) {
    tourListArr = <h3>No Tours Saved</h3>;
  } else {
    tourListArr = props.tourList.map( (tour, i) => {
      return <TourCard  handleResetMap={ props.handleResetMap }
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
