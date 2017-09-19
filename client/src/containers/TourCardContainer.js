import { connect } from 'react-redux';

import * as actions from '../actions/index';
import TourCard from '../TourCard';

const mapDispatchToProps = (dispatch) => {
  return {
    handleActivateTour: (tourId) => {
      dispatch(actions.activateTour(tourId))
    }
  }
}

export default connect(null, mapDispatchToProps)(TourCard)
