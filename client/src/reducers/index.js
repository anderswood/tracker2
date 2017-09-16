import { combineReducers } from 'redux';

import { mapState } from './map-reducer';
import { overlays } from './overlay-reducer';
import { stashes } from './stash-reducer';

export const rootReducer = combineReducers({
  mapState,
  overlays,
  stashes
})
