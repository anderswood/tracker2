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

export const addTour = (tourInfo) => {
  return (dispatch, getState) => {
    const overlays = getState().overlays.displayedOverlays;

    dispatch({
      type: 'ADD_TOUR',
      tourInfo,
      overlays
    });
  }
}

//get displayedOverlays from overlays state
