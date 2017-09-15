/*global google*/
import { polylineParams } from '../mapProps';

export const mapState = (state = [], action) => {
  switch (action.type) {

    case 'ADD_MAP':
      return [...state, action.map]

    case 'ADD_POLYLINE':
      const pathCoords = [
        {lat: 40.308199904787244, lng: -105.71027755737305},
        {lat: 40.299559635122314, lng: -105.70615768432617},
        {lat: 40.29877410126186, lng: -105.71714401245117},
        {lat: 40.311865139853445, lng: -105.71903228759766}
      ]
      let overlay = new google.maps.Polyline(polylineParams(pathCoords))
      console.log(overlay);
      overlay.setMap(state[0]);
      return state;

    default:
      return state;
  }
}
