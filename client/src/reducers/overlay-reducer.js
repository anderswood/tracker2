
export const overlays = (state = {selectedOverlay: {}, displayedOverlays:[]}, action) => {

  switch (action.type) {
    case 'UPDATE_OVERLAYS':
      let updatedState = {};
      let allDisplayedOverlays = Object.assign([],state.displayedOverlays);
      let filteredOverlays = allDisplayedOverlays.filter( overlay => {
        return overlay.overlayId !== action.newOverlay.overlayId;
      })

      filteredOverlays.push(action.newOverlay);
      updatedState.displayedOverlays = filteredOverlays;
      updatedState.selectedOverlay = action.newOverlay;
      return { ...updatedState };

      //
      // case 'CLEAR_SELECTED_OVERLAY':
      //   return []
      //
    //
    // case 'CLEAR_DISPLAYED_OVERLAYS':
    //   return []
    //
    // case 'REMOVE_DISPLAYED_OVERLAY':
    //   return [...state, action.overlay]

    case 'ACTIVATE_TOUR':
      return []

    case 'DEACTIVATE_TOUR':
      return []

    default:
      return state;
  }
}
