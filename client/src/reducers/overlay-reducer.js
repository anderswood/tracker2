
export const overlays = (state = {}, action) => {

  switch (action.type) {
    case 'ADD_SELECTED_OVERLAY':
      let rawOverlay = action.completeEvent.overlay;
      let overlayCoords = rawOverlay.getPath().getArray().map((coordPair, i) => {
        return {lat: coordPair.lat(), lng: coordPair.lng()}
      });

      let selectedOverlay = {
        overlayID: Date.now(),
        overlayType: action.completeEvent.type,
        overlayCoords: overlayCoords
      }

      return { selectedOverlay };

    //
    // case 'CLEAR_SELECTED_OVERLAY':
    //   return []
    //
    case 'ADD_DISPLAYED_OVERLAY':
      // state.displayedOverlays
      return [...state, action.overlay]
    //
    // case 'CLEAR_DISPLAYED_OVERLAYS':
    //   return []
    //
    // case 'REMOVE_DISPLAYED_OVERLAY':
    //   return [...state, action.overlay]

    default:
      return state;
  }
}
