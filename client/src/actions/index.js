export const addMap = (map) => {
  return {
    type: 'ADD_MAP',
    map
  }
}

export const updateOverlays = (newOverlay) => {
  return {
    type: 'UPDATE_OVERLAYS',
    newOverlay
  }
}

export const clearOverlays = () => {
  return {
    type: 'CLEAR_OVERLAYS'
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

export const activateTour = (tourId) => {
  return {
    type: 'ACTIVATE_TOUR',
    tourId
  }
}

export const deactivateTour = () => {

}

//get displayedOverlays from overlays state
