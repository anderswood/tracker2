
export const tours = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TOUR':
      let updatedTours = Object.assign([], state)

      updatedTours.push(action.tour)
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
