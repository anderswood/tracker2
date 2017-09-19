import { connect } from 'react-redux';

// import * as actions from '../actions/index';
import TourCard from '../TourCard';

const mapStateToProps = (state) => {
  return {
    // tourList: state.tours
  }
}

export default connect(mapStateToProps, null)(TourCard)
