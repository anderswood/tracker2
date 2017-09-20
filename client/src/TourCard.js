/*global google*/

import React from 'react';

import { polygonParams, polylineParams } from './mapProps';

const TourCard = ({
  tourData,
  handleResetMap,
  handleActivateTour,
  handleDeactivateTour,
  tourList
}) => {

  const loadOverlays = (mapObj) => {
    tourData.overlays.forEach( path => {
      let overlay;

      if (path.overlayType === 'polygon') {
        const polygonParameters = polygonParams(path.overlayCoords);

        overlay = new google.maps.Polygon(polygonParameters);
      } else if (path.overlayType === 'polyline') {
        const polylineParameters = polylineParams(path.overlayCoords);

        overlay = new google.maps.Polyline(polylineParameters);
      }

      overlay.id = path.overlayId;
      overlay.type = path.overlayType;
      overlay.setMap(mapObj);
    });
  }

  const clickCard = () => {
    let mapObj = handleResetMap();

    if (tourList.activeTour !== tourData.tourId) {
      handleActivateTour(tourData.tourId);
      loadOverlays(mapObj);
    } else {
      handleDeactivateTour();
    }
  }

  const getClass = () => {
    return tourList.activeTour === tourData.tourId ? 'card active-card' : 'card';
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
