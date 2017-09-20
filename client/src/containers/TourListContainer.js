import { connect } from 'react-redux';

import TourList from '../TourList';

const mapStateToProps = (state) => {
  return {
    tours: state.tours
  }
}

export default connect(mapStateToProps, null)(TourList)
