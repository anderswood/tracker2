import { connect } from 'react-redux';

// import * as actions from '../actions/index';
import TourList from '../TourList';

const mapStateToProps = (state) => {
  return {
    tourList: state.tours
  }
}

export default connect(mapStateToProps, null)(TourList)
