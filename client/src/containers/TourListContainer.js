import { connect } from 'react-redux';

import TourList from '../TourList';

const mapStateToProps = (state) => {
  return {
    tourList: state.tours
  }
}

export default connect(mapStateToProps, null)(TourList)
