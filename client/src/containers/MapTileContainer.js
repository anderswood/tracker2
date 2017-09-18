import { connect } from 'react-redux';

import * as actions from '../actions/index';
import MapTile from '../MapTile';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddMap: (map) => {
      dispatch(actions.addMap(map))
    },
    handleAddSelectedOverlay: (overlay) => {
      dispatch(actions.addSelectedOverlay(overlay))
    },
    handleAddDisplayedOverlay: (overlay) => {
      dispatch(actions.addSelectedOverlay(overlay))
    },
  }
}

export default connect(null, mapDispatchToProps)(MapTile)
