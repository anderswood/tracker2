
export const overlays = (state = {selectedOverlay: {}, displayedOverlays:[]}, action) => {

  switch (action.type) {
    case 'UPDATE_OVERLAYS':
      let filteredOverlays = state.displayedOverlays.filter( overlay => {
        return overlay.overlayID !== action.newOverlay.overlayID;
      })

      filteredOverlays.push(action.newOverlay);
      state.displayedOverlays = filteredOverlays;
      state.selectedOverlay = action.newOverlay;
      return { ...state }
      
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

    default:
      return state;
  }
}
