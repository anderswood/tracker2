/*global google*/

import { polygonParams, polylineParams } from './mapProps';

export const createOverlay = (completeEvent) => {
  let rawOverlay = completeEvent.overlay;
  let overlayCoords = rawOverlay.getPath().getArray().map((coordPair, i) => {
    return {lat: coordPair.lat(), lng: coordPair.lng()}
  });

  return {
    overlayId: completeEvent.overlay.id || Date.now(),
    overlayType: completeEvent.type,
    overlayCoords: overlayCoords
  };
}

export const loadOverlays = (mapObj, overlayList) => {
  overlayList.forEach( path => {
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

// export const clearOverlays = (mapObj, overlayList) => {
//   overlayList.forEach( path => {
//     let overlay;
//
//     if (path.overlayType === 'polygon') {
//       const polygonParameters = polygonParams(path.overlayCoords);
//
//       overlay = new google.maps.Polygon(polygonParameters);
//     } else if (path.overlayType === 'polyline') {
//       const polylineParameters = polylineParams(path.overlayCoords);
//
//       overlay = new google.maps.Polyline(polylineParameters);
//     }
//
//     overlay.id = path.overlayId;
//     overlay.type = path.overlayType;
//     overlay.setMap(null);
//   });
// }
