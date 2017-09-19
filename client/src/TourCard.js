/*global google*/

import React from 'react';

import { polygonParams, polylineParams } from './mapProps';

const TourCard = ({mapObj, tourData}) => {
  // console.log('tourdata: ',tourData);

  const clickCard = () => {
    // const tourId = tourData.info.tourId;
    //display card, load
    //execute resetMap()
    loadOverlays()
  }

  const loadOverlays = () => {
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
      console.log(overlay);
      overlay.setMap(mapObj);

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
