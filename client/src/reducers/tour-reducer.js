
export const tours = (state = {allTours: [], activeTour: ''}, action) => {
  let updatedState = {};

  switch (action.type) {

    case 'ADD_TOUR':
      updatedState = Object.assign({}, state);
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
      updatedState = Object.assign({}, state);

      updatedState.activeTour = action.tourId;
      return { ...updatedState }

    case 'DEACTIVATE_TOUR':
      updatedState = Object.assign({}, state);

      updatedState.activeTour = '';
      return { ...updatedState }

    default:
      return state;
  }
}
