export const addMap = (map) => {
  return {
    type: 'ADD_MAP',
    map
  }
}

export const addPolyline = () => {
  return {
    type: 'ADD_POLYLINE',
  }
}

export const UpdateOverlays = (newOverlay) => {
  return {
    type: 'UPDATE_OVERLAYS',
    newOverlay
  }
}

export const addTour = (tour) => {
  return {
    type: 'ADD_TOUR',
    tour
  }
}
