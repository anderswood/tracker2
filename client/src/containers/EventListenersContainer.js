import { connect } from 'react-redux';

import * as actions from '../actions/index';
import eventListeners from '../eventListeners';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddSelectedOverlay: (overlay) => {
      dispatch(actions.AddSelectedOverlay(overlay))
    },
    handleAddDisplayedOverlay: (overlay) => {
      dispatch(actions.AddSelectedOverlay(overlay))
    },
  }
}

export default connect(null, mapDispatchToProps)(eventListeners)
