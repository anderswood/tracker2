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

export const addSelectedOverlay = (completeEvent) => {
  return {
    type: 'ADD_SELECTED_OVERLAY',
    completeEvent
  }
}

export const addDisplayedOverlay = (overlay) => {
  return {
    type: 'ADD_DISPLAYED_OVERLAY',
    overlay
  }
}
