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


  render() {
    return (
      <div className="App">
        <MapTileContainer />
      </div>
    );
  }
}

export default App;
