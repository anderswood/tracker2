/*global google*/

export const polygonParams = (overlayCoordsArr) => {
  return {
    paths: overlayCoordsArr,
    draggable: false,
    editable: false,
    fillColor: '#E4801C',
    fillOpacity: 0.2,
    strokeColor: '#E4801C',
    strokeOpacity: 0.8,
    strokeWeight: 2,
  }
}


export const polylineParams = (overlayCoordsArr) => {
  return {
    path: overlayCoordsArr,
    draggable: false,
    editable: false,
    geodesic: true,
    strokeColor: '#E4801C',
    strokeOpacity: 0.8,
    strokeWeight: 2
  }
}

export const drawingMgrProps = () => {
  return {
    drawingMode: google.maps.drawing.OverlayType.POLYGON,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ['polygon', 'polyline']
    },
    polygonOptions: {
      draggable: true,
      editable: true,
      clickable: true,
      fillColor: '#E4801C',
      fillOpacity: 0.2,
      strokeColor: '#E4801C',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      zIndex: 1
    },
    polylineOptions: {
      draggable: true,
      editable: true,
      geodesic: true,
      strokeColor: '#E4801C',
      strokeOpacity: 0.8,
      strokeWeight: 2
    }
  }
}

export const initMapOptions = () => {
  return {
    zoom: 13,
    center: new google.maps.LatLng(40.3058035,-105.7208812),
    mapTypeId: 'terrain'
  }
}
