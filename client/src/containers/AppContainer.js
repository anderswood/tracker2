import { connect } from 'react-redux';

import * as actions from '../actions/index';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    mapTile: state.mapState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddMap: (map) => {
      dispatch(actions.addMap(map))
    },
    handleAddPolyline: () => {
      dispatch(actions.addPolyline())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
