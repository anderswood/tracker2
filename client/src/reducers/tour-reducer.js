
export const tours = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TOUR':
      let updatedTours = Object.assign([], state)
      let tourObj = {
        tourId: Date.now(),
        overlays: action.overlays,
        info: action.tourInfo
      }

      updatedTours.push(tourObj)
      return [ ...updatedTours ]
    //
    // case 'REMOVE_TOUR':
    //   return []
    //
    // case 'CLEAR_TOURS':
    //   return []

    default:
      return state;
  }
}
