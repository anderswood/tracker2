import { connect } from 'react-redux';

import * as actions from '../actions/index';
import TourCard from '../TourCard';

const mapStateToProps = (state) => {
  return {
    tours: state.tours
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleActivateTour: (tourId) => {
      dispatch(actions.activateTour(tourId))
    },
    handleDeactivateTour: () => {
      dispatch(actions.deactivateTour())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourCard)
