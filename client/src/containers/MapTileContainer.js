import { connect } from 'react-redux';

import * as actions from '../actions/index';
import MapTile from '../MapTile';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddMap: (map) => {
      dispatch(actions.addMap(map))
    },
    handleUpdateOverlays: (overlay) => {
      dispatch(actions.UpdateOverlays(overlay))
    },
  }
}

export default connect(null, mapDispatchToProps)(MapTile)
