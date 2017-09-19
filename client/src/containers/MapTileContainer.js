import { connect } from 'react-redux';

import * as actions from '../actions/index';
import MapTile from '../MapTile';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddMap: (map) => {
      dispatch(actions.addMap(map))
    },
    handleUpdateOverlays: (overlay) => {
      dispatch(actions.updateOverlays(overlay))
    },
  }
}

export default connect(null, mapDispatchToProps)(MapTile)
