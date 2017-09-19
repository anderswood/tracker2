import { connect } from 'react-redux';

import TourList from '../TourList';

const mapStateToProps = (state) => {
  console.log(state.tours.allTours);
  return {
    tourList: state.tours.allTours
  }
}

export default connect(mapStateToProps, null)(TourList)
