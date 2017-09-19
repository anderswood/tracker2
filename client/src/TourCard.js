/*global google*/

import React from 'react';

import { overlayParams } from './mapProps';

const TourCard = ({tourData}) => {
  // console.log('tourdata: ',tourData);

  const clickCard = () => {
    const tourId = tourData.info.tourId;
    //display card, load
    //execute resetMap()
    loadOverlays()
  }

  const loadOverlays = () => {
    tourData.overlays.map( path => {
      const overlayParameters = overlayParams(path.overlayCoords);
      let overlay;

      path.overlayType === 'polygon' ?
        overlay = new google.maps.Polygon(overlayParameters) :
        overlay = new google.maps.Polyline(overlayParameters);

      overlay.id = path.overlayId;
      overlay.type = path.overlayType;
      console.log(overlay);

      return overlay
    });

  }

  return (
    <div className='tour-card' onClick={ () => clickCard() }>
      <h3>{ tourData.info.name }</h3>
      <h4>{ tourData.info.lastVisited }</h4>
    </div>
  )
}

export default TourCard;
