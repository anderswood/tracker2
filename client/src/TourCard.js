
import React from 'react';

import { loadOverlays, clearOverlays } from './helper';

const TourCard = ({
  tourData,
  handleResetMap,
  handleActivateTour,
  handleDeactivateTour,
  tours
}) => {

  const clickCard = () => {
    let mapObj = handleResetMap();
    // clearOverlays(mapObj, tourData.overlays);

    if (tours.activeTour !== tourData.tourId) {
      handleActivateTour(tourData.tourId);
      loadOverlays(mapObj, tourData.overlays);
    } else {
      handleDeactivateTour();
    }
  }

  const getClass = () => {
    return tours.activeTour === tourData.tourId ? 'card active-card' : 'card';
  }

  return (
    <div  className={ getClass() }
          onClick={ () => clickCard() }>
      <h3>{ tourData.info.name }</h3>
      <h4>{ tourData.info.lastVisited }</h4>
    </div>
  )
}

export default TourCard;
