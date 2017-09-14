/*global google*/
import React from 'react';

import { polylineParams } from './mapProps';

export const MapMess = (props) => {

  const pathCoords = [
    {lat: 40.308199904787244, lng: -105.71027755737305},
    {lat: 40.299559635122314, lng: -105.70615768432617},
    {lat: 40.29877410126186, lng: -105.71714401245117},
    {lat: 40.311865139853445, lng: -105.71903228759766}
  ]

  if(props.mapInfo.center) {
    let overlay = new google.maps.Polyline(polylineParams(pathCoords))
    overlay.setMap(props.mapInfo);
  }

  return(
    <div>HELLOO</div>
  )
}

export default MapMess;
