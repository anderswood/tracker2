
export const tours = (state = {allTours: [], activeTour: ''}, action) => {
  switch (action.type) {

    case 'ADD_TOUR':
      let updatedState = Object.assign({}, state);
      let tourObj = {
        tourId: Date.now(),
        overlays: action.overlays,
        info: action.tourInfo
      }

      updatedState.allTours.push(tourObj);
      return { ...updatedState };
    //
    // case 'REMOVE_TOUR':
    //   return []
    //
    // case 'CLEAR_TOURS':
    //   return []

    case 'ACTIVATE_TOUR':
      let updateState = Object.assign({}, state);

      updateState.activeTour = action.tourId;
      return { ...updateState }

    case 'DEACTIVATE_TOUR':
      return []

    default:
      return state;
  }
}
