import { connect } from 'react-redux';

import * as actions from '../actions/index';
import SaveTourBtn from '../SaveTourBtn';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSaveTour: (tour) => {
      dispatch(actions.addTour(tour))
    }
  }
}

export default connect(null, mapDispatchToProps)(SaveTourBtn)
