import React, { Component } from 'react';
import './App.css';

// import { polygonParams, polylineParams, drawingMgrProps, initMapOptions } from './mapProps';
// import MapMess from './MapMess';
import MapTileContainer from './containers/MapTileContainer';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {

  }

  handleClicky () {
    // this.props.handleAddMap(this.state.myMap);
  }

  handleAdd () {
    this.props.handleAddPolyline();
  }

  render() {
    return (
      <div className="App">
        <MapTileContainer />
        <button onClick={ () => this.handleClicky() }>Add Map</button>
        <button onClick={ () => this.handleAdd() }>Add Polyline</button>
        {/* <MapMess mapInfo={ this.state.myMap } /> */}
      </div>
    );
  }
}

export default App;
