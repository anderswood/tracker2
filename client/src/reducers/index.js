import { combineReducers } from 'redux';

import { mapState } from './map-reducer';
import { overlays } from './overlay-reducer';
import { tours } from './tour-reducer';

export const rootReducer = combineReducers({
  mapState,
  overlays,
  tours
})
