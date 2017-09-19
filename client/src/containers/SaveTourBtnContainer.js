import { connect } from 'react-redux';

import * as actions from '../actions/index';
import SaveTourBtn from '../SaveTourBtn';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSaveTour: (tourInfo) => {
      dispatch(actions.addTour(tourInfo))
    }
  }
}

export default connect(null, mapDispatchToProps)(SaveTourBtn)
